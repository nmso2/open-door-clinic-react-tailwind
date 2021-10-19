import './App.css';
import "tailwindcss/tailwind.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import AboutUs from './pages/AboutUs/AboutUs';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import UserProfile from './pages/UserProfile/UserProfile';
import SignUp from './pages/SignUp/SignUp';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import ServiceDetails from './ServiceDetails/ServiceDetails';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/profile">
              <UserProfile></UserProfile>
            </Route>
            <PrivateRoute path="/service/:ID">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
