import { Route, Switch } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import CreatePostPage from "./pages/CreatePostPage";
import { MainContent } from "./styles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <MainContent>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/search" exact>
            <SearchPage />
          </Route>
          <Route path="/create-post" exact>
            <CreatePostPage />
          </Route>
        </Switch>
      </MainContent>
    </div>
  );
}

export default App;
