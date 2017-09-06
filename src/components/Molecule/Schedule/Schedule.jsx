import React, { Component } from 'react'
import Icon from '../../Atoms/Icon'
import Styles from './styles.sass'

import api from '../../../services/api'

class Schedule extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      isSaturday: false
    }
    this.toggleTabSaturday = this.toggleTabSaturday.bind(this)
    this.toggleTabFriday = this.toggleTabFriday.bind(this)
    this.initFetch = this.initFetch.bind(this)
  }
  componentDidMount() {
    this.initFetch()
  }

  async initFetch() {
    try {
      const scheduleData = await api.homePages.agendaItem()
      let schedules = scheduleData.items.reduce((itemsActerior ,items) => {
        itemsActerior[items.fields.day].push({
          ...items.fields,
          id: items.sys.id,
        })
        return itemsActerior
      }, { friday: [], saturday: []})
      console.log(schedules)
      this.props.saveSchedule(schedules)
      this.setState({
        loading: false
      })
    } catch (error) {
      console.log(error)
    }
  }
  toggleTabSaturday() {
    this.setState({
       isSaturday: true
    })
  }

  toggleTabFriday() {
    this.setState({
       isSaturday: false
    })
  }

  render() {
    const isStaturday = this.state.isSaturday
    const schedules = this.props.schedules

    if(this.state.loading){
      return <p>Loader</p>
    }
    return (
      <div className={Styles.Container}>
        <div className={Styles.row}>
          <div className={`${Styles.tabHeader} ${ isStaturday ? Styles.active : '' }`}>
            <ul className={Styles.tabList}>
              <li className={Styles.tabItems}><span onClick={this.toggleTabFriday} className={`${ !isStaturday ? Styles.active : '' } ${ isStaturday ? Styles.Blue : '' }`}>Friday</span></li>
              <li className={Styles.tabItems}><span onClick={this.toggleTabSaturday} className={`${ isStaturday ? Styles.active : '' } ${ !isStaturday ? Styles.Red : '' }`}>Saturday</span></li>
            </ul>
          </div>
          <div className={Styles.tabContent}>
            <div className={`${Styles.friday} ${ !isStaturday ? Styles.active : '' }`}>
              <ul className={Styles.Schedule}>
                { schedules.friday.map((item) => (
                    <li key={item.id} className={Styles.ListSchedule}>
                      <div>
                        <Icon className={Styles.ListScheduleIcon} type={item.iconClass} />
                      </div>
                      <div className={Styles.ListScheduleInfo}>
                        <span className={Styles.ListScheduleHour}><Icon className={Styles.ListScheduleHourIcon}  type="IconTime" /> {item.startTime} - {item.endTime}</span>
                        <p className={Styles.ListScheduleTitle}>{item.name}</p>
                        <p className={Styles.ListScheduleName}>{item.speaker ? item.speaker.fields.name : 'RubyConf team'}</p>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className={`${Styles.saturday} ${ isStaturday ? Styles.active : '' }`}>
              <ul className={Styles.Schedule}>
                { schedules.saturday.map((item) => (
                    <li key={item.id} className={Styles.ListSchedule}>
                      <div>
                        <Icon className={`${Styles.ListScheduleIcon} ${Styles.Red}`} type={item.iconClass} />
                      </div>
                      <div className={Styles.ListScheduleInfo}>
                        <span className={Styles.ListScheduleHour}><Icon className={Styles.ListScheduleHourIcon}  type="IconTime" /> {item.startTime} - {item.endTime}</span>
                        <p className={`${Styles.ListScheduleTitle} ${Styles.Red}`}>{item.name}</p>
                        <p className={Styles.ListScheduleName}>{item.speaker ? item.speaker.fields.name : 'RubyConf team'}</p>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Schedule
