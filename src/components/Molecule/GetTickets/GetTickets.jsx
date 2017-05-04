import React, { Component } from 'react'
import Title from '../../Atoms/Title'
import Text from '../../Atoms/Text'
import Button from '../../Atoms/Button'
import Styles from './styles.sass'

import Ticket from '../../../assets/images/RubyConf_Ticket.png'

class GetTickets extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
    this.getTicket = this.getTicket.bind(this)
  }
  getTicket() {
    var win = window.open('https://ti.to/colombia-dev/rubyconf-colombia-2017/', '_blank')  
    win.focus()
  }
  render() {
    const {
      theme
    } = this.props
    return (
      <div className={Styles.row}>
        <div className={`${Styles.small_12} ${Styles.large_6} ${Styles.columns}`}>
          <Title className={Styles[theme]} type="Big">Get the Tickets</Title>
          <Text className={`${Styles.DescriptionFirstSection} ${Styles[theme]} `} type="Big">Join us September 8th and 9th, to be a part of the Ruby conference where people from all over the world will come together to share their knowledge and to inspire others.</Text>
          <Button onClick={this.getTicket} text="Get tickets now!" theme="Primary" />
        </div>
        <div className={`${Styles.small_12} ${Styles.large_6} ${Styles.columns}`}>
          <img className={Styles.Ticket} src={Ticket} alt="Ticket RubyConf" />
        </div>
      </div>
    )
  }
}

export default GetTickets
