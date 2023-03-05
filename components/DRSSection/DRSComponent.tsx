import Image from 'next/image'
import DRS from '../../public/images/DRS.gif'

const DRSComponent: React.FC = () => {
  return (
    <div className="w-screen mt-[4vmax] pt-[2vw] bg-black">
      <div className="px-[2vmax] w-screen text-[2.2vmax] font-f1regular text-white text-center">
        The <span className="font-f1bold">DRS</span> {'('}Drag Reduction System
        {')'} is a mechanism that, when activated, opens the rear wing
        facilitating overtaking.
      </div>
      <div className="mt-[3.5vmax] relative w-[40%] aspect-video bg-red-300 mx-auto">
        <div className="absolute w-full h-full bg-dim-less z-10"></div>
        <Image
          priority
          src={DRS}
          alt="World record for fastest pit stop"
          fill={true}
        ></Image>
      </div>
      <div className="mt-[1vmax] px-[2vmax] w-[60%] text-[1.2vmax] font-f1regular text-white text-center mx-auto warning">
        Can only be used in certain parts of a track.
      </div>
    </div>
  )
}

export default DRSComponent
