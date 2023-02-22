import Image from 'next/image'
import BG1 from '../../public/images/BG1.svg'

const Header: React.FC = () => {
  return (
    <>
      <div className="border-2 border-white">
        <Image className="w-screen" src={BG1} alt="Formula 1 race"></Image>
      </div>
    </>
  )
}

export default Header
