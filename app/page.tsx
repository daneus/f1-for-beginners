import FreePracticeComponent from '../components/FreePracticeSection/FreePracticeComponent'
import GrandPrixComponent from '../components/GrandPrixSection/GrandPrixComponent'
import Header from '../components/Header/Header'
import SecondSection from '../components/SecondSection/SecondSection'
import QualifyingComponent from '../components/QualifyingSection/QualifyingComponent'

const Page: React.FC = () => {
  return (
    <div id="wrapper" className="h-screen overflow-x-hidden">
      <Header />
      <SecondSection />
      <GrandPrixComponent />
      <FreePracticeComponent />
      <QualifyingComponent />
    </div>
  )
}

export default Page
