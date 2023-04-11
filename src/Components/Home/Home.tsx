import * as React from 'react'
import styles from '@/Styles/Home/home.module.scss'
import Image from 'next/image'
import homeImg from '@/images/home_img.jpg'
import { Button } from '../Button/Button'

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  return (
    <section className={styles.home}>
      <div className={styles.overlaying}>
        <div className='section_content'>
          <h1 className={styles.heading}> We Make Amazing Haircuts </h1>
          <p className={styles.pgraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            officia delectus ipsam, tempora soluta eligendi et dolor ab sed
            modi.
          </p>
          <div className={styles.buttons_container}>
            <Button
              value='Make An Appointment'
              primary
              customStyles={{ marginTop: '25px' }}
            />
            <Button value='Explore More' customStyles={{ marginTop: '25px' }} />
          </div>
        </div>
      </div>
      <Image
        src={homeImg}
        className={styles.image}
        alt='background image'
        fill
        sizes='100vw'
        priority
      />
    </section>
  )
}
