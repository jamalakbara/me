import Title from '../../components/Title'
import Description from '../../components/Description'
import Button from '../../components/Button with Text'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSquareArrowUpRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './home.scss'

const index = () => {
  return (
    <div className="home">
      <section className="home__main">
        <div className="home__head">
          <Title text='We have Full Stack Development Experience' />
          <div className='home__desc'>
            <FontAwesomeIcon className='arrow-icon' icon={faArrowRight} />
            <Description text='I have a strong foundation in both front-end and back-end development. I have a passion for building intuitive and responsive websites and applications.' />
          </div>
        </div>
        <div className='home__foot'>
          <div className='home__buttons'>
            <Button text="Let's Talk" icon={faPaperPlane} to="/lets-talk" />
            <Button text="Portofolio" icon={faSquareArrowUpRight} to="/portofolio" reverse={true} />
          </div>
        </div>
      </section>
      <section className='home__misc'>

      </section>
    </div>
  )
}

export default index