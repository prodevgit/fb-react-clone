import './Home.css';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Feed from '../components/feed/Feed'
import Contacts from '../components/contacts/Contacts'

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <Sidebar/>
        <Feed/>
        <Contacts/>
      </div>

    </div>
  );
}

export default Home;