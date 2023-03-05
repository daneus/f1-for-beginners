import Image from 'next/image'
import FastestPitStop from '../../public/images/FastestPitStop.gif'

const PitStopComponent: React.FC = () => {
  return (
    <div className="w-screen mt-[4vmax] pt-[2vw] bg-black">
      <div className="px-[2vmax] w-screen text-[2.2vmax] font-f1regular text-white text-center">
        By regulation, each driver has to use at least{' '}
        <span className="font-f1bold">2</span> different compounds during the
        race, so a pit stop is necessary.
      </div>
      <div className="mt-[5vmax] relative w-[55%] aspect-video bg-red-300 mx-auto">
        <div className="absolute w-full h-full bg-dim-less z-10"></div>
        <Image
          priority
          src={FastestPitStop}
          alt="World record for fastest pit stop"
          fill={true}
        ></Image>
      </div>
      <div className="mt-[1vmax] px-[2vmax] w-[60%] text-[1.2vmax] font-f1regular text-white text-center mx-auto">
        <span className="font-f1regular good whitespace-nowrap">
          Fastest pit stop in history
        </span>
        <br />
        2019 Brazilian Grand Prix
      </div>
    </div>
  )
}

export default PitStopComponent
