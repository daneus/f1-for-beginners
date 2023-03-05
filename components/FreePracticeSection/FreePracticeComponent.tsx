import Image from 'next/image'
import Spa from '../../public/images/Spa.jpg'
import Practice2 from '../../public/images/Practice2.jpg'

const FreePracticeComponent: React.FC = () => {
  return (
    <div className="mt-[8vmax] mb-[4vmax] w-full flex flex-col justify-center">
      <div className="text-[3.1vmax] font-f1bold text-white important self-start pl-[3vmax] mb-[3.5vmax]">
        Practice sessions
      </div>
      <div className="flex justify-center items-center">
        <div className="text-white font-f1regular text-center text-[1.2vmax] sm:text-[2.2vmax] px-[3vmax]">
          These allow the drivers to{' '}
          <span className="font-f1bold">learn the circuit</span> and the teams
          to <span className="font-f1bold">test their cars</span> with new parts
          if necessary.
        </div>
        <div className="relative w-[50vw] aspect-[3/2] self-end shrink-0 ">
          <div className="w-[80%] aspect-[3/2] absolute bottom-0 right-0 rounded-bl-[2.1vmax] border-b-[.7vmax] border-l-[.7vmax] border-b-[#FF0000] border-l-[#FF0000]">
            <Image
              priority
              src={Spa}
              alt="Free practice sessions at Spa-Francorchamps"
              fill={true}
              className="rounded-bl-[1.5vmax] border-b-[.6vmax] border-l-[.6vmax] border-b-black border-l-black"
            />
          </div>
          <div className="w-[40%] aspect-[29/20] absolute top-0 left-0">
            <Image
              priority
              src={Practice2}
              alt="Mercedes at practice session"
              fill={true}
              className="rounded-[1vmax]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FreePracticeComponent
