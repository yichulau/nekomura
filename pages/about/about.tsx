import Image from 'next/image'
import Head from 'next/head'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import {
  VMenuBar,
  VPhotoGrid,
  VFooter
} from '../../utils'
import {
  belayTheCppLogo,
  bonoboPressLogo,
  comicCommission1,
  comicCommission2,
  cssTricksLogo,
  dribbbleLogo,
  freeCodeCampLogo,
  hashnodeLogo,
  logoCommission,
  posterCommission,
  schemeCommission,
  sitePointLogo,
} from '../../assets'
import styles from './about.module.scss'

export default function VAbout() {
  return (
    <div className={styles.aboutContainer}>
      <Head>
        <title>About Nekomura</title>
        <meta name="description" content="Nekomura sample website" />
        <meta name="author" content="Nekomura"/>
        <meta name="keywords" content="Nekomura"/>
        <meta property="og:image" content="#" key="ogimage"/>
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon"/>
      </Head>
      <VMenuBar activeTab="About"/>
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade>
            <h1>
            March 13, 2022, Cat Village Memories
            </h1>
            <h2>
            One afternoon, I was helping a Chinese film with artistic creation. I was asked to revise the manuscript again and again. The inner sense of tearing and helplessness flooded into my heart again. It was not the first time I planned to escape from this damned living situation and find a comfortable job to end this spiritual life at the mercy of others.

I learned about NFTs through an up-and-coming director, Adolph. Since then I have fallen into another tangled cycle.

I read a lot on the open sea, tried a lot of themes, but I was not satisfied in the end. Because simple PFP works cannot fully demonstrate my artistic style. I hope to create works that, at a glance, can make people calm and relax, as if going through a wormhole to another bad environment.

Finally, when I drove to my friend's house about 38 kilometers away after a heavy snowfall, I accidentally glanced at the rearview mirror. I found that such a beautiful picture was presented in a rectangular frame. I think that I can create landscapes, and I can create themes other than PFP that people can use in social scenarios! Yes, I'm going to create a 3:1 banner for people! Immediately put the idea to Adolph!

Adolph found his friends in the crypto circle to discuss the feasibility of this matter. When his friends in the encryption circle got to know my idea, everyone was so excited that they stayed up all night, and I thought it was time to show it. Will people like me!?
            </h2>
          </Fade>
        </div>
        {/* <Fade>
          <div className={styles.hobbies}>
            <div className={styles.newsletters}>
              <h2>
                Newsletters I subscribe to:
              </h2>
              <a href="https://css-tricks.com/">
                <Image alt="CSS-Tricks logo" src={cssTricksLogo}/>
              </a>
              <a href="https://belaycpp.com/">
                <Image alt="Belay the CPP logo" src={belayTheCppLogo}/>
              </a>
              <a href="https://dribbble.com/">
                <Image alt="Dribbble logo" src={dribbbleLogo}/>
              </a>
              <a href="https://hashnode.com/">
                <Image alt='Hashnode logo' src={hashnodeLogo}/>
              </a>
              <a href="https://bonobopress.com/">
                <Image alt="Bonobopress logo" src={bonoboPressLogo}/>
              </a>
              <a href="https://www.sitepoint.com/">
                <Image alt="Site Point logo" src={sitePointLogo}/>
              </a>
              <a href="https://www.freecodecamp.org/">
                <Image alt="FreeCodeCamp logo" src={freeCodeCampLogo}/>
              </a>
            </div>
            <div className={styles.commissions}>
              <h1>
                Graphic commisions
              </h1>
              <h2>
                Besides computer programming I love to create graphics.
                Drawing has been my passion since I can remember. When I was younger,
                I used to have hundreds of notebooks, all of them filled with my sketches.
                Later on I moved more into digital art work and now I treat it as my
                hobby, taking  small graphical project from time to time.
              </h2>
              <div className={styles.scrollGallery}>
                <div className={styles.hint}>
                  Sroll right to see more
                </div>
                <Image
                  alt="Camera logo commission"
                  layout="fixed"
                  src={logoCommission}/>
                <Image
                  alt="Breathing scheme commission"
                  layout="fixed"
                  src={schemeCommission}/>
                <Image
                  alt="Woman poster commision"
                  layout="fixed"
                  src={posterCommission}/>
                <Image
                  alt="Comic commission 1"
                  layout="fixed"
                  src={comicCommission1}/>
                <Image
                  alt="Comic commission 2"
                  layout="fixed"
                  src={comicCommission2}/>
              </div>
            </div>
          </div>
        </Fade> */}
        <Fade>
          <div className={styles.photoGallery}>
            <h1>
              Our Sneakpeak
            </h1>
            <h2>
              I do believe that nekomura is the best project out there. If u dont belive it..... <br/>
              NGMI
              <br/>
              <br/>
              Hover on photo in order to get more details.
            </h2>
            <VPhotoGrid/>
          </div>
        </Fade>
      </div>
      <VFooter/>
    </div>
  )
}