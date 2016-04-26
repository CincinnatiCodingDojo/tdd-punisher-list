import React from 'react';
import { render } from 'react-dom';


let PunisherList = React.createClass({
  addToList(){
    let newPunishee = {name: this.refs.newPunishee.value, isPunished: false};
    this.state.list = [...this.state.list, newPunishee];
    this.setState({ list : this.state.list });
  },

  getInitialState() {
   return { list: [] };
  },
  render() {
    return (
     <div>
       <input name="newPunishee" ref="newPunishee" />
       <button className="addBtn" onClick={this.addToList}>Add To List</button>
       <ul>
         {this.state.list.map((item, index) => <li key={index}>{item.name}</li>)}
       </ul>
     </div>
    )
  }
})



export default PunisherList;
