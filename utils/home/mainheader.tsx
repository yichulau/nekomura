import React from 'react'
import styles from './mainheader.module.scss'
import { useTypedText } from '../typingtext'

export function VMainHeader() {
  return (
    <div className={styles.aboutInfo}>
      <h1 className={styles.header}>
        {useTypedText("Welcome Everyone!", 50)}
        <br/>
        {useTypedText("We are Nekomura", 50, 200)}
      </h1>
      <h2 className={styles.desctxt}>
        {useTypedText("One afternoon, I was helping a Chinese film with artistic creation. I was asked to revise the manuscript again and again. The inner sense of tearing and helplessness flooded into my heart again. It was not the first time I planned to escape from this damned living situation and find a comfortable job to end this spiritual life at the mercy of others.", 30, 350)}
      </h2>
    </div>
  )
}