import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed'
import Contacts from './Contacts'
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
