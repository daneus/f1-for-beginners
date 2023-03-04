import Image from 'next/image'
import Monaco from '../../public/images/Monaco.jpg'

const GrandPrixComponent: React.FC = () => {
  return (
    <>
      <div className="pt-[18.5vmax] mt-[-12.5vmax] px-[2vmax] w-screen text-[2.2vmax] font-f1regular text-white text-center bg-black">
        A Formula 1 season consists of a series races that take place all over
        the world.
      </div>
      <div className="my-[4vmax] px-[2vmax] w-screen text-[2.2vmax] font-f1regular text-white text-center bg-black">
        Every race is called a{' '}
        <span className="important font-f1bold text-white whitespace-nowrap">
          Grand Prix
        </span>
        .
      </div>
      <div className="breakpoint relative w-full aspect-video">
        <div className="absolute w-full h-full bg-dim-less shadow-[inset_0px_-10.5vmin_11vmin_0_rgba(0,0,0,1)] z-10"></div>
        <div className="absolute w-full h-full shadow-[inset_0px_10vmin_11vmin_0_rgba(0,0,0,1)] z-10"></div>
        <Image
          priority
          src={Monaco}
          alt="Monaco Grand Prix"
          fill={true}
          quality={50}
        ></Image>
      </div>
      <div className="pt-[18.5vmax] mt-[-12.5vmax] px-[2vmax] w-screen text-[2.2vmax] font-f1regular text-white text-center bg-black">
        A <span className="font-f1bold">Grand Prix</span> has a duration of 3
        days with 3 to 4 sessions occasionally.
      </div>
    </>
  )
}

export default GrandPrixComponent
