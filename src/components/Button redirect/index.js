import './button_redirect.scss'

const index = ({text, children, location}) => {
  const handleClick = () => {
    window.location.href = location;
  }

  return (
    <button className="button-redirect" onClick={handleClick}>
      {text && (
        <p>{text}</p>
      )}
      {children}
    </button>
  )
}

export default index