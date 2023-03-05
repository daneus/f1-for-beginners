import Image from 'next/image'
import Mexico from '../../public/images/Mexico.avif'
import RB19 from '../../public/images/RB19.jpg'
import DRSComponent from '../DRSSection/DRSComponent'
import FinalComponent from '../FinalSection/FinalComponent'
import FlagComponent from '../FlagSection/FlagComponent'
import PitStopComponent from '../PitStopSection/PitStopComponent'
import PointsComponent from '../PointsSection/PointsComponent'
import TyreComponent from './TyreComponent'

const RaceComponent: React.FC = () => {
  return (
    <>
      <div className="mt-[8vmax] mb-[4vmax] w-full flex flex-col justify-center">
        <div className="text-[3.1vmax] font-f1bold text-white important self-end pr-[3vmax] mb-[3.5vmax]">
          Race session
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-[50vw] aspect-[3/2] self-start shrink-0 ">
            <div className="w-[80%] aspect-[3/2] absolute bottom-0 rounded-br-[2.1vmax] border-b-[.7vmax] border-r-[.7vmax] border-b-[#FF0000] border-r-[#FF0000]">
              <Image
                priority
                src={Mexico}
                alt="Free practice sessions at Spa-Francorchamps"
                fill={true}
                className="rounded-br-[1.5vmax] border-b-[.6vmax] border-r-[.6vmax] border-b-black border-r-black"
              />
            </div>
            <div className="w-[40%] aspect-[29/20] absolute top-0 right-0">
              <Image
                priority
                src={RB19}
                alt="Mercedes at practice session"
                fill={true}
                className="rounded-[1vmax]"
              />
            </div>
          </div>
          <div className="text-white font-f1regular text-center text-[1.2vmax] sm:text-[2.2vmax] px-[3vmax]">
            <span className="font-f1bold">The big day</span>. It{"'"}s the main
            event of the race weekend, where the drivers put their skills and
            their cars to the test.
          </div>
        </div>
      </div>
      <TyreComponent />
      <PitStopComponent />
      <DRSComponent />
      <FlagComponent />
      <PointsComponent />
      <FinalComponent />
    </>
  )
}

export default RaceComponent
