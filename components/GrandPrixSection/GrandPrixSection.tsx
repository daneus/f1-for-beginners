import EarthComponent from './EarthComponent/EarthComponent'

const GrandPrixSection: React.FC = () => {
  return (
    <>
      <div className="mt-[12.5vmax] px-[2vmax] w-screen text-[2.2vmax] font-f1regular text-white text-center">
        A Formula 1 season consists of a series races that take place all over
        the world.
      </div>
      <div className="mt-[4vmax] px-[2vmax] w-screen text-[2.2vmax] font-f1regular text-white text-center">
        Every race is called a <span className="font-f1bold">Grand Prix</span>.
      </div>
      <EarthComponent />
    </>
  )
}

export default GrandPrixSection
