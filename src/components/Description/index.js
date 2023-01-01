import './description.scss'

const index = ({text,style}) => {
  return (
    <p className='description' style={style}>{text}</p>
  )
}

export default index