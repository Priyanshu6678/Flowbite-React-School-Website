import Hero from '../Hero/Hero.jsx';
import Events from '../Events/Events.jsx';
import Footer from '../Footer/Footer.jsx';

function Home() {
  return (
    
      <div className='w-full h-full flex flex-col'>
        
        <div className='flex-1'>
          <Hero />
          <Events />
        </div>
      </div>
    
  );
}

export default Home;
