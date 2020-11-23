import React, {useState, useEffect, useContext} from 'react';
import {useHttp} from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../context/AuthContext';

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  
  const message = useMessage();
  const {loading, error, request, clearError} = useHttp();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (error) {
      message(error);
      clearError();
    }
  }, [error, message, clearError]);

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const changeHandler = e => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
      message(data.message);
    } catch (e) {}
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {}
  }

  return (
    React.createElement('div', { className : " row " }, 
      React.createElement('div', { className : " col s6 offset-s3 " }, 
        React.createElement('h1', null, "\u0421\u043E\u043A\u0440\u0430\u0442\u0438 \u0441\u0441\u044B\u043B\u043A\u0443", ),
        React.createElement('div', { className : " card blue darken-1 " }, 
          React.createElement('div', { nooooooooooooooome : true,  className : " card-content white-text " }, 
            React.createElement('span', { className : " card-title " }, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F", ),
            React.createElement('div', null, 
              React.createElement('div', { className : " input-field " }, 
                React.createElement('input', { placeholder : " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 Email ", 
                  type : " text ", 
                  className : " validate yellow-input ",
                  id : " email ",
                  name : " email ",
                  value : form.email, 
                  onChange : changeHandler }, ),
                React.createElement('label', { htmlFor : " email " }, "Email", ),
              ),
            ),
            React.createElement('div', null, 
            React.createElement('div', { className : " input-field " }, 
              React.createElement('input', { placeholder : " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041F\u0430\u0440\u043E\u043B\u044C ", 
                type : " text ", 
                className : " validate yellow-input ",
                id : " password ",
                name : " password ",
                value : form.password, 
                onChange : changeHandler }, ),
              React.createElement('label', { htmlFor : " password " }, "\u041F\u0430\u0440\u043E\u043B\u044C", ),
            ),
          ),
          ),
          React.createElement('div', { className : " card-action " }, 
            React.createElement('button', { className : " btn yellow darken-4 ",
              style : {marginRight: 20 }, 
              onClick : loginHandler, 
              disabled : loading}, "\u0412\u043E\u0439\u0442\u0438", ),
            React.createElement('button', { className : " btn grey lighten-1 ",
              onClick : registerHandler, 
              disabled : loading }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F", ),
          ),
        ),
      ),
    ));
}