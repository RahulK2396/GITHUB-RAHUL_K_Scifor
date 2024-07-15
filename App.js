import React from 'react';
import ReactDOM from 'react-dom/client';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "Rahul",
      lname: "k",
      location: "India"
      
    };
  }
  changelocation = () => {
    this.setState({location: "kerala"});
  }
  render() {
    return (
      <div>
        <h1>My Name is {this.state.Name}</h1>
        <h3>
          I am from {this.state.location}
        </h3>
        
        <button
          type="button"
          onClick={this.changelocation}
        >Change </button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<user />);
export default User