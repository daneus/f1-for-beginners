import GrandPrixSection from '../components/GrandPrixSection/GrandPrixSection'
import Header from '../components/Header/Header'
import SecondSection from '../components/SecondSection/SecondSection'
import QualifyingComponent from '../components/QualifyingSection/QualifyingComponent'

const Page: React.FC = () => {
  return (
    <div id="wrapper" className="h-screen overflow-x-hidden">
      <Header />
      <SecondSection />
      <GrandPrixSection />
      <QualifyingComponent />
    </div>
  )
}

export default Page
