import * as React from "react"
import styles from "@/Styles/Services/services.module.scss"
import img from "@/images/perfect_cut.jpg"
import Image, { StaticImageData } from "next/image"
import { Button } from "../Button/Button"
import { ServiceCard } from "../ServiceCard/ServiceCard"

export interface IServicesProps {}

type TServices = {
  id: number
  src: StaticImageData
  alt: string
  title: string
  desc: string
}

export function Services(props: IServicesProps) {
  const services: TServices[] = [
    {
      id: 1,
      src: img,
      alt: "Image where you see someone getting an haircut",
      title: "Haircut",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, facere?",
    },
    {
      id: 2,
      src: img,
      alt: "Image where you see someone getting an haircut",
      title: "Haircut",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, facere?",
    },
    {
      id: 3,
      src: img,
      alt: "Image where you see someone getting an haircut",
      title: "Haircut",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, facere?",
    },
    {
      id: 4,
      src: img,
      alt: "Image where you see someone getting an haircut",
      title: "Haircut",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, facere?",
    },
  ]

  return (
    <section className={styles.section}>
      <div className='section_content'>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolor
            incidunt unde provident? Rem, voluptate alias magni ipsam expedita
            sunt. Ea consectetur dolorum tempore obcaecati.
          </p>
          <Button value='Explore More' usePrimaryColor/>
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
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}