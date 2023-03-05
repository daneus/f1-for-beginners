import Image from 'next/image'
import Sprint1 from '../../public/images/Sprint1.jpg'
import Sprint2 from '../../public/images/Sprint2.jpg'
import RaceComponent from '../RaceSection/RaceComponent'

const SprintComponent: React.FC = () => {
  return (
    <>
      <div className="my-[8vmax] w-full flex flex-col justify-center">
        <div className="text-[3.1vmax] font-f1bold text-white important self-start pl-[3vmax] mb-[3.5vmax]">
          Sprint session
        </div>
        <div className="flex justify-center items-center">
          <div className="text-white font-f1regular text-center text-[1.2vmax] sm:text-[2.2vmax] px-[3vmax]">
            These occasional sessions determine the starting grid for the race
            but also award points towards the championship. Drivers start based
            on qualifying position.
          </div>
          <div className="relative w-[50vw] aspect-[3/2] self-end shrink-0 ">
            <div className="w-[80%] aspect-[3/2] absolute bottom-0 right-0 rounded-bl-[2.1vmax] border-b-[.7vmax] border-l-[.7vmax] border-b-[#FF0000] border-l-[#FF0000]">
              <Image
                priority
                src={Sprint1}
                alt="Sprint at the 2022 Brazilian Grand Prix"
                fill={true}
                className="rounded-bl-[1.5vmax] border-b-[.6vmax] border-l-[.6vmax] border-b-black border-l-black"
              />
            </div>
            <div className="w-[40%] aspect-[29/20] absolute top-0 left-0">
              <Image
                priority
                src={Sprint2}
                alt="Kevin Magnussen gets pole at the 2022 Brazilian Grand Prix"
                fill={true}
                className="rounded-[1vmax]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-white">
        <table>
          <thead>
            <tr className="bg-[#FF0000]">
              <th
                className="px-[1.6vmax] py-[.8vmax] text-[1.6vmax] font-f1regular rounded-tl-[.6vmax] rounded-tr-[.6vmax]"
                colSpan={2}
              >
                Points awarded by sprint race
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center text-[1.6vmax] font-f1regular">
              <td className="px-[2vmax] py-[1vmax] font-f1bold">1st</td>
              <td className="px-[2vmax] py-[1vmax]">+8</td>
            </tr>
            <tr className="text-center text-[1.6vmax] font-f1regular bg-[#191919]">
              <td className="px-[2vmax] py-[1vmax] font-f1bold">2nd</td>
              <td className="px-[2vmax] py-[1vmax]">+7</td>
            </tr>
            <tr className="text-center text-[1.6vmax] font-f1regular">
              <td className="px-[2vmax] py-[1vmax] font-f1bold">3rd</td>
              <td className="px-[2vmax] py-[1vmax]">+6</td>
            </tr>
            <tr className="text-center text-[1.6vmax] font-f1regular bg-[#191919]">
              <td className="px-[2vmax] py-[1vmax] font-f1bold">4th</td>
              <td className="px-[2vmax] py-[1vmax]">+5</td>
            </tr>
            <tr className="text-center text-[1.6vmax] font-f1regular">
              <td className="px-[2vmax] py-[1vmax] font-f1bold">5th</td>
              <td className="px-[2vmax] py-[1vmax]">+4</td>
            </tr>
            <tr className="text-center text-[1.6vmax] font-f1regular bg-[#191919]">
              <td className="px-[2vmax] py-[1vmax] font-f1bold">6th</td>
              <td className="px-[2vmax] py-[1vmax]">+3</td>
            </tr>
            <tr className="text-center text-[1.6vmax] font-f1regular">
              <td className="px-[2vmax] py-[1vmax] font-f1bold">7th</td>
              <td className="px-[2vmax] py-[1vmax]">+2</td>
            </tr>
            <tr className="text-center text-[1.6vmax] font-f1regular bg-[#191919]">
              <td className="px-[2vmax] py-[1vmax] font-f1bold rounded-bl-[.6vmax]">
                8th
              </td>
              <td className="px-[2vmax] py-[1vmax] rounded-br-[.6vmax]">+1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RaceComponent />
    </>
  )
}

export default SprintComponent
