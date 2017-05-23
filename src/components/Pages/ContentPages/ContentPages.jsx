import React, { Component } from 'react'
import showdown from 'showdown'
import Loading from '../../Molecule/Loading'
import Menu from '../../Molecule/Menu'
import Footer from '../../Molecule/Footer'
import GetTickets from '../../Molecule/GetTickets'
import Styles from './styles.sass'

import api from '../../../services/api'

class ContentPages extends Component {

  constructor(props) {
    debugger
    super(props)
    this.state = {
      loading: true,
      contetPage: {},
      locationState: props.match.params.slug
    }
    this.initFetch = this.initFetch.bind(this)
  }

  componentDidMount() {
    debugger
    this.initFetch()
  }

  componentWillReceiveProps = (nextProps) => {
    debugger
    const nextUrl = nextProps.match.params.slug
    if (nextUrl !== this.props.match.params.slug) {
      this.initFetch()
    }
    this.setState({
      location: nextUrl
    })
  }

  async initFetch() {
    debugger
    try {
      const pagesData = await api.pagesData.contentPages(this.props.match.params.slug)
      if(pagesData.items.length <= 0){
        this.props.history.push('/error/404')
      }
      this.setState({
        contetPage: pagesData.items[0].fields,
        loading: false
      })

    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const contetPage = this.state.contetPage
    const converter = new showdown.Converter()
    debugger
    function contentPageHtml() {
      return {__html: converter.makeHtml(contetPage.content)}
    }
    if(this.state.loading){
      return <Loading />
    }
    return (
      <div className={Styles.Container}>
        <header className={`${Styles.Header}`}>
          <div className={Styles.HeaderContent} >
            <Menu />
            <div className={`${Styles.row}`}>
             <h1>{this.state.location}</h1>
             <h1>{contetPage.name}</h1>
            </div>
          </div>
        </header>
        <main className={Styles.ContentPages}>
          <section className={`${Styles.row}`}>
            <div  className={`${Styles.Section}`} dangerouslySetInnerHTML={contentPageHtml()} />
          </section>
          <GetTickets theme="BlueColor" />
        </main>
        <Footer />
      </div>
    )
  }
}

export default ContentPages
