import React, { Component } from 'react'
import Icon from '../../Atoms/Icon'
import Styles from './styles.sass'


class Schedule extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  render() {
    return (
      <div className={Styles.Container}>
        <div className={Styles.row}>
          <div className={Styles.tabHeader}>
            <ul className={Styles.tabList}>
              <li className={Styles.tabItems}><span>Friday</span></li>
              <li className={Styles.tabItems}><span>Saturday</span></li>
            </ul>
          </div>
          <div className={Styles.tabContent}>
            <div className={Styles.friday}>
              <ul>
                <li>
                  <div>
                    <Icon type="IconTicket" />
                  </div>
                  <div>
                    <span><Icon type="IconCalendar" /> </span>
                    <p>Registration</p>
                    <p>RubyConf team</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={Styles.saturday}>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Schedule
