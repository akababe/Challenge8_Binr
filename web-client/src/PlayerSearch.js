import React, { Component, Fragment } from 'react';

class PlayerSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      print: false,
      data: '',
      selectValue: ''
    };
  }

  setPrint(){
    this.setState({print: true});
  }

  getData=(val)=>{
    console.warn(val.target.value)
    this.setState({data: val.target.value})
    this.setState({print: false});
  }

  printSearch=()=>{
    return(
      <p>You are searching player {this.state.data} by {this.state.selectValue} data</p>
    )
  }

  getSelectValue=(e)=>{
    this.setState({selectValue: e.target.value})
    this.setState({print: false});
  }

  

  render() {
    const options = [
      {
        label: "Username",
        value: "username"
      },
      {
        label: "Email",
        value: "email"
      },
      {
        label: "Experiance",
        value: "experiance"
      },
      {
        label: "Level",
        value: "level"
      }
    ]
    return (
      <Fragment>
        <h5 class="text-center" id="judulForm">Search Player</h5>
        <div>
          <select 
            value={this.state.selectValue} 
            onChange={this.getSelectValue}
            defaultValue="Choose..." >
            {options.map((option) => <option value={option.value}>{option.label}</option> )}
          </select>
          <input type="text" onChange={this.getData} />
          <button onClick={()=>this.setPrint()} >Search </button>
        </div>
        { this.state.print? this.printSearch() : null}
      </Fragment>
    );
  }
}

export default PlayerSearch;