import styles from '@/Styles/About/about.module.scss';
import { Button } from '../Button/Button'
import Image from 'next/image'
import img from '@/images/barber_shop.jpg'


export interface IAboutProps {
}

export function About (props: IAboutProps) {
  return (
    <section className={styles.section}>
      <div className='section_content'>
        <div className={styles.img_wrapper}>
          <Image
            src={img}
            alt='Barber Shop with 2 People getting an Haircut'
            fill
          />
        </div>
        <div className={styles.content}>
          <h2>Who We Are</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
            voluptatum non deleniti reprehenderit minima doloremque voluptates
            unde voluptas veniam illum?
          </p>
          <Button value='More About Us' primary></Button>
        </div>
      </div>
    </section>
  )
}
