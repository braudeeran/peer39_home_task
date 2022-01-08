import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterDetails from './character';
import EpisodeDetails from './EpisodeDetails';
import Episodes from "./Episodes";
import NavBar from "./NavBar";


const Main = () => {
    return (
        <Router>
        <div className="main">
                <div className="navbar">
                    <NavBar />
                </div>
                <div className="episodes">
                <Switch>
                <Route exact path = "/">
                <Episodes />
                </Route>
                <Route path= "/episode/:id">
                   <EpisodeDetails />
                </Route>
                <Route path= "/character/:name">
                   <CharacterDetails />
                </Route>
                </Switch>
                </div>
        </div>
    </Router>
   
      );
}
 
export default Main;