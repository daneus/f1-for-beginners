import CircularComponent from './CircularComponent/CircularComponent'

const SecondSection: React.FC = () => {
  return (
    <div className="w-screen mt-[-1vw] pt-[2vw] bg-black">
      <div className="w-screen text-[2.2vw] font-f1regular text-white text-center">
        A total of <span className="font-f1bold">10</span> constructors and
        their drivers compete annually to achieve maximum glory.
      </div>
      <CircularComponent></CircularComponent>
    </div>
  )
}

export default SecondSection
