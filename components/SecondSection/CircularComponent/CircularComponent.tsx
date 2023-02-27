'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

import RedBullLogo from '../../../public/logos/constructors/RedBull.svg'
import FerrariLogo from '../../../public/logos/constructors/Ferrari.svg'
import MercedesLogo from '../../../public/logos/constructors/Mercedes.svg'
import AlpineLogo from '../../../public/logos/constructors/Alpine.svg'
import McLarenLogo from '../../../public/logos/constructors/McLaren.svg'
import AlfaRomeoLogo from '../../../public/logos/constructors/AlfaRomeo.svg'
import AstonMartinLogo from '../../../public/logos/constructors/AstonMartin.svg'
import HaasLogo from '../../../public/logos/constructors/Haas.svg'
import AlphaTauriLogo from '../../../public/logos/constructors/AlphaTauri.svg'
import WilliamsLogo from '../../../public/logos/constructors/Williams.svg'
import CardComponent from '../CardComponent/CardComponent'
import TeamsData from '../../../data/TeamsData'
import { useState } from 'react'

// import TeamsData from '../../../data/TeamsData'
// import CardComponent from '../CardComponent/CardComponent'

const CircularComponent: React.FC = () => {
  const [teamIndex, setTeamIndex] = useState(0)

  return (
    <div className="my-[7.6vmax] w-[78.9vmin] h-[75vmin] mx-auto relative flex justify-center items-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ y: '-50%', x: '-50%' }}
        className="logo-container top-[0] left-[34.55%]"
        onClick={() => setTeamIndex(0)}
      >
        <div className="fade-circle"></div>
        <Image
          priority
          className="w-[55%]"
          src={RedBullLogo}
          alt={'Red Bull Logo'}
        ></Image>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ y: '-50%', x: '50%' }}
        className="logo-container top-[0] right-[34.55%]"
        onClick={() => setTeamIndex(1)}
      >
        <div className="fade-circle"></div>
        <Image
          priority
          className="h-[40%]"
          src={FerrariLogo}
          alt={'Ferrari Logo'}
        ></Image>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ y: '-50%', x: '-50%' }}
        className="logo-container top-[19%] left-[10%] translate-x-[-50%] translate-y-[-50%]"
        onClick={() => setTeamIndex(9)}
      >
        <div className="fade-circle"></div>
        <Image
          priority
          className="h-[35%]"
          src={WilliamsLogo}
          alt={'Williams Logo'}
        ></Image>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ y: '-50%', x: '50%' }}
        className="logo-container top-[19%] right-[10%]"
        onClick={() => setTeamIndex(2)}
      >
        <div className="fade-circle"></div>
        <Image
          priority
          className="w-[42.5%]"
          src={MercedesLogo}
          alt={'Mercedes Logo'}
        ></Image>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ y: '-50%', x: '-50%' }}
        className="logo-container top-[50%] left-[0%]"
        onClick={() => setTeamIndex(8)}
      >
        <div className="fade-circle"></div>
        <Image
          priority
          className="w-[52.5%]"
          src={AlphaTauriLogo}
          alt={'AlphaTauri Logo'}
        ></Image>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ y: '-50%', x: '50%' }}
        className="logo-container top-[50%] right-[0%]"
        onClick={() => setTeamIndex(3)}
      >
        <div className="fade-circle"></div>
        <Image
          priority
          className="w-[52.5%]"
          src={AlpineLogo}
          alt={'Alpine Logo'}
        ></Image>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ y: '50%', x: '-50%' }}
        className="logo-container bottom-[19%] left-[10%]"
        onClick={() => setTeamIndex(7)}
      >
        <div className="fade-circle"></div>
        <Image
          priority
          className="w-[50%]"
          src={HaasLogo}
          alt={'Haas Logo'}
        ></Image>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ y: '50%', x: '50%' }}
        className="logo-container bottom-[19%] right-[10%]"
        onClick={() => setTeamIndex(4)}
      >
        <div className="fade-circle"></div>
        <Image
          priority
          className="w-[45%]"
          src={McLarenLogo}
          alt={'McLaren Logo'}
        ></Image>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ y: '50%', x: '-50%' }}
        className="logo-container bottom-[0%] left-[34.55%]"
        onClick={() => setTeamIndex(6)}
      >
        <div className="fade-circle"></div>
        <Image
          priority
          className="w-[60%] h-auto"
          src={AstonMartinLogo}
          alt={'Aston Martin Logo'}
        ></Image>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ y: '50%', x: '50%' }}
        className="logo-container bottom-[0%] right-[34.55%]"
        onClick={() => setTeamIndex(5)}
      >
        <div className="fade-circle"></div>
        <Image
          priority
          className="h-[50%]"
          src={AlfaRomeoLogo}
          alt={'Alfa Romeo Logo'}
        ></Image>
      </motion.div>
      <CardComponent teamObject={TeamsData[teamIndex]}></CardComponent>
    </div>
  )
}

export default CircularComponent
