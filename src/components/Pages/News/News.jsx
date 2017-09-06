import React, { Component } from 'react'
import moment from 'moment'
import Menu from '../../Molecule/Menu'
import Footer from '../../Molecule/Footer'
import Loading from '../../Molecule/Loading'
import GetTickets from '../../Molecule/GetTickets'
import Styles from './styles.sass'

import api from '../../../services/api'

class News extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      news: []
    }
  this.initFetch = this.initFetch.bind(this)
  }

  componentDidMount() {
    this.initFetch()
  }

  async initFetch() {
    try {
      const pagesData = await api.news.contentPages()

      let news = pagesData.items.map((items ) => {
        return items.fields
      })

      this.setState({
        news: news,
        loading: false
      })

      console.log(news)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    moment.locale()
    if(this.state.loading){
      return <Loading />
    }
    return (
      <div className={Styles.Container}>
        <header className={`${Styles.Header}`}>
          <div className={Styles.HeaderContent} >
            <Menu />
            <div className={`${Styles.row}`}>
             <h1>News</h1>
            </div>
          </div>
        </header>
        <main className={Styles.ContentPages}>
          <section className={`${Styles.row}`}>
            <div  className={`${Styles.Section}`}>
              <ul>
                {
                  this.state.news.map((item)=>{
                    return (
                      <li>
                        <span>{moment(item.date).format('LL')}</span>
                        <h5>
                          <a href={`/news/${item.slug}`}>{item.title}</a>
                        </h5>
                      </li>
                    )
                  })
                }
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
