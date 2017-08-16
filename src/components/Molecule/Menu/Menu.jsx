import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import Icon from '../../Atoms/Icon'
import Button from '../../Atoms/Button'
import Styles from './styles.sass'

var $ = require('jquery')
window.jQuery = window.$ = $
require('velocity-animate')
delete window.jQuery
delete window.$

class Menu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menuIsOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.animateComponentEvent = this.animateComponentEvent.bind(this)
    this.getTicket = this.getTicket.bind(this)
    this.goToByScroll = this.goToByScroll.bind(this)
    this.McButton = this.McButton.bind(this)
  }

  componentDidMount() {
    this.animateComponentEvent()
    this.McButton()
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.scrollingMenuEvent)
  }
  scrollingMenuEvent = () => {
    const main = document.getElementsByTagName('main')
    const menu = document.getElementById('menu')
    const topMain = main[0].getBoundingClientRect().top
    if(topMain < 0){
      menu.classList.add(Styles.Active)
    }else {
       menu.classList.remove(Styles.Active)
    }
  }
  animateComponentEvent() {
     window.addEventListener('scroll', this.scrollingMenuEvent)
  }
  McButton() {
  }

  toggleMenu() {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen
    })
    var McButton = $("[data=hamburger-menu]")
    var McBar1 = McButton.find("b:nth-child(1)")
    // var McBar2 = McButton.find("b:nth-child(2)")
    var McBar3 = McButton.find("b:nth-child(3)")

    McButton.toggleClass("active")
    if (McButton.hasClass("active")) {
      McBar1.velocity({ top: "50%" }, {duration: 200, easing: "swing"})
      McBar3.velocity({ top: "50%" }, {duration: 200, easing: "swing"})
      McBar3.velocity({rotateZ:"90deg"}, {duration: 800, delay: 200, easing: [500,20] })
      McButton.velocity({rotateZ:"135deg"}, {duration: 800, delay: 200, easing: [500,20] })
    } else {
      McButton.velocity("reverse")
      McBar3.velocity({rotateZ:"0deg"}, {duration: 800, easing: [500,20] })
      McBar3.velocity({ top: "100%" }, {duration: 200, easing: "swing"})
      McBar1.velocity("reverse", {delay: 800})
    }

  }
  goToByScroll(id) {
    if(location.pathname === '/') {
      this.toggleMenu()
      id = id.replace("link", "")
      $('html,body').animate(
        { scrollTop: $("#"+id).offset().top - 120
      }, 'slow')
    } else {
      this.props.history.push('/')
      setTimeout(()=> {
        $('html,body').animate(
          { scrollTop: $("#"+id).offset().top - 120
        }, 'slow')
      }, 500)
    }
    this.setState({menuIsOpen: false})
  }
  getTicket() {
    var win = window.open('https://ti.to/colombia-dev/rubyconf-colombia-2017/', '_blank')
    win.focus()
  }

  render() {
    const menuIsOpen = this.state.menuIsOpen
    if (menuIsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return (
      <div id="menu" className={Styles.Container}>
        <div className={`${Styles.Left} ${menuIsOpen ? Styles.active : ''}`}>
          <a className={Styles.Logo} href="/">
            <Icon type="IconRubyConf" />
          </a>
          <nav>
            <ul className={Styles.Menu}>
              <li className={Styles.MenuItem}>
                <Link to='/speakers' onClick={()=> this.goToByScroll('speakers')}>Speakers</Link>
                </li>
              {/*<li className={Styles.MenuItem}><a onClick={()=> this.goToByScroll('schedule')}>Schedule</a></li>*/}
              <li className={Styles.MenuItem}><a onClick={()=> this.goToByScroll('place')}>Venue</a></li>
              <li className={Styles.MenuItem}><a onClick={()=> this.goToByScroll('conduct')}>Conduct</a></li>
              <li className={Styles.MenuItem}><a onClick={()=> this.goToByScroll('sponsors')}>Sponsors</a></li>
              <li className={Styles.MenuItem}><a onClick={()=> this.goToByScroll('mailing')}>Mailing list</a></li>
              <li className={Styles.MenuItem}><a href="https://medium.com/rubyconf-colombia" target="_blank">News</a></li> 
            </ul>
          </nav>
        </div>
        <div className={Styles.Right}>
          <Button text="Get your ticket" theme="Red" size="Small" onClick={this.getTicket} />
        </div>
        <div onClick={this.toggleMenu} className={Styles.ContainerMobil}>
          <a className={Styles.McButton} data="hamburger-menu">
            <b id="Bar-1"></b>
            <b id="Bar-2"></b>
            <b id="Bar-3"></b>
          </a>
        </div>
      </div>
    )
  }
}

export default withRouter(Menu)
