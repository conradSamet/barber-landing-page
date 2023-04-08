import * as React from 'react'
import styles from '@/Styles/Services/services.module.scss'
import Image, { StaticImageData } from 'next/image'
import { Button } from '../Button/Button'
import { ServiceCard } from '../ServiceCard/ServiceCard'
import img from '@/images/perfect_cut.jpg'
import male_get_haircut from '@/images/male_get_haircut.jpg'
import beard_trim from '@/images/beard_trim.jpg'
import hair_coloring from '@/images/hair_coloring.jpg'

export interface IServicesProps {}

type TServices = {
  id: number
  src: StaticImageData
  alt: string
  title: string
  desc: string
  pos: string
}

export function Services(props: IServicesProps) {
  const services: TServices[] = [
    {
      id: 1,
      src: male_get_haircut,
      alt: 'Image where you see someone getting an haircut',
      title: 'Haircut',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, facere?',
      pos: '',
    },
    {
      id: 2,
      src: beard_trim,
      alt: 'Image where you see someone getting his beard trimmed',
      title: 'Beard Trim',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, facere?',
      pos: '',
    },
    {
      id: 3,
      src: hair_coloring,
      alt: 'Image where you see someone getting his hair colored',
      title: 'Hair Coloring',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, facere?',
      pos: '',
    },
    {
      id: 4,
      src: img,
      alt: 'Image where you see a child getting an haircut',
      title: 'Children Cut',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, facere?',
      pos: 'right',
    },
  ]

  return (
    <section className={styles.section}>
      <div className='section_content'>
        <div className={styles.service_introduction}>
          <div className={styles.image_border}>
            <div className={styles.img_container}>
              <Image
                src={img}
                alt='Image where you see someone getting an haircut'
                fill
              />
            </div>
          </div>
          <div className={styles.text_container}>
            <h2> Get The Idea Which Haircut -</h2>
            <h3> Perfect For You </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              officiis adipisci asperiores porro, quaerat sit facilis obcaecati
              quam voluptate deserunt soluta unde cum at dolor labore rem beatae
              error libero corrupti tenetur assumenda? Ipsa veritatis fugit
              laboriosam porro nesciunt laborum voluptatem accusantium officiis
              sint, praesentium natus nobis dignissimos dolorum aliquam!
            </p>
            <Button value='Explore More' usePrimaryColor />
          </div>
        </div>

        <div className={styles.service}>
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
            earum?
          </p>
          <div className={styles.line}></div>
          <div className={styles.service_cards}>
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                imgSrc={service.src}
                alt={service.alt}
                descTitle={service.title}
                desc={service.desc}
                imgPos={service.pos}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
