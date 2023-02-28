'use client'

import Image from 'next/image'
import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

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

import TeamsData from '../../../data/TeamsData'
import CardComponent from '../CardComponent/CardComponent'
import { SelectedStatus } from '../../../interfaces/TeamData'

const containerVariants = {
  selected: (selectedBG: string) => ({
    backgroundColor: selectedBG,
    transition: { delay: 0.9, duration: 0.4 }
  }),
  unselected: {
    backgroundColor: '#1f1f1f',
    transition: { delay: 0.9, duration: 0.4 }
  }
}

const CircularComponent: React.FC = () => {
  const [teamIndex, setTeamIndex] = useState<number>(0)

  const teamsStatus: SelectedStatus = {
    isRBActive: true,
    isFActive: false,
    isMActive: false,
    isAActive: false,
    isMLActive: false,
    isARActive: false,
    isAMActive: false,
    isHActive: false,
    isATActive: false,
    isWActive: false
  }

  const [selectedStatus, setSelectedStatus] = useState(teamsStatus)

  return (
    <div className="my-[7.6vmax] w-[78.9vmin] h-[75vmin] mx-auto relative flex justify-center items-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ y: '-50%', x: '-50%' }}
        className="logo-container top-[0] left-[34.55%]"
        onClick={() => {
          if (teamIndex === 0) return
          setTeamIndex(null)
          setTimeout(() => {
            setTeamIndex(0)
          }, 400)
          setSelectedStatus(teamsStatus)
        }}
      >
        <motion.div
          className="fade-circle"
          custom={'#09377A'}
          variants={containerVariants}
          animate={selectedStatus.isRBActive ? 'selected' : 'unselected'}
          initial={false}
        ></motion.div>
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
        onClick={() => {
          if (teamIndex === 1) return
          setTeamIndex(null)
          setTimeout(() => {
            setTeamIndex(1)
          }, 400)
          setSelectedStatus({
            ...teamsStatus,
            isRBActive: false,
            isFActive: true
          })
        }}
      >
        <motion.div
          custom={'#520014'}
          variants={containerVariants}
          animate={selectedStatus.isFActive ? 'selected' : 'unselected'}
          className="fade-circle"
        ></motion.div>
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
        onClick={() => {
          if (teamIndex === 9) return
          setTeamIndex(null)
          setTimeout(() => {
            setTeamIndex(9)
          }, 400)
          setSelectedStatus({
            ...teamsStatus,
            isRBActive: false,
            isWActive: true
          })
        }}
      >
        <motion.div
          custom={'#124652'}
          variants={containerVariants}
          animate={selectedStatus.isWActive ? 'selected' : 'unselected'}
          className="fade-circle"
        ></motion.div>
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
        onClick={() => {
          if (teamIndex === 2) return
          setTeamIndex(null)
          setTimeout(() => {
            setTeamIndex(2)
          }, 400)
          setSelectedStatus({
            ...teamsStatus,
            isRBActive: false,
            isMActive: true
          })
        }}
      >
        <motion.div
          custom={'#0A5244'}
          variants={containerVariants}
          animate={selectedStatus.isMActive ? 'selected' : 'unselected'}
          className="fade-circle"
        ></motion.div>
        <Image
          priority
          className="w-[45%]"
          src={MercedesLogo}
          alt={'Mercedes Logo'}
        ></Image>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ y: '-50%', x: '-50%' }}
        className="logo-container top-[50%] left-[0%]"
        onClick={() => {
          if (teamIndex === 8) return
          setTeamIndex(null)
          setTimeout(() => {
            setTeamIndex(8)
          }, 400)
          setSelectedStatus({
            ...teamsStatus,
            isRBActive: false,
            isATActive: true
          })
        }}
      >
        <motion.div
          custom={'#3A515F'}
          variants={containerVariants}
          animate={selectedStatus.isATActive ? 'selected' : 'unselected'}
          className="fade-circle"
        ></motion.div>
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
        onClick={() => {
          if (teamIndex === 3) return
          setTeamIndex(null)
          setTimeout(() => {
            setTeamIndex(3)
          }, 400)
          setSelectedStatus({
            ...teamsStatus,
            isRBActive: false,
            isAActive: true
          })
        }}
      >
        <motion.div
          custom={'#165B81'}
          variants={containerVariants}
          animate={selectedStatus.isAActive ? 'selected' : 'unselected'}
          className="fade-circle"
        ></motion.div>
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
        onClick={() => {
          if (teamIndex === 7) return
          setTeamIndex(null)
          setTimeout(() => {
            setTeamIndex(7)
          }, 400)
          setSelectedStatus({
            ...teamsStatus,
            isRBActive: false,
            isHActive: true
          })
        }}
      >
        <motion.div
          custom={'#565859'}
          variants={containerVariants}
          animate={selectedStatus.isHActive ? 'selected' : 'unselected'}
          className="fade-circle"
        ></motion.div>
        <Image
          priority
          className="w-[57.5%]"
          src={HaasLogo}
          alt={'Haas Logo'}
        ></Image>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ y: '50%', x: '50%' }}
        className="logo-container bottom-[19%] right-[10%]"
        onClick={() => {
          if (teamIndex === 4) return
          setTeamIndex(null)
          setTimeout(() => {
            setTeamIndex(4)
          }, 400)
          setSelectedStatus({
            ...teamsStatus,
            isRBActive: false,
            isMLActive: true
          })
        }}
      >
        <motion.div
          custom={'#462000'}
          variants={containerVariants}
          animate={selectedStatus.isMLActive ? 'selected' : 'unselected'}
          className="fade-circle"
        ></motion.div>
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
        onClick={() => {
          if (teamIndex === 6) return
          setTeamIndex(null)
          setTimeout(() => {
            setTeamIndex(6)
          }, 400)
          setSelectedStatus({
            ...teamsStatus,
            isRBActive: false,
            isAMActive: true
          })
        }}
      >
        <motion.div
          custom={'#003F2E'}
          variants={containerVariants}
          animate={selectedStatus.isAMActive ? 'selected' : 'unselected'}
          className="fade-circle"
        ></motion.div>
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
        onClick={() => {
          if (teamIndex === 5) return
          setTeamIndex(null)
          setTimeout(() => {
            setTeamIndex(5)
          }, 400)
          setSelectedStatus({
            ...teamsStatus,
            isRBActive: false,
            isARActive: true
          })
        }}
      >
        <motion.div
          custom={'#5A1220'}
          variants={containerVariants}
          animate={selectedStatus.isARActive ? 'selected' : 'unselected'}
          className="fade-circle"
        ></motion.div>
        <Image
          priority
          className="h-[62.5%]"
          src={AlfaRomeoLogo}
          alt={'Alfa Romeo Logo'}
        ></Image>
      </motion.div>
      <AnimatePresence mode="wait" initial={false}>
        {(teamIndex || teamIndex === 0) && (
          <CardComponent teamObject={TeamsData[teamIndex]}></CardComponent>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CircularComponent
