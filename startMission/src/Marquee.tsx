import React from 'react'
import './Marquee.css'

type MarqueeProps = {
  words: string[]
  speed?: number // seconds for a full cycle
  direction?: 'left' | 'right'
  className?: string
}

export function Marquee({ words, speed = 20, direction = 'left', className = '' }: MarqueeProps) {
  const items = words.map((w, i) => (
    <span className="marquee__item" key={`${w}-${i}`}>{w}</span>
  ))

  const isReverse = direction === 'right'

  return (
    <div className={`marquee ${isReverse ? 'marquee--reverse' : ''} ${className}`} style={{ ['--duration' as any]: `${speed}s` }}>
      <div className="marquee__inner">
        <div className="marquee__track" aria-hidden="false">
          {items}
        </div>
        <div className="marquee__track" aria-hidden="true">
          {items}
        </div>
      </div>
    </div>
  )
}
