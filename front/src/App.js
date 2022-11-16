import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import logIn from './pages/logIn/index'
import trading from "./pages/trading";
import styled from "styled-components";
import axios from 'axios';

const LoginTemplate = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
    axios({
        method: 'get',
        url: '/trading'
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
    return (
        <LoginTemplate>
            <Routes>
                <Route path='/login' element={logIn()}/>
                <Route path='/trading' element={trading()}/>
            </Routes>
        </LoginTemplate>
    );
}

export default App;
