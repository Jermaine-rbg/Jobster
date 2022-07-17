import reactresume from '../assets/images/reactresume3.svg'
import Wrapper from '../assets/wrappers/LandingPage';
// import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
    <Wrapper>
      
        <nav>
          {/* <Logo/> */}
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>Just some text for the landing page!</p>
            <Link to="/register" className='btn btn-hero'>Login/Register</Link>
          </div>
          <img src={reactresume} alt='job hunt' className='img main-img' />
        </div>
      
      </Wrapper>
    );
  };


  
  export default Landing;