import Title from '../../components/Title'
import Description from '../../components/Description'
import Button from '../../components/Button with text'
import ButtonRedirect from '../../components/Button redirect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSquareArrowUpRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

import './home.scss'


const index = () => {
  return (
    <div className="home container">
      <section className="home__main">
        <div className="home__head">
          <Title text='We have Full Stack Development Experience' />
          <div className='home__desc'>
            <FontAwesomeIcon className='home__icon' icon={faArrowRight} />
            <Description text='I have a strong foundation in both front-end and back-end development. I have a passion for building intuitive and responsive websites and applications.' />
          </div>
          <div className='home__buttons'>
            <Button text="Let's Talk" icon={faPaperPlane} to="/lets-talk" />
            <Button text="Portofolio" icon={faSquareArrowUpRight} to="/portofolio" reverse={true} />
          </div>
        </div>
        <div className='home__foot'>
          <div className='home__sosmed'>
            <Description style={{ opacity: 1 }} text='Check Out My' />
            <div className='home__links'>
              <ButtonRedirect location="https://instagram.com/jamalakbara">
                <InstagramIcon />
              </ButtonRedirect>
              <ButtonRedirect location="https://linkedin.com/in/jamalakbara">
                <LinkedInIcon />
              </ButtonRedirect>
              <ButtonRedirect location="https://github.com/jamalakbara">
                <GitHubIcon />
              </ButtonRedirect>
            </div>
          </div>
        </div>
      </section>
      <section className='home__misc'>
      </section>
    </div>
  )
}

export default index