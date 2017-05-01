import React, { Component } from 'react'
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
    }, 100)
  }

  render() {
    const perfil = {
      name: 'Ann Harter',
      description: 'Recurse Center alum. Survey Monkey engineer',
      url: 'http://s2.subirimagenes.com/imagen/previo/thump_9729024annharter.png',
      urlTow: 'http://s2.subirimagenes.com/imagen/previo/thump_9729023annharterhover.png',
      descriptionInner: '<h1>Ann Harter</h1><p>Ann thinks computers are neat. She used to work at Stripe not as an engineer, she is a Recurse Center alumna and is currently working at SurveyMonkey as a software engineer.</p><p>Here is a link to her favorite YouTube video. It’s a time lapse of hot air balloons!</p><p>You can follow Ann on GitHub and Twitter.</p>',
      descriptionTwoInner: '<h2>Te presentamos a Ann Harter</h2><p>Ann solía trabajar en Stripe pero no como un ingeniera, ella es ex-alumna del Recurse Center y actualmente está trabajando en SurveyMonkey como ingeniera de software.</p><p>ESte es un link al video favorito de Ann en YouTube. Es un time lapse de globos aerostáticos!</p><p>Puedes seguir a Ann en GitHub y Twitter.</p>'
    }
    const isOpenModal = this.state.isOpen
    function createDescriptionInner() {
      return {__html: perfil.descriptionInner}
    }
    function createDescriptionTwoInner() {
      return {__html: perfil.descriptionTwoInner}
    }
    return (
      <div className={Styles.Container}>
        <Modal isOpen={isOpenModal} closeHandle={this.toggleModal}>
          <img className={Styles.PhotoModal} src={perfil.urlTow} alt={perfil.name} />
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
                background-image: url(${perfil.url});
              }
              .intro:hover {
                 background-image: url(${perfil.urlTow});
              }
            `}
            <div className={`${Styles.Avatar} intro`} />
          </Style>
          <p className={Styles.Name}>{perfil.name}</p>
        </div>
        <p className={Styles.Description}>{perfil.description}</p>
        <Link>Read more</Link>
      </div>
    )
  }
}

export default Speakers
