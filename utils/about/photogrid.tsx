import Image from 'next/image'
import React from 'react'
import { useTypedText } from '..'
import {
  barcelonaSagradaPhoto,
  bowlingPhoto,
  climbingTopPhoto,
  franceLaSalttePhoto,
  giewontPhoto,
  icelandWaterfallPhoto,
  image1,
  image2,
  image3,
  londonArsenalPhoto,
  londonCanaryPhoto,
  londonChelsea,
  londonTowerBridgePhoto,
  londonVictoryPhoto,
  mainpic,
  manchesterUnitedPhoto,
  mazuryDawnPhoto,
  mclarenPhoto,
  notreDamePhoto,
  parisEiffelPhoto,
  playingIEMPhoto,
  rysiankaPhoto,
  skiSwissPhoto,
  sushiPhoto,
  swissMurrenPhoto,
  walesPhoto
} from '../../assets'
import styles from './photogrid.module.scss'

export function VPhotoGrid() {
  return (
    <div className={styles.photoGrid}>

      <div className={styles.chelsea}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Pagoda, Nekomura', 50)}
          <br/>
          {useTypedText('Rating: 10/10', 50)}
        </h2>
        <Image alt="Photo of Stamford Bridge" src={image1} layout="fill"/>
      </div>
      <div className={styles.arsenal}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Sydney, Nekomura', 50)}
          <br/>
          {useTypedText('Rating: 10/10', 50)}
        </h2>
        <Image alt="Photo of Emirates Stadium" src={image2} layout="fill"/>
      </div>
      <div className={styles.skyscrapper}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Wildwest, Nekomura', 50)}
          <br/>
          {useTypedText('Rating: 10/10', 50)}
        </h2>
        <Image alt="Photo of Canary Wharf" src={image3} layout="fill"/>
      </div>
      
      <div className={styles.murren}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Tibet, Nekomura', 50)}
          <br/>
          {useTypedText('Rating: 10/10', 50)}
        </h2>
        <Image alt="Photo of Murren" src={mainpic} layout="fill"/>
      </div>
    </div>
  )
}

//TO-DO refactoring of VPhotoGrid