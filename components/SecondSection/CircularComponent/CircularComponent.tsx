import Image from 'next/image'

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

const CircularComponent: React.FC = () => {
  return (
    <div className="my-[7.6vmax] w-[78.9vmin] h-[75vmin] mx-auto relative">
      <div className="fade-circle top-[0] left-[34.55%] translate-x-[-50%] translate-y-[-50%]">
        <Image
          className="w-[55%]"
          src={RedBullLogo}
          alt={'Red Bull Logo'}
        ></Image>
      </div>
      <div className="fade-circle top-[0] right-[34.55%] translate-x-[50%] translate-y-[-50%]">
        <Image
          className="h-[48%]"
          src={FerrariLogo}
          alt={'Ferrari Logo'}
        ></Image>
      </div>
      <div className="fade-circle top-[19%] left-[10%] translate-x-[-50%] translate-y-[-50%]">
        <Image
          className="h-[38%]"
          src={WilliamsLogo}
          alt={'Williams Logo'}
        ></Image>
      </div>
      <div className="fade-circle top-[19%] right-[10%] translate-x-[50%] translate-y-[-50%]">
        <Image
          className="w-[50%]"
          src={MercedesLogo}
          alt={'Mercedes Logo'}
        ></Image>
      </div>
      <div className="fade-circle top-[50%] left-[0%] translate-x-[-50%] translate-y-[-50%]">
        <Image
          className="w-[52.5%]"
          src={AlphaTauriLogo}
          alt={'AlphaTauri Logo'}
        ></Image>
      </div>
      <div className="fade-circle top-[50%] right-[0%] translate-x-[50%] translate-y-[-50%]">
        <Image
          className="w-[52.5%]"
          src={AlpineLogo}
          alt={'Alpine Logo'}
        ></Image>
      </div>
      <div className="fade-circle bottom-[19%] left-[10%] translate-x-[-50%] translate-y-[50%]">
        <Image className="w-[52.5%]" src={HaasLogo} alt={'Haas Logo'}></Image>
      </div>
      <div className="fade-circle bottom-[19%] right-[10%] translate-x-[50%] translate-y-[50%]">
        <Image
          className="w-[45%]"
          src={McLarenLogo}
          alt={'McLaren Logo'}
        ></Image>
      </div>
      <div className="fade-circle bottom-[0%] left-[34.55%] translate-x-[-50%] translate-y-[50%]">
        <Image
          className="w-[60%]"
          src={AstonMartinLogo}
          alt={'Aston Martin Logo'}
        ></Image>
      </div>
      <div className="fade-circle bottom-[0%] right-[34.55%] translate-x-[50%] translate-y-[50%]">
        <Image
          className="h-[50%]"
          src={AlfaRomeoLogo}
          alt={'Alfa Romeo Logo'}
        ></Image>
      </div>
    </div>
  )
}

export default CircularComponent
