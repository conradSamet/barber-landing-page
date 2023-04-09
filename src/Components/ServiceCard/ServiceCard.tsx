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
        <Image
          src={imgSrc}
          alt={alt}
          fill
          sizes='(max-width: 768px) 90vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 25vw, 12vw'
        />
      </div>
      <h2> {descTitle} </h2>
      <p> {desc} </p>
    </div>
  )
}
