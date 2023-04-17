import Soft from '../../public/images/tyres/Soft.png'
import Medium from '../../public/images/tyres/Medium.png'
import Hard from '../../public/images/tyres/Hard.png'
import Inter from '../../public/images/tyres/Inter.png'
import Wet from '../../public/images/tyres/Wet.png'
import Image from 'next/image'

const TyreComponent: React.FC = () => {
  return (
    <>
      <div className="w-screen mt-[2vmax] pt-[2vw] bg-black">
        <div className="px-[2vmax] w-screen text-[2.2vmax] font-f1regular text-white text-center">
          Before the race, the teams are assigned the types of tyres they can
          use. There are <span className="font-f1bold">5</span> different types
          of tyres.
        </div>
      </div>
      <div className="flex flex-col items-center gap-[6vmax] w-[70vw]mx-auto mt-[5vmax]">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="text-[2vmax] font-f1bold warning text-white mb-[2vmax]">
            SLICK TYRES
          </div>
          <div className="w-[37.5vw] gap-[2vmax] flex items-stretch flex-col sm:flex-row sm:justify-between sm:w-[60vw] sm:gap-[0]">
            <div className="flex justify-center items-center flex-col bg-[#151515] p-[1.5vmax] rounded-[.8vmax]">
              <div className="w-[12vmax] aspect-square relative animate-[spin_25s_infinite_linear]">
                <Image
                  quality={60}
                  src={Soft}
                  alt="Soft tyre"
                  fill={true}
                ></Image>
              </div>
              <div className="mt-[1vmax] text-[1.5vmax] font-f1bold text-[#FF0000]">
                SOFT
              </div>
              <div className="w-[12vmax] text-[1.2vmax] font-f1regular text-center text-[#868F97]">
                The best for slow and twisty circuits, has the highest grip but
                lowest durability.
              </div>
            </div>
            <div className="flex justify-start items-center flex-col bg-[#151515] p-[1.5vmax] rounded-[.8vmax]">
              <div className="w-[12vmax] aspect-square relative animate-[spin_25s_infinite_linear]">
                <Image
                  quality={60}
                  src={Medium}
                  alt="Medium tyre"
                  fill={true}
                ></Image>
              </div>
              <div className="mt-[1vmax] text-[1.5vmax] font-f1bold text-[#FECA25]">
                MEDIUM
              </div>
              <div className="w-[12vmax] text-[1.1vmax] font-f1regular text-center text-[#868F97]">
                Has a very good balance between performance and durability.
              </div>
            </div>
            <div className="flex justify-start items-center flex-col bg-[#151515] p-[1.5vmax] rounded-[.8vmax]">
              <div className="w-[12vmax] aspect-square relative animate-[spin_25s_infinite_linear]">
                <Image
                  quality={60}
                  src={Hard}
                  alt="Hard tyre"
                  fill={true}
                ></Image>
              </div>
              <div className="mt-[1vmax] text-[1.5vmax] font-f1bold text-white">
                HARD
              </div>
              <div className="w-[12vmax] text-[1.1vmax] font-f1regular text-center text-[#868F97]">
                Provides the lowest grip but highest durability, the best for
                abrasive circuits.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="text-[1.8vmax] font-f1bold warning text-white mb-[2vmax]">
            GROOVED TYRES
          </div>
          <div className="w-[37.5vw] gap-[2vmax] flex items-stretch flex-col sm:flex-row sm:justify-between sm:w-[37.5vw] sm:gap-[0]">
            <div className="flex justify-center items-center flex-col bg-[#151515] p-[1.5vmax] rounded-[.8vmax]">
              <div className="w-[12vmax] aspect-square relative animate-[spin_25s_infinite_linear]">
                <Image
                  quality={60}
                  src={Inter}
                  alt="Intermediate tyre"
                  fill={true}
                ></Image>
              </div>
              <div className="mt-[1vmax] text-[1.5vmax] font-f1bold text-[#23A749]">
                INTER
              </div>
              <div className="w-[12vmax] text-[1.2vmax] font-f1regular text-center text-[#868F97]">
                Can disperse up to 25 liters of water per second. Can be used on
                a wet as well as a drying track.
              </div>
            </div>
            <div className="flex justify-start items-center flex-col bg-[#151515] p-[1.5vmax] rounded-[.8vmax]">
              <div className="w-[12vmax] aspect-square relative animate-[spin_25s_infinite_linear]">
                <Image
                  quality={60}
                  src={Wet}
                  alt="Wet tyre"
                  fill={true}
                ></Image>
              </div>
              <div className="mt-[1vmax] text-[1.5vmax] font-f1bold text-[#2C60A6]">
                WET
              </div>
              <div className="w-[12vmax] text-[1.1vmax] font-f1regular text-center text-[#868F97]">
                Can disperse up to 65 liters of water per second. Best solution
                for heavy rain.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TyreComponent
