/**
 * Constante con nombre de las `Action` -> LOADING_BTN
 * @type {String}
 */
export const LOADING_APP = 'LOADING_APP'
export const SPEAKERS_APP = 'SPEAKERS_APP'
export const SPONSOR_APP = 'SPONSOR_APP'
export const SCHEDULE_APP = 'SCHEDULE_APP'

/**
 * `Action` que al hacer `dispatch` guardamos los Speakers en el store.
 * @param  {[type]} value Arreglo de Speakers.
 * @return {Object} Objeto con los datos de la `Action`.
 */
export const saveSpeakers = (value) => {
  return {
    type: SPEAKERS_APP,
    value
  }
}
/**
 * `Action` que al hacer `dispatch` guardamos los Sponsor en el store.
 * @param  {[type]} value Arreglo de Sponsor.
 * @return {Object} Objeto con los datos de la `Action`.
 */
export const saveSponsor = (value) => {
  return {
    type: SPONSOR_APP,
    value
  }
}
/**
 * `Action` que al hacer `dispatch` guardamos los Schedule en el store.
 * @param  {[type]} value Arreglo de Schedule.
 * @return {Object} Objeto con los datos de la `Action`.
 */
export const saveSchedule = (value) => {
  return {
    type: SCHEDULE_APP,
    value
  }
}
