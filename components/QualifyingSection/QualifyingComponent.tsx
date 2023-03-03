import Image from 'next/image'
import raceTrack from '../../public/images/track.png'
import raceCar from '../../public/images/car.png'

const QualifyingComponent: React.FC = () => {
  return (
    <div className="w-[100vmin] h-[100vmin] relative bg-black">
      <div className="relative h-full w-[20%]">
        <Image src={raceTrack} alt="Racing track" fill={true}></Image>
        <div className="w-[6vmin] h-[6vmin] absolute bottom-[85%] left-[10%]">
          <Image src={raceCar} alt="Racing car" fill={true} className="z-10" />
        </div>
        <div className="w-[6vmin] h-[6vmin] absolute bottom-[81%] right-[10%]">
          <Image src={raceCar} alt="Racing car" fill={true} className="z-10" />
        </div>
        <div className="w-[6vmin] h-[6vmin] absolute bottom-[77%] left-[10%]">
          <Image src={raceCar} alt="Racing car" fill={true} className="z-10" />
        </div>
        <div className="w-[6vmin] h-[6vmin] absolute bottom-[73%] right-[10%]">
          <Image src={raceCar} alt="Racing car" fill={true} className="z-10" />
        </div>
        <div className="w-[6vmin] h-[6vmin] absolute bottom-[69%] left-[10%]">
          <Image src={raceCar} alt="Racing car" fill={true} className="z-10" />
        </div>
        <div className="w-[6vmin] h-[6vmin] absolute bottom-[65%] right-[10%]">
          <Image src={raceCar} alt="Racing car" fill={true} className="z-10" />
        </div>
        <div className="w-[6vmin] h-[6vmin] absolute bottom-[61%] left-[10%]">
          <Image src={raceCar} alt="Racing car" fill={true} className="z-10" />
        </div>
        <div className="w-[6vmin] h-[6vmin] absolute bottom-[57%] right-[10%]">
          <Image src={raceCar} alt="Racing car" fill={true} className="z-10" />
        </div>
        <div className="w-[6vmin] h-[6vmin] absolute bottom-[53%] left-[10%]">
          <Image src={raceCar} alt="Racing car" fill={true} className="z-10" />
        </div>
        <div className="w-[6vmin] h-[6vmin] absolute bottom-[49%] right-[10%]">
          <Image src={raceCar} alt="Racing car" fill={true} className="z-10" />
        </div>
        <div className="w-[6vmin] h-[6vmin] absolute bottom-[45%] left-[10%]">
          <Image src={raceCar} alt="Racing car" fill={true} className="z-10" />
        </div>
        <div className="w-[6vmin] h-[6vmin] absolute bottom-[41%] right-[10%]">
          <Image src={raceCar} alt="Racing car" fill={true} className="z-10" />
        </div>
        <div className="w-[6vmin] h-[6vmin] absolute bottom-[37%] left-[10%]">
          <Image src={raceCar} alt="Racing car" fill={true} className="z-10" />
        </div>
        <div className="w-[6vmin] h-[6vmin] absolute bottom-[33%] right-[10%]">
          <Image src={raceCar} alt="Racing car" fill={true} className="z-10" />
        </div>
        <div className="w-[6vmin] h-[6vmin] absolute bottom-[29%] left-[10%]">
          <Image src={raceCar} alt="Racing car" fill={true} className="z-10" />
        </div>
        <div className="w-[6vmin] h-[6vmin] absolute bottom-[25%] right-[10%]">
          <Image src={raceCar} alt="Racing car" fill={true} className="z-10" />
        </div>
        <div className="w-[6vmin] h-[6vmin] absolute bottom-[21%] left-[10%]">
          <Image src={raceCar} alt="Racing car" fill={true} className="z-10" />
        </div>
        <div className="w-[6vmin] h-[6vmin] absolute bottom-[17%] right-[10%]">
          <Image src={raceCar} alt="Racing car" fill={true} className="z-10" />
        </div>
        <div className="w-[6vmin] h-[6vmin] absolute bottom-[13%] left-[10%]">
          <Image src={raceCar} alt="Racing car" fill={true} className="z-10" />
        </div>
        <div className="w-[6vmin] h-[6vmin] absolute bottom-[9%] right-[10%]">
          <Image src={raceCar} alt="Racing car" fill={true} className="z-10" />
        </div>
      </div>
    </div>
  )
}

export default QualifyingComponent
