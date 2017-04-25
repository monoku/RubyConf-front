import React, {
  PropTypes
} from 'react'
import Styles from './styles.sass'

/**
 * Componente que se encarga de mostrar los titulos dependiendo del parametro Type.
 * @param  {Object} props  Atributos con los que se va crear el componente. Ejemplo: { type, text, className }
 * @return {react~Component} markup Estructura Html para el Text.
 */
const Text = ({ type, children, className }) => {
  const classNames = `${Styles[type]} ${className}`

  return (
    <p
      className={classNames}
    >
      {children}
    </p>
  )
}

Text.defaultProps = {
  type: 'Big'
}

Text.propTypes = {
  type: PropTypes.oneOf([
    'Big',
    'Medium',
    'Small'
  ]).isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Text
