
import './App.css';
import StyledComponent from './components/StyledComponent';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <div className="App">
      <h1> Using Functional Component</h1>
      <UserDetails
        name="John Doe"
        age={30}
        email="john.doe@example.com"
        mobileNo="123-456-7890"
        city="New York"
      />
      <h1>-------------------------------------------------------------</h1>
      <h1> Using Class Component</h1>
      <StyledComponent/>
    </div>
  );
}

export default App;
