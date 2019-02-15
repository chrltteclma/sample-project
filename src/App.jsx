import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    console.log('Hello keri mo yan');

    this.state = {
      userList: [
        {
          name: 'Charlotte',
          age: 19,
          occupation: 'Gardener'
        },
        {
          name: 'Charmaine',
          age: 25,
          occupation: 'Accountant'
        }
      ],
      user: {
        name: '',
        age: '',
        occupation: ''
      }
    }

    //add function bindings
  }

  //add event handlers
  handleChangeInfo = e => {

    console.log('EVENT');
    // console.log(e.target);

    const {name, value} = e.target;
    
    this.setState((prevState) => ({
      user: { //... is a spread operator
        ...prevState.user,
        [name]: value
      }
    }));
  }
  

handleAddUser = e => {

  console.log('PASSED HANDLE ADD USER');
  console.log(this.state.userList);
  
  let user = this.state.user;
  let userList = [...this.state.userList];

  userList.push(user);

  console.log(this.state.userList);

  this.setState({userList : userList});

  e.preventDefault();
}

deleteUser = index => {
  let userList = [...this.state.userList];
  userList.splice(index, 1);

  this.setState({userList : userList});
}

  render() {

    let userList = this.state.userList;
    let user = this.state.user;

    // console.log('USERS');
    // console.log(this.state.userList);

    // console.log('USER');
    // console.log(this.state.user);

    return (
      <div className = "App">
      
        <div className = 'forms-panel'>
          <form>
              Name: <br/> <input type= 'text' name= 'name' placeholder= 'Name'  onChange={this.handleChangeInfo}/><br/>
              Age: <br/> <input type= 'text' name= 'age' placeholder= 'Age' onChange={this.handleChangeInfo}/><br/>
              Occupation: <br/> <input type= 'text' name= 'occupation' placeholder= 'Occupation' onChange={this.handleChangeInfo}/><br/>
            <br/>
            <button type='button' onClick={this.handleAddUser}>Add User</button>
            </form>
        </div>
      
      <div className = 'table-panel'>
        <table>
          <thead>
            <tbody>
              <tr>
                <th className= 'user-table-cell'>NAME</th>
                <th className= 'user-table-cell'>AGE</th>
                <th className= 'user-table-cell'>OCCUPATION</th>
              </tr>
              {
                userList.map((user, index) => {
                  return (
                    <tr className='user-table-row'>
                      <td className='user-table-cell'>{user.name}</td>
                      <td className='user-table-cell'>{user.age}</td>
                      <td className='user-table-cell'>{user.occupation}</td>
                      <td className = 'user-table-cell'>
                        <button type = 'button' onClick={() => this.deleteUser(index)}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </thead>
        </table>
      </div>
        
      </div>
    );
  }
}

export default App;
