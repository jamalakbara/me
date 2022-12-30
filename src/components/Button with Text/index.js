import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './button.scss'

const index = ({text, icon, to, reverse}) => {
  return (
    <Link to={to} className={!reverse ? "button": "button-reverse"}>
      {text && (
        <p className={!reverse ? "button__label" : "button-reverse__label"}>{text}</p>
      )}

      {icon && (
        <FontAwesomeIcon className={!reverse ? "button__icon" : "button-reverse__icon"} icon={icon} />
      )}
    </Link>
  )
}

export default index