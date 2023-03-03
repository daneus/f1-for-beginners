import GrandPrixSection from '../components/GrandPrixSection/GrandPrixSection'
import Header from '../components/Header/Header'
import SecondSection from '../components/SecondSection/SecondSection'

const Page: React.FC = () => {
  return (
    <>
      <div
        id="wrapper"
        className="h-screen test overflow-x-hidden"
      >
        <Header />
        <SecondSection />
        <GrandPrixSection />
      </div>
    </>
  )
}

export default Page
