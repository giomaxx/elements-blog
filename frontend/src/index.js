import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Registration from './components/auth/Registration';
import LogIn from './components/auth/Login';
import LogOut from './components/auth/Logout';
import Single from './components/posts/Single';
import Admin from './Admin';
import Create from './components/admin/Create';
import Edit from './components/admin/Edit';
import Delete from './components/admin/Delete';


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/admin" component={Admin} />
	  			<Route exact path="/admin/create" component={Create} />
	  			<Route exact path="/admin/edit/:id" component={Edit} />
		  		<Route exact path="/admin/delete/:id" component={Delete} />
          <Route path="/signup/" component={Registration} />
          <Route path="/login/" component={LogIn} />
          <Route path="/logout/" component={LogOut} />
          <Route path="/post/:slug" component={Single} />
        </Switch>
      <Footer />
    </React.StrictMode>
  </Router>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
