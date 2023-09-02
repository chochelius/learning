import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import AppRouter from './routes/AppRouter.jsx'
import Banner from './components/Banner/Banner';

const App = () => {
  return (
    <div className="App">
    <Banner />
    <Router>
      <NavBar />
      <AppRouter />
    </Router>
    </div>
  )
}

export default App