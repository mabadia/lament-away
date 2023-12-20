import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import BusinessIndex from './jobs/BusinessIndex'
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
            <Route exact path="/jobs" component={BusinessIndex} />
            <Route exact path="/jobs/new" component={NewPlaceForm} />
            <Route exact path="/jobs/:businessId" component={BusinessDetails} />
            <Route exact path="/jobs/:businessId/edit" component={EditBusinessForm} />
            <Route path="/" component={Error404} />
          </Switch>
        </>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
