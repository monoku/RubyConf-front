import React, { Component, PropTypes } from 'react'
import Styles from './styles.sass'
import Button from '../../Atoms/Button'
import Divider from '../../Atoms/Divider'
import Text from '../../Atoms/Text'
import InputText from '../../Atoms/InputText'
import Link from '../../Atoms/Link'
import SelectBox from '../../Atoms/Select'

class HomeAppPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  render() {
    const options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
    ]

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
        <InputText placeholder="Please enter your email" IconName="IconArrowRight" />
        <InputText placeholder="Please enter your email" />
        <Link>Monoku</Link>
        <Link IconName="IconArrowRight" href="/home">Monoku</Link>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <Divider 
          basicColor='#c0c0c0'
          PrimaryColor='#0024A7'
          SecondColor='#EB151C'
        >
        </Divider>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </main>
    )
  }
}

export default HomeAppPage
