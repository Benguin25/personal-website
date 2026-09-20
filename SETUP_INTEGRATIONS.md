# Spotify and GitHub integration setup

The homepage works without credentials: each integration shows a small unavailable state and the rest of the site continues to render. To enable both integrations locally, copy the example file:

```powershell
Copy-Item .env.example .env.local
```

Never commit `.env.local`. It is ignored by this repository. None of these variables should be prefixed with `NEXT_PUBLIC_` because the credentials are read only by server-side API routes.

## Spotify

The site uses Spotify's Authorization Code flow. It exchanges a long-lived refresh token for short-lived access tokens on the server, then requests the currently playing track or, when playback is inactive, the most recently played track.

### 1. Create a Spotify app

1. Sign in to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard).
2. Select **Create app**.
3. Enter a name and description. A website URL is optional for local setup.
4. Add this exact redirect URI: `http://127.0.0.1:3000/callback`
5. Select **Web API**, accept Spotify's terms, and create the app.
6. Open the app's **Settings**. Copy the **Client ID**, then select **View client secret** and copy the **Client Secret**.

Spotify requires HTTPS except for explicit loopback addresses; `localhost` is not accepted. The redirect URI used while authorizing and exchanging the code must match the dashboard value exactly. The app does not implement a callback page—the browser may show this site's 404 page after authorization, but the authorization code is still visible in the address bar.

### 2. Authorize your Spotify account

Only these read-only scopes are needed:

- `user-read-currently-playing`
- `user-read-recently-played`

In PowerShell, set your client ID and generate the authorization URL:

```powershell
$clientId = 'PASTE_YOUR_CLIENT_ID'
$redirectUri = 'http://127.0.0.1:3000/callback'
$scopes = 'user-read-currently-playing user-read-recently-played'
$authorizeUrl = 'https://accounts.spotify.com/authorize?response_type=code&client_id=' + [uri]::EscapeDataString($clientId) + '&scope=' + [uri]::EscapeDataString($scopes) + '&redirect_uri=' + [uri]::EscapeDataString($redirectUri)
$authorizeUrl
```

Paste the printed URL into a browser, sign in as the Spotify account whose activity should appear, and approve access. Spotify redirects to a URL resembling:

```text
http://127.0.0.1:3000/callback?code=AQD...
```

Copy only the value after `code=` (up to any following `&`). Authorization codes are short-lived and single-use, so exchange it immediately.

### 3. Exchange the code for a refresh token

Run the following in the same PowerShell window. Values assigned here remain local to that shell session.

```powershell
$clientSecret = 'PASTE_YOUR_CLIENT_SECRET'
$authorizationCode = 'PASTE_THE_CODE_FROM_THE_REDIRECT_URL'
$basicAuth = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("${clientId}:${clientSecret}"))
$tokenResponse = Invoke-RestMethod -Method Post -Uri 'https://accounts.spotify.com/api/token' -Headers @{ Authorization = "Basic $basicAuth" } -ContentType 'application/x-www-form-urlencoded' -Body @{ grant_type = 'authorization_code'; code = $authorizationCode; redirect_uri = $redirectUri }
$tokenResponse.refresh_token
```

Copy the printed refresh token once and keep it private. If the request says the code is invalid or expired, repeat the authorization step to get a new code. If the response does not contain a refresh token, revoke the app's access in your Spotify account and authorize again with the two scopes above.

Add the three Spotify values to `.env.local`:

```dotenv
SPOTIFY_CLIENT_ID=your_real_client_id
SPOTIFY_CLIENT_SECRET=your_real_client_secret
SPOTIFY_REFRESH_TOKEN=your_real_refresh_token
```

You do not store an access token. On each status request, the server sends the refresh token and client credentials to Spotify's token endpoint. Spotify returns a short-lived access token, which the server uses without logging or returning it. The refresh token normally remains valid until access is revoked, the app is deleted, or Spotify invalidates it.

