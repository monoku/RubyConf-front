import React, { Component } from 'react'
import Menu from '../../Molecule/Menu'
import Footer from '../../Molecule/Footer'
import GetTickets from '../../Molecule/GetTickets'
import Styles from './styles.sass'


class News extends Component {

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
              <ul>
                <li>
                  <span>Sep 2, 2016</span>
                  <h5>
                    <a href="/blog/join_party_social_media">Join the party on social media</a>
                  </h5>
                </li>
                <li>
                  <span>Sep 1, 2016</span>
                  <h5>
                    <a href="/blog/the_day_is_almost_here">They day is almost here!</a>
                  </h5>
                </li>
              
                <li>
                  <span>Aug 30, 2016</span>

                  <h5>
                    <a href="/blog/recommended_restaurants">Recommended restaurants</a>
                  </h5>
                </li>
              
                <li>
                  <span>Aug 30, 2016</span>

                  <h5>
                    <a href="/blog/cate_huston">Meet Cate Huston</a>
                  </h5>
                </li>
              
                <li>
                  <span>Aug 26, 2016</span>

                  <h5>
                    <a href="/blog/last_tickets_batch">Last batch of tickets</a>
                  </h5>
                </li>
              
                <li>
                  <span>Aug 17, 2016</span>

                  <h5>
                    <a href="/blog/why_to_attend_a_conference">¿Por qué asistir a una conferencia?</a>
                  </h5>
                </li>
              
                <li>
                  <span>Aug 10, 2016</span>

                  <h5>
                    <a href="/blog/david_pelaez">Meet David Peláez Tamayo</a>
                  </h5>
                </li>
              
                <li>
                  <span>Aug 4, 2016</span>

                  <h5>
                    <a href="/blog/jessica_rudder">Meet Jessica Rudder</a>
                  </h5>
                </li>
              
                <li>
                  <span>Aug 3, 2016</span>

                  <h5>
                    <a href="/blog/oscar_rendon">Meet Oscar Rendón</a>
                  </h5>
                </li>
              
                <li>
                  <span>Aug 2, 2016</span>

                  <h5>
                    <a href="/blog/sebastian_arcila">Meet Sebastián Arcila</a>
                  </h5>
                </li>
              
                <li>
                  <span>Aug 2, 2016</span>

                  <h5>
                    <a href="/blog/rafael_franca">Meet Rafael França</a>
                  </h5>
                </li>
                <li>
                  <span>Aug 2, 2016</span>
                  <h5>
                    <a href="/blog/diversity_scholarship_program">Programa de Becas de Diversidad</a>
                  </h5>
                </li>
                <li>
                  <span>Aug 1, 2016</span>
                  <h5>
                    <a href="/blog/rubyconf_challenge">Win a ticket to RubyConf!</a>
                  </h5>
                </li>       
                <li>
                  <span>Jul 31, 2016</span>
                  <h5>
                    <a href="/blog/camille_fournier">Meet Camille Fournier</a>
                  </h5>
                </li>             
                <li>
                  <span>Jul 30, 2016</span>
                  <h5>
                    <a href="/blog/chanelle_henry">Meet Chanelle Henry</a>
                  </h5>
                </li>
                <li>
                  <span>Jul 29, 2016</span>
                  <h5>
                    <a href="/blog/second_tickets_batch">Second batch of tickets</a>
                  </h5>
                </li>
                <li>
                  <span>Jul 29, 2016</span>
                  <h5>
                    <a href="/blog/robert_mosolgo">Meet Robert Mosolgo</a>
                  </h5>
                </li>
                <li>
                  <span>Jul 28, 2016</span>
                  <h5>
                    <a href="/blog/federico_builes">Meet Federico Builes</a>
                  </h5>
                </li>
                <li>
                  <span>Jul 27, 2016</span>
                  <h5>
                    <a href="/blog/small_batch_of_tickets">Small batch of tickets</a>
                  </h5>
                </li>
                <li>
                  <span>Jul 27, 2016</span>
                  <h5>
                    <a href="/blog/anjuan_simmons">Meet Anjuan Simmons</a>
                  </h5>
                </li>
                <li>
                  <span>Jul 26, 2016</span>
                  <h5>
                    <a href="/blog/ben_lovell">Meet Ben Lovell</a>
                  </h5>
                </li>
                <li>
                  <span>Jul 25, 2016</span>
                  <h5>
                    <a href="/blog/miles_woodroffe">Meet Miles Woodroffe</a>
                  </h5>
                </li>
                <li>
                  <span>Jul 24, 2016</span>
                  <h5>
                    <a href="/blog/ann_harter">Meet Ann Harter</a>
                  </h5>
                </li>
                <li>
                  <span>Jul 23, 2016</span>
                  <h5>
                    <a href="/blog/katherine_wu">Meet Katherine Wu</a>
                  </h5>
                </li>
                <li>
                  <span>Jul 22, 2016</span>
                  <h5>
                    <a href="/blog/stella_cotton">Meet Stella Cotton</a>
                  </h5>
                </li>
                <li>
                  <span>Jul 1, 2016</span>
                  <h5>
                    <a href="/blog/nick_sutterer">Meet Nick Sutterer</a>
                  </h5>
                </li>
                <li>
                  <span>Jun 11, 2016</span>
                  <h5>
                    <a href="/blog/cfp_is_closed">CFP is closed</a>
                  </h5>
                </li>
                <li>
                  <span>Jun 3, 2016</span>
                  <h5>
                    <a href="/blog/cfp_last_week">CFP last week</a>
                  </h5>
                </li>
                <li>
                  <span>Jun 1, 2016</span>
                  <h5>
                    <a href="/blog/get_your_ticket">Early bird tickets sold out! Next tickets batch</a>
                  </h5>
                </li>
                <li>
                  <span>May 30, 2016</span>
                  <h5>
                    <a href="/blog/get_your_early_bird_ticket">Get your early bird ticket</a>
                  </h5>
                </li>
                <li>
                  <span>May 16, 2016</span>
                  <h5>
                    <a href="/blog/rubyconf_colombia_is_back">RubyConf Colombia is back for 2016!</a>
                  </h5>
                </li>
              </ul>
            </div>
          </section>
          <GetTickets theme="BlueColor" />
        </main>
        <Footer />
      </div>
    )
  }
}

export default News
