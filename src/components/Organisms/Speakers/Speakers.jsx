import React, { Component } from 'react'
import showdown from 'showdown'
import Style from 'style-it'
import Link from '../../Atoms/Link'
import Icon from '../../Atoms/Icon'
import Modal from '../../Molecule/Modal'
import Styles from './styles.sass'


class Speakers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      isOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }
  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    })
    setTimeout(()=>{
      document.body.style.overflow = this.state.isOpen ? 'hidden' : 'auto'
    }, 0)
  }

  render() {
    const {
      perfil
    } = this.props
    const isOpenModal = this.state.isOpen
    const converter = new showdown.Converter()
    function createDescriptionInner() {
      return {__html: converter.makeHtml(perfil.description)}
    }
    function createDescriptionTwoInner() {
      return {__html: converter.makeHtml(perfil.descriptionEs)}
    }
    return (
      <div className={`${Styles.small_12} ${Styles.large_4} ${Styles.columns}`}>
        <div className={Styles.Container}>
          <Modal isOpen={isOpenModal} closeHandle={this.toggleModal}>
            <img className={Styles.PhotoModal} src={perfil.image} alt={perfil.name} />
            <div className={Styles.ContentSpeakers}>
              <div dangerouslySetInnerHTML={createDescriptionInner()} />
              <div className={Styles.ContentDivider} />
              <div dangerouslySetInnerHTML={createDescriptionTwoInner()} />
              <div className={Styles.ContainerSponsor}>
                <div className={Styles.ContainerSponsorContent}>
                  <h1>Become a 2017 Sponsor!</h1>
                  <p>We need your support to help us take things to the next level.</p>
                  <p><a>Here is a link to our sponsorship prospectus</a> in which you will find more details about or conference and the sponsorship tiers</p>
                  <div>
                    <ul className={Styles.FooterIcon}>
                      <li className={Styles.FooterItemIcon}><a className={Styles.IconLink} href="http://monoku.com" target="_black"><Icon type="IconFacebook" /></a></li>
                      <li className={Styles.FooterItemIcon}><a className={Styles.IconLink} href="http://monoku.com" target="_black"><Icon type="IconTwitter" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          <div className={Styles.Perfil} onClick={this.toggleModal}>
            <Style>
              {`
                .intro{
                  background-image: url(${perfil.image});
                }
                .intro:hover {
                  background-image: url(${perfil.imageHover});
                }
              `}
              <div className={`${Styles.Avatar} intro`} />
            </Style>
            <p className={Styles.Name}>{perfil.name}</p>
          </div>
          <p className={Styles.Description}>{perfil.description.substr(0, 57)}...</p>
          <Link onClick={this.toggleModal} IconName="IconArrowRight" >More Information</Link>
        </div>
      </div>
    )
  }
}

export default Speakers
