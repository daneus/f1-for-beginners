import Image from 'next/image'
import BG1 from '../../public/images/BG1.webp'
import F1 from '../../public/logos/Formula1.svg'

const Header: React.FC = () => {
  return (
    <>
      <div className="-top-8 left-0 w-screen">
        <Image className="w-screen" src={BG1} alt={'Formula 1 race'}></Image>
        <div className="absolute h-full w-full top-0 left-0 shadow-[inset_0_-25vmin_25vmax_black] bg-dim"></div>
      </div>
      <div className="absolute w-full flex justify-center items-center top-[10vmin]">
        <Image className="w-[57.5vmin]" src={F1} alt={'Formula 1 Logo'}></Image>
      </div>
      <div className="text-white font-f1regular">Pinga</div>
    </>
  )
}

export default Header
