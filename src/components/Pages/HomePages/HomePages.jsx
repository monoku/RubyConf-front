import React, { Component, PropTypes } from 'react'
import Styles from './styles.sass'
import Button from '../../Atoms/Button'
import Text from '../../Atoms/Text'

class HomeAppPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  render() {
    return (
      <main className={Styles.Container}>
        <Button text="Comenzar" theme="Primary" />
        <Button text="Comenzar" theme="Second" />
        <Button text="Comenzar" theme="Linear" />
        <p>Test texto</p>
        <Text type="Big">
          Nullam id dolor id nibh ultric
          ies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        </Text>
        <Text type="Medium">
          This is for links and inputs
        </Text>
        <Text type="Small">
          For small text - Some disclaimer shit
        </Text>
      </main>
    )
  }
}

export default HomeAppPage
