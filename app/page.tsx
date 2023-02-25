import Header from '../components/Header/Header'
import SecondSection from '../components/SecondSection/SecondSection'

const Page: React.FC = () => {
  return (
    <>
      <div id="wrapper" className="h-screen overflow-y-auto overflow-x-hidden">
        <Header></Header>
        <SecondSection></SecondSection>
      </div>
    </>
  )
}

export default Page
