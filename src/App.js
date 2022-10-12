import './App.css';
import  { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps  } from './CommonMaps';



function App(props) {
  console.log(props);
  return (
    <div className="App">
      <div className="container">
        <h1>Number of Cakes : {props.cakeReducer.numOfCakes}</h1>
        <input type="number" placeholder='Enter quantity of Cakes' />
        <button onClick={(e)=>{props.BuyingCake(Number(e.target.previousSibling.value)); e.target.previousSibling.value = "";}}>Buy Cakes</button>
      </div>
      <div className="container">
        <h1>Number of Chocolates : {props.chocolateReducer.numOfChocolates}</h1>
        <input type="number" placeholder='Enter quantity of Chocolates' />
        <button onClick={(e)=>{props.BuyingChocolate(Number(e.target.previousSibling.value)); e.target.previousSibling.value = "";}}>Buy Chocolates</button>
      </div>
      <div className="container">
        <h1>Number of Icecreams : {props.icecreamReducer.numOfIcecream}</h1>
        <input type="number" placeholder='Enter quantity of Icecreams' />
        <button onClick={(e)=>{props.BuyingIcecream(Number(e.target.previousSibling.value)); e.target.previousSibling.value = "";}}>Buy Icecreams</button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps )(App);
