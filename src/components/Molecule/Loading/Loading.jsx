import React, { Component } from 'react'
import Styles from './styles.sass'

import loading from '../../../assets/images/loader-ruby.gif'

class Loading extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  render() {
    return (
      <div className={Styles.row}>
        <div className={`${Styles.small_12} ${Styles.large_12} ${Styles.columns}`}>
          <img src={loading} alt="RubyConf Loading"/>
        </div>
      </div>
    )
  }
}

export default Loading
