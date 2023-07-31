import logo from './logo.svg';
import './App.css';
import PostsList from './features/posts/PostsList';
import AddPost from './features/posts/AddPost';
import { SinglePostPage } from './features/posts/SinglePostPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <Navbar />
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <AddPost />
              <PostsList />
            </React.Fragment>
          )}
        />
        <Route exact path="/posts/:postId" component={SinglePostPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
