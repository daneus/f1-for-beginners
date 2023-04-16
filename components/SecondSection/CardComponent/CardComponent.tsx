import Image from 'next/image'
import { motion } from 'framer-motion'

import { TeamData } from '../../../interfaces/TeamData'

interface Props {
  teamObject: TeamData
}

const cardVariants = {
  initial: {
    clipPath: 'polygon(0 0, 0 -50%, 0 100%, 0% 110%)',
    transition: { duration: 0.4, ease: 'easeOut' }
  },
  animate: {
    clipPath: 'polygon(0 0, 100% -50%, 100% 100%, 0 110%)',
    transition: { duration: 0.4, ease: 'easeInOut', delay: 0.5 }
  },
  exit: {
    clipPath: 'polygon(100% 0, 100% -50%, 100% 100%, 100% 110%)',
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}

const CardComponent: React.FC<Props> = teamObject => {
  return (
    <motion.div
      key="card"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute h-[54.6%] w-[52%] flex justify-center items-center flex-col gap-[3vmax]"
    >
      <div
        className={`${teamObject.teamObject.shortName}-title text-white font-f1bold text-[5vmin]`}
      >
        {teamObject.teamObject.name}
      </div>
      <div className=" flex flex-col justify-center items-start gap-[2vmax]">
        <div className="flex justify-start items-center gap-[1.5vmax]">
          <div className="h-[6vmax] w-[6vmax] relative">
            <Image
              priority
              className="rounded-[100%]"
              src={`/images/drivers/${teamObject.teamObject.firstDriverLastName}.jpg`}
              alt={`${teamObject.teamObject.firstDriverName} ${teamObject.teamObject.firstDriverLastName}`}
              fill={true}
              quality={1}
            ></Image>
          </div>
          <div className="flex justify-center items-start flex-col gap-[.3vmax]">
            <div className="flex justify-center items-center gap-[.7vmax]">
              <div
                className={`h-[4.2vmin] w-[.7vmin] ${teamObject.teamObject.shortName}`}
              ></div>
              <div className="font-f1regular text-white text-[2.5vmin] leading-tight">
                {teamObject.teamObject.firstDriverName}
                <br />
                {teamObject.teamObject.firstDriverLastName}
              </div>
            </div>
            <div className="flex justify-center items-center gap-[.5vmax]">
              <div className="w-[4.2vmin] h-[2.8vmin] relative">
                <Image
                  priority
                  className="rounded-[.6vmin]"
                  src={`/images/flags/${teamObject.teamObject.firstDriverCountry}.jpg`}
                  alt={`${teamObject.teamObject.firstDriverCountry} flag`}
                  fill={true}
                  quality={1}
                ></Image>
              </div>
              <div className="text-white font-f1bold text-[2.3vmin]">
                {teamObject.teamObject.firstDriverCountryShort}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center gap-[1.5vmax]">
          <div className="h-[6vmax] w-[6vmax] relative">
            <Image
              priority
              className="rounded-[100%]"
              src={`/images/drivers/${teamObject.teamObject.secondDriverLastName}.jpg`}
              alt={`${teamObject.teamObject.secondDriverName} ${teamObject.teamObject.secondDriverLastName}`}
              fill={true}
              quality={1}
            ></Image>
          </div>
          <div className="flex justify-center items-start flex-col gap-[.3vmax]">
            <div className="flex justify-center items-center gap-[.7vmax]">
              <div
                className={`h-[4.2vmin] w-[.7vmin] ${teamObject.teamObject.shortName}`}
              ></div>
              <div className="font-f1regular text-white text-[2.5vmin] leading-tight">
                {teamObject.teamObject.secondDriverName}
                <br />
                {teamObject.teamObject.secondDriverLastName}
              </div>
            </div>
            <div className="flex justify-center items-center gap-[.5vmax]">
              <div className="w-[4.2vmin] h-[2.8vmin] relative">
                <Image
                  priority
                  className="rounded-[.6vmin]"
                  src={`/images/flags/${teamObject.teamObject.secondDriverCountry}.jpg`}
                  alt={`${teamObject.teamObject.secondDriverCountry} flag`}
                  fill={true}
                  quality={1}
                ></Image>
              </div>
              <div className="text-white font-f1bold text-[2.3vmin]">
                {teamObject.teamObject.secondDriverCountryShort}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CardComponent
