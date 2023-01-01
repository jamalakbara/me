import Title from '../../components/Title'
import Description from '../../components/Description'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './service.scss'

const index = () => {
  return (
    <div className='service container'>
      <section className='service__head'>
        <Title text='Service I offer' />
        <div className='service__desc'>
          <FontAwesomeIcon className='service__icon' icon={faArrowRight} />
          <Description text='I have a strong foundation in both front-end and back-end development. I have a passion for building intuitive and responsive websites and applications.' />
        </div>
      </section>
      <section className='service__main'>
      </section>
    </div>
  )
}

export default index