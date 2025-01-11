import React from 'react'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import Footer from './Footer'

const MainSection = () => {
  return (
    <>
    <section id="first">
        <FirstSection/>
    </section>
    <section id="second">
        <SecondSection/>
    </section>
    <section id="third">
        <ThirdSection/>
    </section>
    <section id='footer'>
       <Footer/>
    </section>

    </>
  )
}

export default MainSection