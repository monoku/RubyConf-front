import React, { Component } from 'react'
import Menu from '../../Molecule/Menu'
import Footer from '../../Molecule/Footer'
import GetTickets from '../../Molecule/GetTickets'
import Styles from './styles.sass'


class AboutUs extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  render() {
    return (
      <div className={Styles.Container}>
        <header className={`${Styles.Header}`}>
          <div className={Styles.HeaderContent} >
            <Menu />
            <div className={`${Styles.row}`}>
             <h1>About Us</h1>
            </div>
          </div>
        </header>
        <main className={Styles.ContentPages}>
          <section className={`${Styles.row}`}>
            <div  className={`${Styles.Section}`}>
              <p>RubyConf Colombia is a non-profit event organized by a group of volunteers from Colombia.dev, consisting in 2 full days of talks.</p>
              <h2>History</h2>
              <p>The first edition was on 2015, RubyConf Colombia is one of the largest gathering of Ruby developers in South America. The 2016 edition runs from September 2-3rd and brings the conference to Medellín for the second year in a row.</p>
              <p>Check out past year’s conference <a href="#">website</a> and <a href="#">videos</a>.</p>
              <h2>Organizers</h2>
              <p>RubyConf Colombia is brought to you by a team of organizers, as well as a small but dedicated corps of volunteers. While we depend on the awesomeness of the whole Ruby community to contribute to the terrific experience of RubyConf Colombia every year, there are a few individuals that work especially hard to produce the conference whom we’d like to recognize here:</p>
                <ul>
                  <li><a href="https://twitter.com/AngelaGuette">Angela Guette</a></li>
                  <li><a href="https://twitter.com/catalinadelacue">Catalina de la Cuesta</a></li>
                  <li><a href="https://twitter.com/guilleiguaran">Guillermo Iguarán</a></li>
                  <li><a href="https://twitter.com/app_config">Julián Vargas</a></li>
                  <li><a href="https://twitter.com/lau_garcia">Laura García</a></li>
                  <li><a href="https://twitter.com/nhocki">Nicolás Hock</a></li>
                  <li><a href="https://twitter.com/robermiranda">Roberto Miranda</a></li>
                  <li><a href="https://twitter.com/sebasoga">Sebastián Sogamoso</a></li>
                  <li><a href="https://twitter.com/sescobb27">Simón Escobar</a></li>
                  <li><a href="https://twitter.com/fashionate">Stella Miranda</a></li>
                </ul>
              <h2>Inclusivity</h2>
              <p>One of our key goals for RubyConf Colombia is to provide an inclusive and welcoming experience for all participants. To that end, we have an code of conduct that we require all attendees, speakers, sponsors, volunteers, and staff to comply with, no exceptions. Review our <a href="#">Code of Conduct</a> for more details.</p>
            </div>
          </section>
          <GetTickets theme="BlueColor" />
        </main>
        <Footer />
      </div>
    )
  }
}

export default AboutUs
