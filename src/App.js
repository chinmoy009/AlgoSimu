import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomeScreen from './screens/homeScreen';
import InputCollectionScreen from './screens/inputCollectionScreen';
import NavBar from './components/navBar';
import {INPUT_COLLECTION_TYPE_SORTING} from './constants/inputCollectionConstants';

function App() {
  return (
    <BrowserRouter>
        
        <Header></Header>
        <NavBar />
        <main className="main">
            <Route path="/" exact component={HomeScreen}/>
            <Route path="/sortingInput/:id">
              <InputCollectionScreen inputCollectionType={INPUT_COLLECTION_TYPE_SORTING}/>
            </Route>
        </main>
       <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
