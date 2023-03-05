import Image from 'next/image'
import greenFlag from '../../public/images/greenFlag.png'
import yellowFlag from '../../public/images/yellowFlag.png'
import redFlag from '../../public/images/redFlag.png'
import chequeredFlag from '../../public/images/chequeredFlag.png'

const FlagComponent: React.FC = () => {
  return (
    <div className="w-screen mt-[4vmax] pt-[2vw] bg-black">
      <div className="px-[2vmax] w-screen text-[2.2vmax] font-f1regular text-white text-center">
        During the race, the marshals can wave different{' '}
        <span className="font-f1bold">flags</span>.<br />
        These are the most common ones:
      </div>
      <div className="relative w-[80vmin] mx-auto mt-[4vmax] flex flex-col gap-[3vmax]">
        <div className="w-full flex justify-center items-start">
          <div className="w-[50%] flex items-center flex-col p-[1.5vmax] py-[1vmax] gap-[1.8vmax]">
            <div className="w-[45%] aspect-square relative">
              <Image priority src={yellowFlag} alt={'Yellow flag'} />
            </div>
            <div className="text-white font-f1regular text-center text-[1vmax]">
              <span className="font-f1bold">
                Hazard on or close to the track.
              </span>
              <br />
              Reduce speed and do not overtake.
            </div>
          </div>
          <div className="w-[50%] flex items-center flex-col p-[1.5vmax] py-[1vmax] gap-[1.8vmax]">
            <div className="w-[45%] aspect-square relative">
              <Image priority src={greenFlag} alt={'Green flag'} />
            </div>
            <div className="text-white font-f1regular text-center text-[1vmax]">
              <span className="font-f1bold">Everything clear.</span>
              <br />
              Normal racing conditions apply.
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-start">
          <div className="w-[50%] flex items-center flex-col p-[1.5vmax] py-[1vmax] gap-[1.8vmax]">
            <div className="w-[45%] aspect-square relative">
              <Image priority src={redFlag} alt={'Red flag'} />
            </div>
            <div className="text-white font-f1regular text-center text-[1vmax]">
              <span className="font-f1bold">Session suspended.</span>
              <br />
              All cars proceed to pits.
            </div>
          </div>
          <div className="w-[50%] flex items-center flex-col p-[1.5vmax] py-[1vmax] gap-[1.8vmax]">
            <div className="w-[45%] aspect-square relative">
              <Image priority src={chequeredFlag} alt={'Chequered flag'} />
            </div>
            <div className="text-white font-f1regular text-center text-[1vmax]">
              <span className="font-f1bold">Session completed.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlagComponent
