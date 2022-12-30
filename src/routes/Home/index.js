import Title from '../../components/Title'
import Description from '../../components/Description'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

const index = () => {
  return (
    <div className="home">
      <section className="home__main">
        <div className="home__head">
          <Title text='We have Full Stack Development Experience' />
          <Description text='I have a strong foundation in both front-end and back-end development. I have a passion for building intuitive and responsive websites and applications.' />
        </div>
        <div>
          <Link to="/lets-talk">
            <p>Let's Talk</p>
            <FontAwesomeIcon icon={faPaperPlane} />
          </Link>
          <Link to="/portofolio">
            <p>Portofolio</p>
            <FontAwesomeIcon icon={faSquareArrowUpRight} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default index