import React, { Component } from 'react'
import Menu from '../../Molecule/Menu'
import Footer from '../../Molecule/Footer'
import GetTickets from '../../Molecule/GetTickets'
import Styles from './styles.sass'


class NewsInside extends Component {

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
            <div className={`${Styles.row} ${Styles.HeaderTitle}`}>
              <p>&lsaquo; News</p>
              <h1>Meet Jessica Rudder</h1>
            </div>
          </div>
        </header>
        <main className={Styles.ContentPages}>
          <section className={`${Styles.row}`}>
            <div  className={`${Styles.Section}`}>
              <article>
                <p>
                <img src="http://2016.rubyconf.co/img/speakers/jessica.jpg" alt="Jessica Rudder" />
                </p>
                <p>Jessica wanted to be a programmer when she was only 8, she spent hours in the green glow of the monitor learning BASIC.
                Some time later she detoured into digital marketing being a respected leader with over 8 years of experience in this area.
                Jessica is now a developer for <a href="https://flatironschool.com">Flatiron School</a> - happily spending her days writing code that helps other people learn to code too.</p>
                <p>You can follow Jessica on <a href="https://twitter.com/jessrudder">Twitter</a> and <a href="https://github.com/jessrudder">GitHub</a></p>
                <hr />
                <h2 id="te-presentamos-a-jessica-rudder">Te presentamos a Jessica Rudder</h2>
                <p>Jessica decidió ser programadora cuando solo tenia 8 años, ella invirtió horas en el resplandor verde del monitor aprendiendo BASIC.
                Algún tiempo después ella se fue por el camino del Marketing Digital siendo una respetada líder con acerca de 8 años de experiencia en esta área.
                Actualmente trabaja como desarrolladora para <a href="https://flatironschool.com">Flatiron School</a> - donde es feliz dedicando sus días a escribir código que ayuda a otras personas a aprendera escribir código.</p>
                <p>Puedes seguir a Jessica en <a href="https://twitter.com/jessrudder">Twitter</a> y <a href="https://github.com/jessrudder">GitHub</a></p>
              </article>
            </div>
          </section>
          <GetTickets theme="BlueColor" />
        </main>
        <Footer />
      </div>
    )
  }
}

export default NewsInside
