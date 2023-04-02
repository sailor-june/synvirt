import 'bulma/css/bulma.css';
import './App.css'
import './Colors.css'
import Header from './components/Header'
import Box from './components/Box';
import { BrowserRouter } from 'react-router-dom';
const App = () => {
      return (<>
          <Header />
          <div className='ribbon blue-glass'>SYNVIRT SYNVIRT SYNVIRT SYNVIRT SYNVIRT SYNVIRT SYNVIRT SYNVIRT SYNVIRT SYNVIRT SYNVIRT SYNVIRT SYNVIRT SYNVIRT SYNVIRT SYNVIRT SYNVIRT SYNVIRT SYNVIRT SYNVIRT</div>
        <div className="main  is-flex is-justify-content-center"> 
          <div className='box column is-two-thirds gold-glass'> welcome</div>
          </div>
          </>
      )
  }
  
export default App;