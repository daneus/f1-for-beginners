import Image from 'next/image'
import BG1 from '../../public/images/BG1.svg'
import F1Logo from '../../public/logos/Formula1.svg'

const Header: React.FC = () => {
  return (
    <>
      <div
        id="container"
        className="h-full relative z-[-1] flex justify-center items-center"
      >
        <div className="absolute w-full h-full bg-dim shadow-[inset_0px_-50px_60px_0_rgba(0,0,0,.8)]"></div>
        <Image
          id="BG1"
          className="w-full h-full object-cover"
          src={BG1}
          alt="Formula 1 race"
        ></Image>
        <div className="absolute w-full flex flex-col justify-center items-center my-auto">
          <Image
            className="w-[30vmax]"
            src={F1Logo}
            alt={'Formula 1 Logo'}
          ></Image>
          <div className="text-[4.6vmax] text-white font-f1regular whitespace-nowrap">
            for beginners
          </div>
          <div className="mt-[8vmax] flex flex-col gap-[.5vmax] self-start ml-[7vmin]">
            <div className="text-white text-[2.9vmax] font-f1bold">
              What is Formula 1?
            </div>
            <div className="text-[2.2vmax] font-f1regular text-[#868F97] leading-tight">
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
