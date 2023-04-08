import { useState } from 'react'
import styles from '@/Styles/NavBar/navBar.module.scss'

export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  const [isClicked, setIsClicked] = useState(false)
  const handleIsClicked = () => {
    setIsClicked((prevState) => !prevState)
  }

  const activeName = 'Home'

  const links: { id: number; link: string }[] = [
    { id: 1, link: 'Home' },
    { id: 2, link: 'Service' },
    { id: 3, link: 'About' },
    { id: 4, link: 'Contact Us' },
  ]

  const burgerMenuClasses: string[] = [
    isClicked ? 'active' : '',
    styles.burgermenu,
  ]
  const navLinksContainer: string[] = [
    isClicked ? styles.animate_container : '',
    styles.navLinks_container,
  ]
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.heading_container}>
          <h1> Barber. </h1>
        </div>
        <div className={navLinksContainer.join(' ')}>
          <ul className={isClicked ? styles.animate_ul : ''}>
            {links.map((entry) => {
              return (
                <li key={entry.id}>
                  <button
                    className={`
                    ${styles.button} 
                    ${activeName === entry.link ? 'active' : ''}`}
                  >
                    {entry.link}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={burgerMenuClasses.join(' ')} onClick={handleIsClicked}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </div>
    </nav>
  )
}
