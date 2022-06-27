import green from '../assets/images/green.svg'
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
    <Wrapper>
      
        <nav>
          <Logo/>
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>Just some text for the landing page!</p>
            <button className='btn btn-hero'>Login/Register</button>
          </div>
          <img src={green} alt='job hunt' className='img main-img' />
        </div>
      
      </Wrapper>
    );
  };


  
  export default Landing;