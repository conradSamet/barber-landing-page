import * as React from 'react'
import styles from '@/Styles/ServiceCard/serviceCard.module.scss'
import Image from 'next/image'

export interface IServiceCardProps {
  imgSrc: any
  alt: string
  descTitle: string
  desc: string
  imgPos?: string
}

export function ServiceCard({
  imgSrc,
  alt,
  descTitle,
  desc,
  imgPos,
}: IServiceCardProps) {
  return (
    <div className={styles.card}>
      <div className={imgPos ?? ''}>
        <Image src={imgSrc} alt={alt} fill />
      </div>
      <h2> {descTitle} </h2>
      <p> {desc} </p>
    </div>
  )
}
