import Hero from '../Hero/Hero.jsx';
import Events from '../Events/Events.jsx';
import Contact from '../Contact/Contact.jsx';
import AboutHomePage from '../AboutHomePage/AboutHomePage.jsx';

function Home() {
  return (
    
      <div className='w-full h-full flex flex-col'>
        
        <div className='flex-1'>
          <Hero />
         <Contact />
         <AboutHomePage/>
         
          <Events />
        </div>
      </div>
    
  );
}

export default Home;
