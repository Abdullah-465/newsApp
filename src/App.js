import './App.css'
import Forms from './components/Forms';
import Navs from './components/Navs';
import Crds from './components/Crds';
import { useState } from 'react';
import Spin from './components/Spin';

function App() {

  let [arr1, setArr] = useState([]);
  let [fue, setFlue] = useState(false);
  let [load, setLoad] = useState(false);
  let [error, setError] = useState('');

  const  arrHandler = (flip)=> {
    setFlue(flip);
  }
  const loading = (val)=> {
    setLoad(val);
    // console.log(val);
  }
  const arrsHandler = (arr)=> {
    setArr(arr);
    console.log(arr);
  }
  const errHandler = (erR)=>{
    setError(erR);
  }

  return (
    <div>
      <Navs></Navs>
      <div className='container row mx-auto'>
      {!load ? arr1.map((data) => {
        return (

          <Crds key={Math.random()} data={data}></Crds>

        )
      }): <div>{error}</div> }
      </div>
      {load && <Spin></Spin>}
      { !fue && !load && <Forms loading={loading} arrsHandler={arrsHandler} errHandler={errHandler} arrHandler={arrHandler}> <div className='text-center h4 text-bg-danger text-dark border border-danger rounded mt-5 mx-auto p-2' style={{ maxWidth : '18rem'}}>Enter the News Name</div> </Forms>}
    </div>
  );
}

export default App;
