import React from 'react'

/*
 * Inline SVG diagram of the faithfulness evaluation pipeline.
 * Laid out vertically on a narrow viewBox so text stays legible on phones.
 */
export default function FaithfulnessDiagram() {
  const box = {
    fill: 'rgba(255, 255, 255, 0.04)',
    stroke: 'rgba(255, 255, 255, 0.14)',
  }
  const accentBox = {
    fill: 'rgba(99, 102, 241, 0.10)',
    stroke: 'rgba(99, 102, 241, 0.45)',
  }
  const label = { fill: '#ffffff', fontSize: 14, fontWeight: 600 }
  const subLabel = { fill: '#a1a1aa', fontSize: 10.5 }
  const arrow = { stroke: '#71717a', strokeWidth: 1.5, fill: 'none' }

  return (
    <svg
      viewBox="0 0 360 610"
      role="img"
      aria-label="Diagram of the faithfulness evaluation pipeline: a source document and an LLM agent's output flow into claim extraction, a judge model checks each claim against the source, claims are marked grounded or not grounded, the results roll up into an overall faithfulness score, which goes to model risk review."
      className="w-full h-auto"
    >
      <defs>
        <marker
          id="fd-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#71717a" />
        </marker>
      </defs>

      {/* Source document */}
      <rect x="90" y="8" width="180" height="46" rx="10" {...box} />
      <text x="180" y="28" textAnchor="middle" {...label}>
        Source document
      </text>
      <text x="180" y="44" textAnchor="middle" {...subLabel}>
        interview transcript
      </text>

      {/* Source → agent output */}
      <line x1="180" y1="54" x2="180" y2="76" {...arrow} markerEnd="url(#fd-arrow)" />

      {/* LLM agent output */}
      <rect x="90" y="80" width="180" height="46" rx="10" {...box} />
      <text x="180" y="100" textAnchor="middle" {...label}>
        LLM agent output
      </text>
      <text x="180" y="116" textAnchor="middle" {...subLabel}>
        structured form
      </text>

      {/* Output → claims */}
      <line x1="180" y1="126" x2="180" y2="148" {...arrow} markerEnd="url(#fd-arrow)" />

      {/* Claims extracted */}
      <rect x="90" y="152" width="180" height="46" rx="10" {...box} />
      <text x="180" y="172" textAnchor="middle" {...label}>
        Claims extracted
      </text>
      <text x="180" y="188" textAnchor="middle" {...subLabel}>
        one claim at a time
      </text>

      {/* Claims → judge */}
      <line x1="180" y1="198" x2="180" y2="220" {...arrow} markerEnd="url(#fd-arrow)" />

      {/* Side path: source document → judge model */}
      <path
        d="M 90 31 H 40 V 254 H 82"
        {...arrow}
        strokeDasharray="4 4"
        markerEnd="url(#fd-arrow)"
      />
      <text
        x="32"
        y="145"
        textAnchor="middle"
        {...subLabel}
        transform="rotate(-90 32 145)"
      >
        checked against source
      </text>

      {/* Judge model */}
      <rect x="90" y="224" width="180" height="58" rx="10" {...accentBox} />
      <text x="180" y="248" textAnchor="middle" {...label}>
        Judge model
      </text>
      <text x="180" y="266" textAnchor="middle" {...subLabel}>
        verifies each claim against the source
      </text>

      {/* Judge → grounded / not grounded */}
      <path d="M 150 282 Q 95 300 92 322" {...arrow} markerEnd="url(#fd-arrow)" />
      <path d="M 210 282 Q 265 300 268 322" {...arrow} markerEnd="url(#fd-arrow)" />

      {/* Grounded */}
      <rect
        x="22"
        y="326"
        width="145"
        height="46"
        rx="10"
        fill="rgba(129, 140, 248, 0.12)"
        stroke="rgba(129, 140, 248, 0.5)"
      />
      <text x="94.5" y="346" textAnchor="middle" fontSize="14" fontWeight="600" fill="#a5b4fc">
        Grounded ✓
      </text>
      <text x="94.5" y="362" textAnchor="middle" {...subLabel}>
        supported by source
      </text>

      {/* Not grounded */}
      <rect
        x="193"
        y="326"
        width="145"
        height="46"
        rx="10"
        fill="rgba(236, 72, 153, 0.10)"
        stroke="rgba(244, 114, 182, 0.45)"
      />
      <text x="265.5" y="346" textAnchor="middle" fontSize="14" fontWeight="600" fill="#f9a8d4">
        Not grounded ✗
      </text>
      <text x="265.5" y="362" textAnchor="middle" {...subLabel}>
        unsupported claim
      </text>

      {/* Merge → faithfulness score */}
      <path d="M 92 372 Q 95 396 150 412" {...arrow} markerEnd="url(#fd-arrow)" />
      <path d="M 268 372 Q 265 396 210 412" {...arrow} markerEnd="url(#fd-arrow)" />

      {/* Faithfulness score */}
      <rect x="90" y="416" width="180" height="58" rx="10" {...accentBox} />
      <text x="180" y="440" textAnchor="middle" {...label}>
        Faithfulness score
      </text>
      <text x="180" y="458" textAnchor="middle" {...subLabel}>
        share of claims grounded, per question
      </text>

      {/* Score → risk review */}
      <line x1="180" y1="474" x2="180" y2="496" {...arrow} markerEnd="url(#fd-arrow)" />

      {/* Model risk review */}
      <rect x="90" y="500" width="180" height="46" rx="10" {...box} />
      <text x="180" y="520" textAnchor="middle" {...label}>
        Model risk review
      </text>
      <text x="180" y="536" textAnchor="middle" {...subLabel}>
        approval for wider release
      </text>

      {/* Legend */}
      <text x="180" y="578" textAnchor="middle" {...subLabel}>
        every claim the agent makes has to earn its way in
      </text>
    </svg>
  )
}
