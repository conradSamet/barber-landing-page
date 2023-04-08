import * as React from "react"
import styles from "@/Styles/BigPill/bigPill.module.scss"

export interface IBigPillProps {
  heading: string
  smallText: string
  today?: boolean
}

export function BigPill({ heading, smallText, today }: IBigPillProps) {
  return (
    <div className={`${styles.bigPill} ${today ? styles.today : ''}`}>
      <h3> {heading} </h3>
      <span> {smallText} </span>
    </div>
  )
}
