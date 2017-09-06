import React, { Component } from 'react'
import showdown from 'showdown'
import Menu from '../../Molecule/Menu'
import Loading from '../../Molecule/Loading'
import Footer from '../../Molecule/Footer'
import GetTickets from '../../Molecule/GetTickets'
import Styles from './styles.sass'

import api from '../../../services/api'

class NewsInside extends Component {

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
      const pagesData = await api.news.contentPagesSlug(this.props.match.params.blog)
      if(pagesData.items.length <= 0){
        this.props.history.push('/error/404')
      }
      this.setState({
        news: pagesData.items[0].fields,
        loading: false
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const news = this.state.news
    const converter = new showdown.Converter()
    function contentPageHtml() {
      return {__html: converter.makeHtml(news.content)}
    }
    if(this.state.loading){
      return <Loading />
    }
    return (
      <div className={Styles.Container}>
        <header className={`${Styles.Header}`}>
          <div className={Styles.HeaderContent} >
            <Menu />
            <div className={`${Styles.row} ${Styles.HeaderTitle}`}>
              <p><a href="/news">&lsaquo; News</a></p>
              <h1>{this.state.news.title}</h1>
            </div>
          </div>
        </header>
        <main className={Styles.ContentPages}>
          <section className={`${Styles.row}`}>
            <div  className={`${Styles.Section}`}>
              <article dangerouslySetInnerHTML={contentPageHtml()} />
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
