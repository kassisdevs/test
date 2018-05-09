import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpensifyDashboard from '../components/ExpensifyDashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import PageNotFount from '../components/PageNotFount';
import Header from '../components/Header';
 
 const AppRouter = () => (
 <BrowserRouter>
 <div>
 <Header />
 <Switch>
 <Route path="/" component={ExpensifyDashboard} exact={true} />
 <Route path="/create" component={AddExpensePage} />
 <Route path="/edit/:id" component={EditExpensePage} />
 <Route path="/help" component={HelpPage} />
 <Route component={PageNotFount} />
 </Switch>
 </div>
 </BrowserRouter>
 );

export default AppRouter;