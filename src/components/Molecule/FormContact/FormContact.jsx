import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import Styles from './styles.sass'

import InputText from '../../Atoms/InputText'
import Text from '../../Atoms/Text'
import Button from '../../Atoms/Button'

/**
 * Este componente es el que se encarga de hacer la logica para login de un usuario.Si la respuesta es que no esta registrado es enviado a la pagina de registro.
 */

class FormContact extends Component {
  /**
   * constructor
   * @param  {object} props
   */
  constructor(props) {
    super(props)
    /**
     *
     * @type {Object}
     * @property {boolean} loginBtn Este atributo el estado actual del botón.
     */
    this.state = {
      loginBtn: false
    }
  }
  /**
   * render
   * @return {ReactElement} markup
   */

  render() {
    return (
      <form className={Styles.Container} action="//rubyconf.us11.list-manage.com/subscribe/post?u=7b7c2e5ead7427750ced71f09&amp;id=e7b035683b" encType="multipart/form-data" method="post" name="mc-embedded-subscribe-form" target="_blank">
        <div className={Styles.BoxField}>
          <Text className={Styles.TitleField}>Email</Text>
          <div className={Styles.Divider} />
          <InputText
            name="EMAIL"
            placeholder="Enter your email"
          />
        </div>
        <Button
          type="submit"
          theme="Primary"
          text="Subscribe"
          btnLoading={this.state.loginBtn}
          className={Styles.Button}
        />
      </form>
    )
  }
}

FormContact.defaultProps = {
  handleSubmit: () => {}
}

FormContact.propTypes = {
  handleSubmit: PropTypes.func
}


const FormLoginRedux = reduxForm({
  form: 'subscribe-form'
})(FormContact)

export default FormLoginRedux
