import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import PlaceIndex from './jobs/PlaceIndex'
import BusinessDetails from './jobs/BusinessDetails'
import Navigation from './Navigation'
import Error404 from './Error404'
import NewPlaceForm from './jobs/NewBusinessForm'
import EditBusinessForm from './jobs/EditBusinessForm'
import SignUpForm from './users/SignUpForm'
import LoginForm from './users/LoginForm'
import CurrentUserProvider from './contexts/CurrentUser'

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signUp" component={SignUpForm} />
            <Route exact path="/places" component={PlaceIndex} />
            <Route exact path="/places/new" component={NewPlaceForm} />
            <Route exact path="/places/:placeId" component={BusinessDetails} />
            <Route exact path="/places/:placeId/edit" component={EditBusinessForm} />
            <Route path="/" component={Error404} />
          </Switch>
        </>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
