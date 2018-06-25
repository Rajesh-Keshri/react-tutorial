import React from 'react';


export class Calculater extends React.Component{

    constructor(props){
        super(props);
        this.state={
            value:''
        };
        this.calc=[];
        this.inputval='';
    }

    valueChange = (e) => {
        if(e.target.getAttribute('data-name')!='equal'){
        this.inputval='';
        this.calc.push(e.target.innerHTML);
        console.log(this.calc);
        this.calc.map(val =>  (
            this.inputval+=val
        )
        )
        this.setState({
            value:this.inputval
        })
    }

        switch(e.target.getAttribute('data-name')){
            case 'multiply':
            this.setState({

            })
        }
       
  
    }

    render(){
        return(
            <table>
                <tbody>
                <tr>
                    <td colSpan="4" height="50" className="textbox">
                    <input type="text" value={this.state.value} placeholder="0" onChange={this.valueChange}/>
                    </td>
                </tr>
                <tr>
                    <td onClick={this.clearValue}>AC</td>
                    <td>+/-</td>
                    <td onClick={this.valueChange} data-name="mod">%</td>
                    <td onClick={this.valueChange} data-name="divide">/</td>
                </tr>
                <tr>
                    <td onClick={this.valueChange}>7</td>
                    <td onClick={this.valueChange}>8</td>
                    <td onClick={this.valueChange}>9</td>
                    <td onClick={this.valueChange} data-name="multiply">*</td>
                </tr>
                <tr>
                    <td onClick={this.valueChange}>4</td>
                    <td onClick={this.valueChange}>5</td>
                    <td onClick={this.valueChange}>6</td>
                    <td onClick={this.valueChange} data-name="minus">-</td>
                </tr>
                <tr>
                    <td onClick={this.valueChange}>1</td>
                    <td onClick={this.valueChange}>2</td>
                    <td onClick={this.valueChange}>3</td>
                    <td onClick={this.valueChange} data-name="plus">+</td>
                </tr>
                <tr>
                    <td colSpan="2" onClick={this.valueChange}>0</td>
                    <td>.</td>
                    <td onClick={this.valueChange} data-name="equal">=</td>
                </tr>
                </tbody>
            </table>
        )

    }
}

