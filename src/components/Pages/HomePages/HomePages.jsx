import React, { Component } from 'react'
import Menu from '../../Molecule/Menu'
import Footer from '../../Molecule/Footer'
import CodeRuby from '../../Molecule/CodeRuby'
import FormContact from '../../Molecule/FormContact'
import Loading from '../../Molecule/Loading'
import GetTickets from '../../Molecule/GetTickets'
// import Schedule from '../../Molecule/Schedule'
import Speakers from '../../Organisms/Speakers'
import Icon from '../../Atoms/Icon'
import Divider from '../../Atoms/Divider'
import Button from '../../Atoms/Button'
import Title from '../../Atoms/Title'
import Text from '../../Atoms/Text'
import Styles from './styles.sass'

import MapImg from '../../../assets/images/Map.png'
import Logo from '../../../assets/images/rubyConfLogo.svg'

import api from '../../../services/api'

class HomeAppPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
    this.animateComponentEvent = this.animateComponentEvent.bind(this)
    this.getCodeOfConduct = this.getCodeOfConduct.bind(this)
    this.initFetch = this.initFetch.bind(this)
    this.previousScroll = 0
    this.lastTringle = 0
  }

  componentDidMount() {
    this.animateComponentEvent()
    this.initFetch()
  }

  async initFetch() {
    try {
      const speakersData = await api.homePages.speakers()
      let speakers = speakersData.items.map((items) => {
        let speakers = {}
        speakers.id = items.sys.id
        speakers.name = items.fields.name
        speakers.description = items.fields.description
        speakers.descriptionEs = items.fields.descriptionEs
        speakers.image = items.fields.image.fields.file.url
        speakers.imageHover = typeof items.fields.imageHover !== 'undefined'
            ? items.fields.imageHover.fields.file.url
            : ''
        return speakers
      })

      this.props.saveSpeakers(speakers)

      const sponsorData = await api.homePages.sponsor()

      let sponsors = sponsorData.items.reduce((valorAnterior, valorActual) => {
        valorAnterior[valorActual.fields.level].push({
          id: valorActual.sys.id,
          level: valorActual.fields.level,
          logo: valorActual.fields.logo.fields.file.url,
          name: valorActual.fields.name,
          url: valorActual.fields.url
        })

        return valorAnterior
      }, { gold: [], bronze: [], silver: [] })

      this.props.saveSponsor(sponsors)

      this.setState({
        loading: false
      })
    } catch (error) {
      console.log(error)
    }
  }

  animateComponentEvent() {
    window.addEventListener('scroll', () => {

      const currentScroll = window.scrollY || window.pageYOffset
      const main = document.getElementsByTagName('main')[0]
      const sgv = document.getElementById('trianglesEffect')
      const header = document.getElementsByTagName('header')[0].offsetHeight
      const topMain = main.getBoundingClientRect()
      const scroolTriangle = header / sgv.childElementCount
      const diferen = header - topMain.top
      let showTriangle = parseInt(diferen / scroolTriangle, 10)

      if(showTriangle > sgv.childElementCount){
        showTriangle = sgv.childElementCount
      }
      if(currentScroll > this.previousScroll){
        for ( let i = 0; i <= showTriangle; i++) {
          if(sgv.children[i]){
            sgv.children[i].classList.remove(Styles.triangleFadeout)
            sgv.children[i].classList.add(Styles.triangleFadein)
          }
          this.lastTringle = i
        }
      }else{
        if(topMain.top > 0){
          for ( let i = this.lastTringle; i >= showTriangle ; i--) {
            if(sgv.children[i]){
              sgv.children[i].classList.remove(Styles.triangleFadein)
              sgv.children[i].classList.add(Styles.triangleFadeout)
            }
          }
        }
      }
      this.previousScroll = currentScroll
    }, { passive: true })
  }
  getCodeOfConduct() {
    var win = window.open('https://github.com/RubyConfCo/code-of-conduct/blob/master/README.md', '_blank')
    win.focus()
  }

  render() {
    const {
      sponsors,
      speakers
    } = this.props

    if(this.state.loading){
      return <Loading />
    }

    return (
      <div className={Styles.Container}>
        <header className={`${Styles.Header}`}>
          <div className={`${Styles.HeaderEffectTri}`}>
            <svg viewBox="0 0 1440 645" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <title>Triangles Effect</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Landing-Page" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g fill="transparent">
                        <g id="trianglesEffect" transform="translate(-1.000000, -1.000000)">
                            <polygon id="Path-12" points="289.054688 575.94873 0.65625 646.125 0.65625 445.231934"></polygon>
                            <polygon id="Path-14" points="616.135498 617.776611 760.842163 573.024658 611.40918 459.21875"></polygon>
                            <polygon id="Path-20" points="1190.80835 389.25769 991.663086 492.999512 1262.6001 554.397949"></polygon>
                            <polygon id="Path-13" points="288.574707 575.932617 611.464844 459.167969 616.179688 618.207031"></polygon>
                            <polygon id="Path-17" points="1320.26562 535.738281 1441.64648 327.808594 1441 571.855469"></polygon>
                            <polygon id="Path-19" points="1319.52075 536.068848 1262.66016 554.445312 1190.58008 388.82959"></polygon>
                            <polygon id="Path-26" points="760.704102 573.042969 991.858398 493.130859 817.58252 605.522217"></polygon>
                            <polygon id="Path-15" points="289.063477 576.060547 1 445.426758 115.011719 313.410156"></polygon>
                            <polygon id="Path-16" points="288.927734 575.85498 532.833984 487.720703 272.666016 248.78125"></polygon>
                            <polygon id="Path-18" points="1320.01758 536.667969 1145.50977 337.630859 1442.04492 329.003906"></polygon>
                            <polygon id="Path-43" points="780.99707 398.095703 760.474609 573.21582 611.431519 459.280151"></polygon>
                            <polygon id="Path-21" points="992.447266 493.072266 968.765625 405 1190.79382 389.27121"></polygon>
                            <polygon id="Path-24" points="114.95166 313.495361 273.164063 248.673828 288.983887 575.991455"></polygon>
                            <polygon id="Path-45" points="780.760742 398.165527 992.664551 492.912109 760.47168 573.202148"></polygon>
                            <polygon id="Path-22" points="1145.51758 337.66748 968.897705 405.002441 1191.73633 389.238281"></polygon>
                            <polygon id="Path-32" points="459.587402 173.258789 532.834961 487.839355 272.050781 249"></polygon>
                            <polygon id="Path-47" points="780.973877 398.293213 969.007812 404.285156 992.366821 492.817017"></polygon>
                            <polygon id="Path-23" points="1145.64648 337.768555 1159.11914 74.3242188 1441.63672 329.269531"></polygon>
                            <polygon id="Path-27" points="1 1 115.597656 313.5625 1 445.992187"></polygon>
                            <polygon id="Path-41" points="533.331055 487.508301 780.908203 398.20874 727.865234 259.495117"></polygon>
                            <polygon id="Path-46" points="780.93042 398.268311 918.607422 239.779297 968.576172 404.541016"></polygon>
                            <polygon id="Path-25" points="1159.03955 74.3996582 1441.39844 0.767578125 1441.03516 328.972656"></polygon>
                            <polygon id="Path-28" points="115.373535 313.290527 316.972656 29.8320312 459.621094 173.289062"></polygon>
                            <polygon id="Path-35" points="459.591797 173.498535 822.719971 148.74292 532.880859 488.013672"></polygon>
                            <polygon id="Path-40" points="917.831055 239.71875 968.802979 405.008789 1145.0166 337.908203"></polygon>
                            <polygon id="Path-44" points="780.846191 398.318848 918.763672 239.806641 727.831543 259.619141"></polygon>
                            <polygon id="Path-30" points="1159.37695 74.3203125 917.722656 239.816406 1145.7832 338.267578"></polygon>
                            <polygon id="Path-31" points="317.035156 30.421875 1 1 115.397461 313.275879"></polygon>
                            <polygon id="Path-42" points="727.961914 259.588867 919.052734 239.933594 822.729492 148.57959"></polygon>
                            <polygon id="Path-29" points="1159.16235 74.4350586 992.548828 0.55859375 1441.17578 0.548828125"></polygon>
                            <polygon id="Path-34" points="459.722656 173.673828 762.203125 0.05859375 317.619141 30.5224609"></polygon>
                            <polygon id="Path-38" points="822.615723 148.89502 1160.07422 74.0878906 994.011719 0.515625"></polygon>
                            <polygon id="Path-33" points="1 1 762.089879 0.72265625 317.273438 30.5351563"></polygon>
                            <polygon id="Path-36" points="761.513672 0.376953125 822.666016 148.810547 460.033447 173.5"></polygon>
                            <polygon id="Path-37" points="822.651855 148.86084 993.615234 1 761.696045 1"></polygon>
                            <polygon id="Path-39" points="822.810547 148.842773 917.948242 239.824219 1161.57812 73.390625"></polygon>
                        </g>
                    </g>
                </g>
            </svg>
          </div>
          <div className={Styles.HeaderContent} >
            <Menu />
            <div className={`${Styles.row} ${Styles.padding_150}`}>
              <div className={`${Styles.small_12} ${Styles.large_6} ${Styles.columns} ${Styles.BoxLogo} ${Styles.animated} ${Styles.slideInDown}`}>
                <img className={`${Styles.Logo}`} src={Logo} alt=""/>
              </div>
              <div className={`${Styles.small_12} ${Styles.large_6} ${Styles.columns} ${Styles.animated} ${Styles.slideInDown}`}>
                <p className={Styles.TextDescription}>
                  Join us in the 3rd edition of the premier Ruby conference in Latin America
                </p>
                <p className={Styles.TextDate}><Icon type="IconCalendar" /> 8 - 9 September, 2017</p>
                <p className={Styles.TextPlace}><Icon type="IconPlace" /> Medellín, Colombia</p>
              </div>
              <div className={`${Styles.small_12} ${Styles.large_12} ${Styles.columns}`}>
                <Icon type="IconArrowDown" className={Styles.ArrowDown} />
              </div>
            </div>
          </div>
        </header>
        <main className={Styles.EffectTriangles}>
          <section className={Styles.row}>
            <GetTickets theme="BlueColor" />
            <div className={`${Styles.small_12} ${Styles.large_6} ${Styles.columns}`}>
              <CodeRuby />
            </div>
          </section>
          <div className={`${Styles.DividerSection} ${Styles.row}`}>
            <Divider
              basicColor="#c0c0c0"
              PrimaryColor="#0024A7"
              SecondColor="#EB151C"
              name="speakersDivider"
            />
            <Title className={Styles.TextBlue} type="Big">Speakers</Title>
          </div>
          <section id="speakers" className={Styles.row}>
              { speakers.map((item) => (
                  <Speakers key={item.id} perfil={item} />
                ))
              }
          </section>
          <section id="schedule" className={`${Styles.Shedule}`}>
            {/*
              <div className={`${Styles.DividerSection} ${Styles.row}`}>
                <Divider
                  basicColor="#FFFFFF"
                  PrimaryColor="#4d4848"
                  SecondColor="#848383"
                  name="scheduleDivider"
                />
                <Title className={Styles.TextWhite} type="Big">Schedule</Title>
              </div>
              <Schedule saveSchedule={this.props.saveSchedule} schedules={this.props.schedules} />
            */}
            <GetTickets theme="WhiteColor" />
            <div id="place" className={`${Styles.DividerSection} ${Styles.row}`}>
              <Divider
                basicColor="#FFFFFF"
                PrimaryColor="#4d4848"
                SecondColor="#848383"
                name="locationDivider"
              />
              <Title className={Styles.TextWhite} type="Big">Location</Title>
            </div>
            <div className={`${Styles.row} ${Styles.padding_100_bottom}`}>
              <div className={`${Styles.small_12} ${Styles.large_12} ${Styles.columns}`}>
                <div>
                  <Text className={`${Styles.Bold} ${Styles.Place}`}>
                    <Icon type="IconPlace" /> Ruta N
                  </Text>
                  <Text className={`${Styles.Place} ${Styles.Margin_left_40}`}>
                    Calle 67 Nº 52-20, Medellín, Antioquia, Colombia
                  </Text>
                </div>
              </div>
            </div>
            <div className={`${Styles.Location}`}>
              <div className={Styles.row}>
                <div className={`${Styles.small_12} ${Styles.large_6} ${Styles.columns}`}>
                  <CodeRuby />
                </div>
                <div className={`${Styles.small_12} ${Styles.large_6} ${Styles.columns}`}>
                  <img className={Styles.MapImg} src={MapImg} alt="RubyConf Location" />
                </div>
              </div>
            </div>
          </section>
          <section id="conduct" className={Styles.CodeConduc}>
            <div className={`${Styles.row} ${Styles.padding_100}`}>
              <div className={`${Styles.small_12} ${Styles.large_12} ${Styles.columns}`}>
                <Title className={Styles.Title} type="Big">Code of conduct</Title>
                <div className={Styles.Divider} />
                <Text className={Styles.Description}>We dedicate ourselves to making everyone feel welcome and at home, both during the conference and events.</Text>
                <Text className={Styles.Description}>Our Code of Conduct offers some guidelines to ensure this for both attendees and speakers.</Text>
                <Button  size="Small" onClick={this.getCodeOfConduct} className={Styles.Button} text="Code of conduct" theme="Red" />
              </div>
            </div>
          </section>
          <section id="sponsors" className={Styles.Sponsors}>
            <div className={`${Styles.DividerSection} ${Styles.row}`}>
              <Divider
                basicColor="#c0c0c0"
                PrimaryColor="#0024A7"
                SecondColor="#EB151C"
                name="sponsorsDivider"
              />
              <Title className={Styles.TextCherry} type="Big">Sponsors</Title>
            </div>
            <div className={`${Styles.row}`}>
              { sponsors.gold.length > 0 &&
                <div className={`${Styles.Gold}`}>
                    <Text className={Styles.Title}>Gold</Text>
                  <ul className={Styles.ListSponsors}>
                    { sponsors.gold.map((item) => (
                        <li key={ item.id }><a href={item.url} target="_blank"><img src={item.logo} alt={item.name} /></a></li>
                      ))
                    }
                  </ul>
                </div>
              }
              { sponsors.silver.length > 0 &&
                <div className={`${Styles.Silver}`}>
                  <Text className={Styles.Title}>Silver</Text>
                  <ul className={Styles.ListSponsors}>
                    { sponsors.silver.map((item) => (
                        <li key={ item.id }><a href={item.url} target="_blank"><img src={item.logo} alt={item.name} /></a></li>
                      ))
                    }
                  </ul>
                </div>
              }
              { sponsors.bronze.length > 0 &&
                <div className={`${Styles.Bronze}`}>
                  <Text className={Styles.Title}>Bronze</Text>
                  <ul className={Styles.ListSponsors}>
                    { sponsors.bronze.map((item) => (
                        <li key={ item.id }><a href={item.url} target="_blank"><img src={item.logo} alt={item.name} /></a></li>
                      ))
                    }
                  </ul>
                </div>
              }
            </div>
          </section>
          <section className={Styles.Contact}>
            <div className={`${Styles.row} ${Styles.padding_100}`}>
              <div id="mailing" className={`${Styles.small_12} ${Styles.large_12} ${Styles.columns}`}>
                <Title className={Styles.Title} type="Big">Join to our mailing list</Title>
                <Text className={Styles.Description}>Get the latest news about RubyConf Colombia, subscribing to our mailing list.</Text>
              </div>
            </div>
            <FormContact />
          </section>
        </main>
        <Footer />
      </div>
    )
  }
}

export default HomeAppPage
