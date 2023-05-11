import logo from './logo.svg';
import './App.css';
import Item from './Item';
import ProductList from './Product';
import './Product.css'
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
    amount:0,
    count:0,
    deposited:0,
    wd:'',
    wt:'',
    discount:100,
    
    };
  }

  incrementCount=()=>{
    this.setState({count:this.state.count+1});
  }

  discount=()=>{
    this.setState({discount:75});
  }

  inputAmount=(input)=>{
    const total= this.state.amount + parseFloat(input);
    this.setState({deposited: parseFloat(input)});
    this.setState({amount:total});
    this.toWord(total);
    this.toWord2(input)
  }

 toWord=(num)=>{
    const numtoword= require('number-to-words');
    this.setState({wt:numtoword.toWords(num)});
    
 }
 toWord2=(num)=>{
  const numtoword= require('number-to-words');
  this.setState({wd:numtoword.toWords(num)});
  
}



  render(){
    return(
      <div>
        <p>{this.state.discount}</p>
        <button  onClick={this.discount}> Discount</button>

        <br></br>
       <p>Total: {this.state.amount}</p>
       <p>Total Word: {this.state.wt}</p>
       <p>Deposit: {this.state.deposited}</p>
       <p>Word Deposit: {this.state.wd}</p>

       <input type="number" onChange={(e)=>this.setState({input:e.target.value})}></input>
      <button button onClick={()=> this.inputAmount(this.state.input)}>Add</button>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}> Increment</button>
        <ProductList></ProductList>
      </div>
    );
      
  }
}

export default App;
