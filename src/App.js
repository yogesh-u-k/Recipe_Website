import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import Tabs from './components/Tabs';

function App() {

  const [loader , setLoader] = useState(true)
  return (
    <div className="App">
    <Header/>
    <Tabs setLoader={setLoader}></Tabs >
    <RecipeList setLoader={setLoader}></RecipeList>
    {
      loader && <div className='loader'>
        <div className='spinner'>

        </div>

        </div>
    }
    </div>
  );
}

export default App;
