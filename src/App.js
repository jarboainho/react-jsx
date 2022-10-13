import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Profile/ProfilePhoto';
import FullName from './Profile/FullName';
import Adresse from './Profile/Adresse';

function App() {
  return (
  <div>
    <ProfilePhoto ></ProfilePhoto>
    <FullName></FullName>
    <Adresse></Adresse>
  </div>
  );
}


export default App;
