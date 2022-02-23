import Header from './components/Header'
import Body from './components/Body'
import Features from './components/Features'
import Button from './components/Button'
import Start from './components/Start'
import Works from './components/Works'
import Defi from './components/Defi'

function App() {
  return (
    <div className="container">
      <Header />
      {/* <Button /> */}
      <Body />
      <Features />
      <Start />
      <Works />
      <Defi />
    </div>
  );
}

export default App;
