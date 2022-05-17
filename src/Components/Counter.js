import React,{Component} from "react";

export class Counter extends Component{
    constructor(props){
        super(props)

        this.state = {
            count:0
        }
    }

    incrementCounter = ()=>{
        this.setState({count: this.state.count +5})
    }
    
    decrementCounter = ()=>{
        this.setState({count: this.state.count -3})
    }
    render(){
        const style = {
            counter:{fontSize:"10em",color:"red"},
            incrementButton:{padding:"10px 15px", fontSize:"2em",color:"purple"},
        }

        let {count} = this.state    //destructuring
        return (
            <>
            <h1 style={{color:"purple"}}>{"This is the project of Increment(+5) and Decrement(-3)"}</h1>
               <h1 style={style.counter}>{count}</h1>
               <button style={style.incrementButton} onClick={this.incrementCounter}>Increment</button>
               <button style={style.incrementButton} onClick={this.decrementCounter}>Decrement</button>



            </>
        )
    }
}

export default Counter