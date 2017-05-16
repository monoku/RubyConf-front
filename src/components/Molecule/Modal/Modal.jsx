import React, { Component, PropTypes } from 'react'
import Modal from 'react-modal'
import Icon from '../../Atoms/Icon'

import Styles from './styles.sass'

const customStyles = {
  overlay: {
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY: 'auto',
    padding: '0px',
    zIndex: 5
  },
  content: {
    position: 'relative',
    borderRadius: 0,
    boxShadow: '0 15px 25px 0 rgba(0, 0, 0, 0.25)',
    background: 'linear-gradient(134deg, rgba(19, 36, 99, 0.9), rgba(53, 96, 250, 0.9))',
    margin: 'auto',
    padding: '0px',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100vw',
    height: '100vh'
  }
}
/**
 * Este componente muestra una modal, tambien hace `render` de lo que ingresen dentro del componete.
 */
class ModalCustom extends Component {
  constructor(props) {
    super(props)
    this.toggleModal = this.toggleModal.bind(this)
    this.state = {
      open: false
    }
  }

  componentWillMount() {
    if (this.props.isOpen) {
      this.setState({
        open: this.props.isOpen
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen) {
      this.setState({
        open: nextProps.isOpen
      })
    }
  }

  toggleModal(toggle, isOpen = false) {
    this.props.closeHandle()
    this.setState({
      open: !this.props.isOpen,
      isOpen
    })
  }

  render() {
    const { modalOptions, children, isOpen, buttonShow } = this.props
    const isOpenModal = this.state.open
    return (
      <Modal style={customStyles} isOpen={isOpenModal} {...modalOptions} contentLabel="" closeTimeoutMS={500} onRequestClose={() => this.toggleModal(false)}>
        {buttonShow &&
          <div className={Styles.ModalCloseButton}>
           <p onClick={() => this.toggleModal(false, isOpen)} className={Styles.CloseButton}>Close <Icon className={Styles.CloseButtonIcon} type="IconClose" /></p>
          </div>
        }
        <div className={Styles.ModalContent}>
          {children &&
            children
          }
        </div>
      </Modal>
    )
  }
}

ModalCustom.defaultProps = {
  modalOptions: {},
  isOpen: false,
  children: null,
  buttonShow: true,
  closeHandle: () => null
}

ModalCustom.propTypes = {
  modalOptions: PropTypes.object,
  children: PropTypes.any,
  isOpen: PropTypes.bool,
  buttonShow: PropTypes.bool,
  closeHandle: PropTypes.func
}

export default ModalCustom
