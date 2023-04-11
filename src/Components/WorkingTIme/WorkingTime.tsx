import styles from '@/Styles/WorkingTime/workingTime.module.scss'
import { Button } from '../Button/Button'
import { BigPill } from '../BigPill/BigPill'

export interface IWorkingTimeProps {
  day: any
}

const weekDays = [
  { id: 1, day: 'Monday', time: '6am - 8am' },
  { id: 2, day: 'Tuesday', time: '6am - 8am' },
  { id: 3, day: 'Wednesday', time: '6am - 8am' },
  { id: 4, day: 'Thursday', time: '6am - 8am' },
  { id: 5, day: 'Friday', time: '6am - 8am' },
  { id: 6, day: 'Saturday', time: '6am - 8am' },
  { id: 0, day: 'Sunday', time: 'closed' },
]

export function WorkingTime({ day }: IWorkingTimeProps) {
  return (
    <section className={styles.section}>
      <div className='section_content'>
        <div>
          <h2>Our Working Time</h2>
          <h3>
            <span className='primary-clr'>CALL US:</span> +4932 5184327
          </h3>
        </div>
        <div className={styles.pill_container}>
          {weekDays.map((weekDay) => {
            if (weekDay.id === day) {
              return (
                <BigPill
                  key={weekDay.id}
                  heading={weekDay.day}
                  smallText={weekDay.time}
                  today
                />
              )
            }
            return (
              <BigPill
                key={weekDay.id}
                heading={weekDay.day}
                smallText={weekDay.time}
              />
            )
          })}
        </div>
        <div>
          <h3>
            <span className='primary-clr'>GET 20% OFF</span> ON YOUR FIRST
            ONLINE APPOINTMENT
          </h3>
          <Button
            value='Make an Appointment'
            primary
            customStyles={{ marginTop: '2rem' }}
          />
        </div>
      </div>
    </section>
  )
}
