import Image from 'next/image'
import BG1 from '../../public/images/BG1.svg'
import F1Logo from '../../public/logos/Formula1.svg'

const Header: React.FC = () => {
  return (
    <>
      <div className="w-screen relative">
        <div className="absolute w-full h-full bg-dim shadow-[inset_0px_-50px_60px_0_rgba(0,0,0,.8)]"></div>
        <Image className="w-screen" src={BG1} alt="Formula 1 race"></Image>
        <div className="absolute w-full flex flex-col justify-center items-center top-[7vw] xl:top-[11.5vmin]">
          <Image
            className="w-[28vw] xl:w-[47.5vmin]"
            src={F1Logo}
            alt={'Formula 1 Logo'}
          ></Image>
          <div className="text-[4.5vw] text-white font-f1regular whitespace-nowrap">
            for beginners
          </div>
          <div className="mt-[4vw] xl:mt-[5.5vw] flex flex-col gap-[.1vw] self-start ml-[5.5vw]">
            <div className="text-white text-[2.9vw] font-f1bold">
              What is Formula 1?
            </div>
            <div className="text-[2.2vw] font-f1regular text-[#868F97] leading-tight">
              Formula 1 is the
              <br />
              <span className="whitespace-nowrap animate-[gradient_5s_linear_infinite] font-f1bold bg-[length:200%] bg-gradient-to-r from-[#7FC2FE] via-[#FF5656] to-[#7FC2FE] bg-clip-text text-transparent">
                most prestigious motorsport
              </span>
              <br />
              in the world.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
