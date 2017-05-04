import { connect } from 'react-redux'
import {saveSpeakers, saveSponsor } from '../store/app/action'
import HomePage from '../components/Pages/HomePages'


const mapStateToProps = (state) => {
  return {
    speakers: state.app.speakers,
    sponsors: state.app.sponsors
  }
}

const mapDispatchToProps = dispatch => ({
  saveSpeakers(data) {
    dispatch(saveSpeakers(data))
  },
   saveSponsor(data) {
    dispatch(saveSponsor(data))
  }
})
/**
 * Contenedor encargado de hacer la conexion de el componente `LandingPage` Y el `store` de la aplicaciòn.
 * @param  {object} props
 * @return {react~Component} Markup Componente con los datos del store que decidimos pasar.
 */
const ContLandingPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

export default ContLandingPage
