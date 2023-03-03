import './App.css';
import MainContent from './components/main/MainContent';
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer.jsx';
import { PageProvider } from "./providers/pageProvider.jsx";
import bgVideo from './assets/pokemon-bg.mp4';

function App()
{
  return (
    <PageProvider>
      <video poster={bgVideo} loop muted autoPlay>
        <source src={bgVideo}/> 
      </video>

      <Navbar/>
    
      <MainContent/>

      <Footer/>
    </PageProvider>
  )
};

export default App;