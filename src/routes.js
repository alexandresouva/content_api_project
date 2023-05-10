import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserContext } from 'common/context/User';

const Router = () => {
  const [name, setName] = useState('');
  const [balance, setBalance] = useState(0);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <UserContext.Provider value={{ name, setName, balance, setBalance }}>
            <Login />
          </UserContext.Provider>
        </Route>
        <Route path="/feira">
          <Feira
            name={name}
            setName={setName}
            balance={balance}
            setBalance={setBalance}
          />
        </Route>
        <Route path="/carrinho">
          <Carrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