Official references: [Authorization Code flow](https://developer.spotify.com/documentation/web-api/tutorials/code-flow), [redirect URI rules](https://developer.spotify.com/documentation/web-api/concepts/redirect_uri), and [Spotify scopes](https://developer.spotify.com/documentation/web-api/concepts/scopes).

## GitHub

The site calls GitHub's GraphQL API on the server and renders the returned `contributionCalendar` as native HTML squares. It does not scrape GitHub or send the token to the browser.

### 1. Create a least-privilege token

A **fine-grained personal access token** is recommended. GitHub includes read access to public repositories with fine-grained tokens, so this public contribution-calendar query does not need repository write access or additional account permissions.

1. Sign in to GitHub and open **Settings** → **Developer settings** → **Personal access tokens** → **Fine-grained tokens**.
2. Select **Generate new token**.
3. Name it something specific, such as `personal-website-contributions`, and choose a practical expiration date.
4. Set **Resource owner** to your own account.
5. Under **Repository access**, choose **Public Repositories (read-only)**. Do not grant access to private repositories.
6. Leave additional repository and account permissions at **No access**. Metadata read access is included automatically.
7. Generate the token and copy it immediately.

This intentionally limits the graph to activity GitHub exposes through public resources. Do not grant `Contents`, `Administration`, or write permissions merely for this graph. If your organization restricts fine-grained tokens, a classic PAT can authenticate the query, but GitHub's GraphQL documentation requires `public_repo` for public-repository access; fine-grained remains the narrower choice here.

Add the values to `.env.local`:

```dotenv
GITHUB_TOKEN=github_pat_your_real_token
GITHUB_USERNAME=Benguin25
```

The username has a default of `Benguin25`, but keeping it in the environment makes the deployment explicit. The token is required because GitHub's GraphQL endpoint does not support this request anonymously.

GitHub's standard authenticated GraphQL limit is generally 5,000 points per user per hour. This implementation asks for one calendar and caches it for one hour on the server/Vercel edge cache, so normal portfolio traffic should stay well below that limit. Failed and rate-limited requests become the same visitor-safe unavailable state.

Official references: [authenticating GraphQL calls](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql), [creating and managing PATs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens), and [GraphQL rate limits](https://docs.github.com/en/graphql/overview/rate-limits-and-query-limits-for-the-graphql-api).

## Run and test locally

After saving `.env.local`, restart Next.js so it reads the new values:

```powershell
npm install
npm run dev
```

Open `http://127.0.0.1:3000` and scroll below the hero. Test the states as follows:

1. Play a Spotify track and refresh; the card should say **Now Playing** and animate its small equalizer.
2. Pause Spotify, wait a few seconds, and refresh; the card should say **Recently Played** with no equalizer.
3. Open `http://127.0.0.1:3000/api/spotify`; it should contain track display data only—never access or refresh tokens.
4. Confirm the GitHub grid loads and links to `https://github.com/Benguin25`.
5. Open `http://127.0.0.1:3000/api/github`; it should contain contribution dates/counts only—never the GitHub token.
6. Temporarily rename one credential in `.env.local`, restart the dev server, and confirm the matching card shows its unavailable state while the homepage still works. Restore the credential afterward.

Before deploying, run:

```powershell
npm run lint
npm run build
```

## Configure Vercel

1. Open the project in the [Vercel dashboard](https://vercel.com/dashboard).
2. Go to **Settings** → **Environment Variables**.
3. Add `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN`, `GITHUB_TOKEN`, and `GITHUB_USERNAME` exactly as named.
4. Apply them to **Production** and to **Preview** only if you want integrations on preview deployments. Add separate Development values only if you use `vercel env pull`.
5. Redeploy. Environment-variable changes do not affect an already-built deployment until it is redeployed.

## Security checklist

- Secrets are read only in `lib/spotify.ts` and `lib/github.ts`, which are guarded by `server-only` imports.
- No credential uses the `NEXT_PUBLIC_` prefix.
- API routes return only normalized track or contribution display data.
- Upstream error bodies and tokens are neither returned nor logged.
- `.env.local` and other real `.env*` files are ignored; `.env.example` is the only exception and contains placeholders.
- Rotate a token immediately in Spotify/GitHub and Vercel if it is ever committed, logged, or shared.
