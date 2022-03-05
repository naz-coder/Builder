import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'
import Features from './components/Features'
import Button from './components/Button'
import Start from './components/Start'
import Works from './components/Works'
import Buildefi from './components/Buildefi'
import Bottom from './components/Bottom'
import Footer from './components/Footer'


function App() {
  return (
    <div className="container">
      <Header />
      {/* <Button /> */}
      <Body />
      <Features />
      <Start />
      <Works />
      <Buildefi />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
