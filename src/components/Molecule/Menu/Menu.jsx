import React, { Component } from 'react'
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
              <li className={Styles.MenuItem}>Speakers</li>
              <li className={Styles.MenuItem}>Schedule</li>
              <li className={Styles.MenuItem}>Place</li>
              <li className={Styles.MenuItem}>Conduct</li>
              <li className={Styles.MenuItem}>Sponsors</li>
              <li className={Styles.MenuItem}>Mailing list</li>
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

export default Menu