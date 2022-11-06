import './index.css';
import Navbar from './components/Navbar';
import data from './Data'
import Card from './components/Card';

function App() {

  const card = data.map((item,idx)=> {
    return <Card key={idx} {...item}
    />
  })
  return (
  <div>
    <Navbar/>
    <div className='main-card-container'>
      {card}
    </div>
  </div>
  );
}

export default App;
