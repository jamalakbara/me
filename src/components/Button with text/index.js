import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './button_with_text.scss'

const index = ({text,icon,to,reverse}) => {
  return (
    <Link className={!reverse ? 'button' : 'button-reverse'} to={to}>
        {text && (
            <p className={!reverse ? 'button__label' : 'button-reverse__label'}>{text}</p>
        )}

        {icon && (
            <FontAwesomeIcon className={!reverse ? 'button__icon' : 'button-reverse__icon'} icon={icon} />
        )}
    </Link>
  )
}

export default index