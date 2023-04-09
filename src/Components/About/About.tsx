import styles from '@/Styles/About/about.module.scss'
import { Button } from '../Button/Button'
import Image from 'next/image'
import img from '@/images/barber_shop.jpg'

export interface IAboutProps {}

export function About(props: IAboutProps) {
  return (
    <section className={styles.section}>
      <div className='section_content'>
        <div className={styles.img_wrapper}>
          <Image
            src={img}
            alt='Barber Shop with 2 People getting an Haircut'
            fill
            sizes='(max-width: 1024px) 100vw, 25vw'
          />
        </div>
        <div className={styles.content}>
          <h2>Who We Are</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            non, provident aliquid asperiores cupiditate quibusdam quidem,
            dignissimos nisi, dolorem repellat esse distinctio vero. Pariatur
            libero commodi minima eos, praesentium voluptatum obcaecati quam.
            Pariatur iure libero est facere, quos aliquid nihil dolore modi
            neque maiores. Suscipit, corporis voluptates. Iure ullam, expedita
            excepturi quibusdam vitae aspernatur rem facilis enim asperiores
            obcaecati consectetur earum omnis accusantium autem nulla? Doloribus
            earum quae possimus vel corporis! Alias ipsam sunt autem atque
            impedit iusto magnam odio fugit nihil, earum quas perspiciatis quam!
            Commodi amet autem repellendus sed minima rem dicta! Eum inventore
            libero voluptas maiores facere.
          </p>
          <Button value='More About Us' primary></Button>
        </div>
      </div>
    </section>
  )
}
