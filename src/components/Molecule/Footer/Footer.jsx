import React, { Component } from 'react'
import { withRouter } from 'react-router'
import $ from "jquery"
import Icon from '../../Atoms/Icon'
import Text from '../../Atoms/Text'
import Styles from './styles.sass'

import LogoMonoku from '../../../assets/images/logo_monoku.png'

class Footer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
    this.goToPage = this.goToPage.bind(this)

  }
  goToPage(page) {
    $('html,body').animate(
      { scrollTop: 0
    }, 'slow')
    this.props.history.push(`/${page}`)
  }

  render() {
    return (
      <div className={Styles.Container}>
        <div className={Styles.Left}>
          <div>
            <ul className={Styles.Footer}>
              <li className={Styles.FooterItem} onClick={()=> this.goToPage('about-us')}>About</li>
              <li className={Styles.FooterItem}>Contact</li>
              <li className={Styles.FooterItem}><a href="https://github.com/RubyConfCo/code-of-conduct/blob/master/README.md" target="_black">Code of conduct </a></li>
              <li className={Styles.FooterItem} onClick={()=> this.goToPage('news')}>News</li>
              <li className={Styles.FooterItem} onClick={()=> this.goToPage('faq')}>FAQ</li>
            </ul>
          </div>
          <div>
            <ul className={Styles.FooterIcon}>
              <li className={Styles.FooterItemIcon}><a className={Styles.IconLink} href="https://www.facebook.com/RubyConfCo" target="_black"><Icon type="IconFacebook" /></a></li>
              <li className={Styles.FooterItemIcon}><a className={Styles.IconLink} href="https://twitter.com/RubyConfCo" target="_black"><Icon type="IconTwitter" /></a></li>
            </ul>
          </div>
        </div>
        <div className={Styles.Right}>
          <Text className={Styles.Texto}>Made by</Text>
          <a className={Styles.Imagen} href="http://monoku.com" target="_black"><img src={LogoMonoku} alt="Monoku" /></a>
        </div>
      </div>
    )
  }
}

export default withRouter(Footer)
