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

import Verstappen from '../../../public/images/drivers/Verstappen.svg'
import Perez from '../../../public/images/drivers/Perez.svg'

import Netherlands from '../../../public/images/flags/Netherlands.svg'
import Mexico from '../../../public/images/flags/Mexico.svg'

const CircularComponent: React.FC = () => {
  return (
    <div className="my-[7.6vmax] w-[78.9vmin] h-[75vmin] mx-auto relative flex justify-center items-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ y: '-50%', x: '-50%' }}
        className="logo-container top-[0] left-[34.55%] "
      >
        <div className="fade-circle"></div>
        <Image
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
      >
        <div className="fade-circle"></div>
        <Image
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
      >
        <div className="fade-circle"></div>
        <Image
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
      >
        <div className="fade-circle"></div>
        <Image
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
      >
        <div className="fade-circle"></div>
        <Image
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
      >
        <div className="fade-circle"></div>
        <Image
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
      >
        <div className="fade-circle"></div>
        <Image className="w-[50%]" src={HaasLogo} alt={'Haas Logo'}></Image>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ y: '50%', x: '50%' }}
        className="logo-container bottom-[19%] right-[10%]"
      >
        <div className="fade-circle"></div>
        <Image
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
      >
        <div className="fade-circle"></div>
        <Image
          className="w-[60%]"
          src={AstonMartinLogo}
          alt={'Aston Martin Logo'}
        ></Image>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ y: '50%', x: '50%' }}
        className="logo-container bottom-[0%] right-[34.55%]"
      >
        <div className="fade-circle"></div>
        <Image
          className="h-[50%]"
          src={AlfaRomeoLogo}
          alt={'Alfa Romeo Logo'}
        ></Image>
      </motion.div>
      <div className="absolute h-[54.6%] w-[52%] flex justify-center items-center flex-col gap-[2.4vmax]">
        <div className="redBull-title text-white font-f1bold text-[5vmin]">
          Red Bull
        </div>
        <div className=" flex flex-col justify-center items-start gap-[1vmax]">
          <div className="flex justify-start items-center gap-[1.5vmax]">
            <div>
              <Image
                className="h-[6vmax] w-[6vmax] rounded-[100%]"
                src={Verstappen}
                alt="Max Verstappen"
              ></Image>
            </div>
            <div className="flex justify-center items-start flex-col gap-[.3vmax]">
              <div className="flex justify-center items-center gap-[.7vmax]">
                <div className="h-[2.4vmax] w-[.5vmax] bg-redBull"></div>
                <div className="font-f1regular text-white text-[2.5vmin] leading-tight">
                  Max
                  <br />
                  Verstappen
                </div>
              </div>
              <div className="flex justify-center items-center gap-[.5vmax]">
                <div>
                  <Image
                    className=" w-[4.2vmin] rounded-[.6vmin]"
                    src={Netherlands}
                    alt="Netherlands flag"
                  ></Image>
                </div>
                <div className="text-white font-f1bold text-[2.3vmin]">NED</div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-[1.5vmax]">
            <div>
              <Image
                className="h-[6vmax] w-[6vmax] rounded-[100%]"
                src={Perez}
                alt="Sergio Pérez"
              ></Image>
            </div>
            <div className="flex justify-center items-start flex-col gap-[.3vmax]">
              <div className="flex justify-center items-center gap-[.7vmax]">
                <div className="h-[2.4vmax] w-[.5vmax] bg-redBull"></div>
                <div className="font-f1regular text-white text-[2.5vmin] leading-tight">
                  Sergio
                  <br />
                  Pérez
                </div>
              </div>
              <div className="flex justify-center items-center gap-[.5vmax]">
                <div>
                  <Image
                    className="w-[4.2vmin] rounded-[.6vmin]"
                    src={Mexico}
                    alt="Mexico flag"
                  ></Image>
                </div>
                <div className="text-white font-f1bold text-[2.3vmin]">MEX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CircularComponent
