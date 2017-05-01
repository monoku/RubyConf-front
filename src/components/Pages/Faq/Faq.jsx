import React, { Component } from 'react'
import Menu from '../../Molecule/Menu'
import Footer from '../../Molecule/Footer'
import GetTickets from '../../Molecule/GetTickets'
import Styles from './styles.sass'


class Faq extends Component {

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
             <h1>FAQ’s</h1>
            </div>
          </div>
        </header>
        <main className={Styles.ContentPages}>
          <section className={`${Styles.row}`}>
            <div  className={`${Styles.Section}`}>
              <h2>Will all the talks be in English or Spanish?</h2>
              <p>There will be a combination of English and Spanish talks, but we have taken on the service of a certified technical-speaking interpreters accessible through one of those cool individual headsets. There will be translations available from English to Spanish and from Spanish to English. When registering please indicate your interest in a headset. This will help us have an accurate number of these available.</p>
            </div>
            <hr />
            <div  className={`${Styles.Section}`}>
              <h2>Can I get a refund?</h2>
              <p>In case you are thinking about asking for a refund we strongly encourage you to transfer your ticket to a friend, to donate it to a student or to our diversity program, just let us, know you’ll be making someone very happy.</p>
              <p>If you still want to get a refund, this is only possible until Monday, August 1 at 11:59pm COT. After that date, no ticket refunds will be available. To request a refund, please contact us at <a href="mailto:organizers@rubyconf.co">organizers@rubyconf.co</a> with the email you used to register and your full name.</p>
            </div>
            <hr />
            <div  className={`${Styles.Section}`}>
              <h2>Can I transfer my ticket?</h2>
              <p>Yes you can. Just open the email you got when you bought your ticket, click on the link, then just choose to View/Edit Ticket and enter the new person’s information.</p>
              <p>If you’re having trouble transferring your ticket contact us at <a href="mailto:organizers@rubyconf.co">organizers@rubyconf.co</a>.</p>
            </div>
            <hr />
          </section>
          <GetTickets theme="BlueColor" />
        </main>
        <Footer />
      </div>
    )
  }
}

export default Faq
