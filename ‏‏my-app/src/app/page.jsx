"use client"

import styles from './page.module.css'
import Image from 'next/image'
import heder from "../../public/header.png"
import sect from "../../public/sect.png"

import { useState } from 'react'


export default function Home() {
  const [track,setTrack]=useState();
  const isTrue = (track != undefined )

  return (
    
    <main className={styles.main}>
            <Image src={heder} width={370}/>
            <Image src={sect} width={370} className={styles.sects}/>
       <a href="/aram">اطلب الخدمة الان</a>   
    </main>
  )
  
}


