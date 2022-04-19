import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Fade } from "react-awesome-reveal"
import {
  VFooter,
  VMainHeader,
  VMenuBar,
  VToolsTech
} from '../../utils'
import {
  chevronDown,
  mainpic,
  profilePicture
} from '../../assets'
import styles from './home.module.scss'

export default function VHome() {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Nekomura Site</title>
        <meta name="description" content="Nekomura sample website" />
        <meta name="author" content="Nekomura"/>
        <meta name="keywords" content="Nekomura"/>
        <meta property="og:image" content="#" key="ogimage"/>
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon"/>
      </Head>
      <VMenuBar activeTab="Home"/>
      <div className={styles.content}>
        <div className={styles.intro}>
          <div className={styles.introduction}>
            <VMainHeader/>
            <div className={styles.profilePicture}>
              <Image
                alt="nekomura picture"
                src={profilePicture}/>
            </div>
          </div>
          <Image className={styles.bannerImg}
              alt="main pic"
              src={mainpic}
              width="700px"
              height="350px"/>
          <div className={styles.swipeDownIcon}>
        
          </div>
        </div>
        <div className={styles.workHistory}>
          <div className={styles.linkBox}>
            <Fade>
              <h1 className={styles.linkBoxTitle}>About Us</h1>
              <h2 className={styles.linkBoxTextContent}>Here you can find out more about our roadmap and what we gonna achieve in the future</h2>
              <Link href={`/about/about`}>
                <a className={styles.linkBoxButton}>
                  Check Us Out
                </a>
              </Link>
            </Fade>
          </div>
          <div className={styles.workHistoryBackground}/>
        </div>
        {/* <div className={styles.personalProjects}>
            <div className={styles.linkBox}>
              <Fade>
                <h1 className={styles.linkBoxTitle}>About me</h1>
                <h2 className={styles.linkBoxTextContent}>Here you can find out more about me, my hobbies and personal project I'm currently working on.</h2>
                <Link href={`/about/about`}>
                  <a className={styles.linkBoxButton}>
                    Get to know more about me
                  </a>
                </Link>
              </Fade>
            </div>
          <div className={styles.personalProjectsBackground}/>
        </div> */}
      </div>
      <VFooter/>
    </div>
  )
}
