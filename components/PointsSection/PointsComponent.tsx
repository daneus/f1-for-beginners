import Image from 'next/image'
import softIcon from '../../public/images/softIcon.png'
import FastestLap from '../../public/images/FastestLap.svg'

const PointsComponent: React.FC = () => {
  return (
    <div className="w-screen mt-[4vmax] pt-[2vw] bg-black">
      <div className="px-[2vmax] w-screen text-[2.2vmax] font-f1regular text-white text-center">
        At the end of the race, points are awarded as follows:
      </div>
      <div className="flex justify-center items-center text-white mt-[4vmax]">
        <table>
          <thead>
            <tr className="bg-[#FF0000]">
              <th
                className="px-[1.4vmax] py-[.6vmax] text-[1.4vmax] font-f1regular rounded-tl-[.6vmax] rounded-tr-[.6vmax]"
                colSpan={2}
              >
                Points awarded by Grand Prix
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center text-[1.4vmax] font-f1regular">
              <td className="px-[1.8vmax] py-[.8vmax] font-f1bold">1st</td>
              <td className="px-[1.8vmax] py-[.8vmax]">+25</td>
            </tr>
            <tr className="text-center text-[1.4vmax] font-f1regular bg-[#191919]">
              <td className="px-[1.8vmax] py-[.8vmax] font-f1bold">2nd</td>
              <td className="px-[1.8vmax] py-[.8vmax]">+18</td>
            </tr>
            <tr className="text-center text-[1.4vmax] font-f1regular">
              <td className="px-[1.8vmax] py-[.8vmax] font-f1bold">3rd</td>
              <td className="px-[1.8vmax] py-[.8vmax]">+15</td>
            </tr>
            <tr className="text-center text-[1.4vmax] font-f1regular bg-[#191919]">
              <td className="px-[1.8vmax] py-[.8vmax] font-f1bold">4th</td>
              <td className="px-[1.8vmax] py-[.8vmax]">+12</td>
            </tr>
            <tr className="text-center text-[1.4vmax] font-f1regular">
              <td className="px-[1.8vmax] py-[.8vmax] font-f1bold">5th</td>
              <td className="px-[1.8vmax] py-[.8vmax]">+10</td>
            </tr>
            <tr className="text-center text-[1.4vmax] font-f1regular bg-[#191919]">
              <td className="px-[1.8vmax] py-[.8vmax] font-f1bold">6th</td>
              <td className="px-[1.8vmax] py-[.8vmax]">+8</td>
            </tr>
            <tr className="text-center text-[1.4vmax] font-f1regular">
              <td className="px-[1.8vmax] py-[.8vmax] font-f1bold">7th</td>
              <td className="px-[1.8vmax] py-[.8vmax]">+6</td>
            </tr>
            <tr className="text-center text-[1.4vmax] font-f1regular bg-[#191919]">
              <td className="px-[1.8vmax] py-[.8vmax] font-f1bold">8th</td>
              <td className="px-[1.8vmax] py-[.8vmax]">+4</td>
            </tr>
            <tr className="text-center text-[1.4vmax] font-f1regular">
              <td className="px-[1.8vmax] py-[.8vmax] font-f1bold">9th</td>
              <td className="px-[1.8vmax] py-[.8vmax]">+2</td>
            </tr>
            <tr className="text-center text-[1.4vmax] font-f1regular bg-[#191919]">
              <td className="px-[1.8vmax] py-[.8vmax] font-f1bold rounded-bl-[.6vmax]">
                10th
              </td>
              <td className="px-[1.8vmax] py-[.8vmax]  rounded-br-[.6vmax]">
                +1
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="px-[2vmax] w-screen text-[2.2vmax] font-f1regular text-white text-center mt-[6vmax]">
        With an extra point awarded to the driver that set the
        <br />
        <span className="font-f1bold warning">fastest lap of the race.</span>
      </div>
      <div className="sm:w-[50%] w-[80%] mx-auto mt-[2.5vmax] flex flex-col">
        <div className="flex justify-between items-center text-[2vmax] text-white font-f1regular p-[1vmax] bg-[#101010]">
          <div className="flex">
            <div className="h-[3.5vmax] aspect-square bg-white text-black flex justify-center items-center rounded-br-[1vmax]">
              <div>1</div>
            </div>
            <div className="flex items-center justify-center gap-[.6vmax] ml-[1vmax]">
              <div className="w-[.4vmax] h-[3vmax] bg-mercedes"></div>
              <div className="font-f1bold text-[2.5vmax]">HAMILTON</div>
            </div>
          </div>
          <div className="relative w-[4vmax] aspect-square justify-self-end">
            <Image priority src={softIcon} alt="Soft tyre icon" fill={true} />
          </div>
        </div>
        <div className="flex justify-center items-center bg-[#1A191E] h-[8vmax]">
          <div className="font-f1regular text-[3.5vmax] text-white">
            1:18.887
          </div>
        </div>
        <div className="flex justify-center items-center p-[1vmax] gap-[1vmax]">
          <div className="relative h-[3.5vmax] aspect-square">
            <Image
              priority
              src={FastestLap}
              alt="Fastest lap icon"
              fill={true}
            />
          </div>
          <div className="text-[#ED00FE] font-f1bold text-[2vmax]">
            FASTEST LAP
          </div>
        </div>
      </div>
    </div>
  )
}

export default PointsComponent
