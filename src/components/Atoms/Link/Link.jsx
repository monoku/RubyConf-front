import React, {
  PropTypes,
  Component
} from 'react'
import Icon from '../Icon'
import Styles from './styles.sass'

/**
 * Componente con estilo particular de texto con hipervínculo
 * @param  {Object} props  Atributos  con los que podemos modificar el componente y darle valores.
 * @return {react~Component} markup Estructura Html para el Link.
 */

class Link extends Component {
  render() {
    const {
      children,
      className,
      onClick,
      IconName
    } = this.props

    const classNames = [
      Styles.Link,
      className
    ].join(' ')

    return (
      <div>
        <p onClick={()=> onClick()} className={classNames} >
          {children}
          {IconName && <Icon type={IconName} className={Styles.Icon} />}
        </p>
      </div>
    )
  }
}

Link.defaultProps = {
  children: '',
  className: '',
  IconName: ''
}

Link.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  IconName: PropTypes.string
}

export default Link
