import styles from '@/Styles/Footer/footer.module.scss'
import {
  EnvelopeIcon,
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  PhoneIcon,
  TwitterIcon,
} from '@/icons/index'

export interface IFooterProps {}

type socialLink = {
  id: number
  link: string
  icon: JSX.Element
}
const socialLinks: socialLink[] = [
  { id: 0, link: 'https://www.google.de', icon: <FacebookIcon /> },
  { id: 1, link: 'https://www.google.de', icon: <TwitterIcon /> },
  { id: 2, link: 'https://www.google.de', icon: <InstagramIcon /> },
]

type contactLink = {
  id: number
  icon: JSX.Element
  text: string
}
const contactLinks: contactLink[] = [
  {
    id: 0,
    icon: <LocationIcon />,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, inventore.',
  },
  { id: 1, icon: <PhoneIcon />, text: '+4932 5184327' },
  { id: 2, icon: <EnvelopeIcon />, text: 'mail@mail.com' },
]

export function Footer(props: IFooterProps) {
  return (
    <footer className={styles.footer}>
      <div>
        <h2> Barber Shop </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, qui.
        </p>
        <div className={styles.social_icons}>
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              rel='noreferrer'
              target='_blank'
              className={styles.icon_wrapper}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.contact_wrapper}>
        <h3> Get in Touch </h3>
        {contactLinks.map((link) => (
          <div key={link.id}>
            <div className={styles.icon_wrapper}> {link.icon} </div>
            <span> {link.text} </span>
          </div>
        ))}
      </div>
    </footer>
  )
}
