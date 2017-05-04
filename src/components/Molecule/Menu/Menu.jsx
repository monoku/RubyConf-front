import React, { Component } from 'react'
import $ from "jquery"
import { withRouter } from 'react-router'
import Icon from '../../Atoms/Icon'
import Button from '../../Atoms/Button'
import Styles from './styles.sass'


class Menu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menuIsOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.animateComponentEvent = this.animateComponentEvent.bind(this)
    this.goToByScroll = this.goToByScroll.bind(this)
  }

  componentDidMount() {
    this.animateComponentEvent()
  }

  animateComponentEvent() {
     window.addEventListener('scroll', () => {
       const main = document.getElementsByTagName('main')
       const menu = document.getElementById('menu')
       const topMain = main[0].getBoundingClientRect().top
       if(topMain < 0){
         menu.classList.add(Styles.Active)
       }else {
          menu.classList.remove(Styles.Active)
       }
     })
  }
  
  toggleMenu() {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen
    })
  }
  goToByScroll(id) {
    if(location.pathname === '/') {
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
      }, 100)
    }
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
          <a onClick={this.toggleMenu} className={Styles.Close}>Close X</a>
          <a>
            <Icon type="IconRubyConf" className={Styles.Logo} />
          </a>
          <nav>
            <ul className={Styles.Menu}>
              <li className={Styles.MenuItem}><a onClick={()=> this.goToByScroll('speakers')} >Speakers</a></li>
              <li className={Styles.MenuItem}><a onClick={()=> this.goToByScroll('schedule')}>Schedule</a></li>
              <li className={Styles.MenuItem}><a onClick={()=> this.goToByScroll('place')}>Place</a></li>
              <li className={Styles.MenuItem}><a onClick={()=> this.goToByScroll('conduct')}>Conduct</a></li>
              <li className={Styles.MenuItem}><a onClick={()=> this.goToByScroll('sponsors')}>Sponsors</a></li>
              <li className={Styles.MenuItem}><a onClick={()=> this.goToByScroll('mailing')}>Mailing list</a></li>
            </ul>
          </nav>
        </div>
        <div className={Styles.Right}>
          <Button text="Get Ticket" theme="Red" />
        </div>
        <div onClick={this.toggleMenu} className={Styles.ContainerMobil}>
          <Icon className={Styles.Icon} type="IconMenu" />
        </div>
      </div>
    )
  }
}

export default withRouter(Menu)
