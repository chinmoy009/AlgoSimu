import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomeScreen from './screens/homeScreen';
import NavBar from './components/navBar'

function App() {
  return (
    <BrowserRouter>
        
        <Header></Header>
        <NavBar />
        <main className="main">
            <Route path="/" exact component={HomeScreen}/>
        </main>
<Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
