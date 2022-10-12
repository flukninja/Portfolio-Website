import React from 'react'
import pic from '../assets/profile_pic.jpg'
import styles from './Profile.module.css'

const Profile = (props) => {
  return (
    <div className='Profile'>
      <div className={styles['desktop1']}>
        <img
          src={pic}
          alt="profilepic124"
          className={styles['profilepic1']}
        />
        <span className={styles['text']}>
          <span>Tanakorn Muwinitkul</span>
        </span>
        {/* <span className={styles['text2']}>
          <span>Software Developer</span>
        </span> */}
        <span className={styles['text4']}>
          <span>
            I am a graduate IT student with hardworking and passion to create an
            innovative software that bring a massive changing to the society.
            With my skills in frontend web development and database designs, I
            am looking for a growth opportunities to begin a new career as a
            junior software developer. I have the potential to learn new things
            and apply what I have learned to the real work in a short period of
            time.
          </span>
        </span>
      </div>
    </div>
  )
}

export default Profile;
