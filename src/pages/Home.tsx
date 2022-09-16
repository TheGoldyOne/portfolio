import React from 'react'
import Footer from '../components/Footer/Footer'
import Loader from '../components/Loader/Loader'
import Navbar from '../components/Navbar/Navbar'
import Technology from '../components/Technology/Technology'

import jsImage from '../static/img/technologies/js.png'
import tsImage from '../static/img/technologies/ts.png'
import pythonImage from '../static/img/technologies/python.png'
import mysqlImage from '../static/img/technologies/mysql.png'
import html5Image from '../static/img/technologies/html5.png'
import css3Image from '../static/img/technologies/css3.png'
import sassImage from '../static/img/technologies/sass.png'
import reactImage from '../static/img/technologies/react.png'

import logo from '../static/reactLogo.svg'

import './Home.scss'
import Title from '../components/Title/Title'
import Button from '../components/Button/Button'

export default function Home () {
  return (
    <div>
      <Loader />
      <div className="bgImage"></div>
      <div className="container">
        <img src={logo} className="App-logo" alt="React Logo" />
        <Navbar />
        <section className="aboutme">
          <div className="info">
            <h1>Jakub Złotek</h1>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error voluptatibus odio dolor dicta architecto et suscipit quos aliquam ducimus repellendus?</h2>
            <Button>Get in touch</Button>
            <Button mode="soft">More Info</Button>
          </div>
          {/* <div className="more">aa</div> */}

        </section>

        <section className="technologies">
          <Title title="Technologies that i work with" />
          <div className="technologies">
            <div className="grid">
              <Technology name="JavaScript" image={jsImage}/>
              <Technology name="TypeScript" image={tsImage}/>
              <Technology name="Python" image={pythonImage}/>
              <Technology name="MySQL" image={mysqlImage}/>
              <Technology name="HTML 5" image={html5Image}/>
              <Technology name="CSS 3" image={css3Image}/>
              <Technology name="Sass" image={sassImage}/>
              <Technology name="React" image={reactImage}/>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
