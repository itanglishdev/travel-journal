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
    {card}
  </div>
  );
}

export default App;
