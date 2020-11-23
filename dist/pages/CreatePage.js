import React, {useState, useEffect, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {useHttp} from '../hooks/http.hook';
import {AuthContext} from '../context/AuthContext';

export const CreatePage = () => {
  const history = useHistory();
  const {token} = useContext(AuthContext);
  const {request} = useHttp();
  const [link, setLink] = useState('');

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const pressHandler = async e => {
    if (e.key === "Enter") {
      try {
        const data = await request('/api/link/generate', 'POST', { from: link }, {
          Authorization: `Bearer ${token}`
        });
        history.push(`/detail/${data.link._id}`);   
      } catch (e) {}
    }
  }

  return (
    React.createElement('div', { className : " col s8 offset-s2 ", style : {paddingTop: 20 }}, 
      React.createElement('input', { placeholder : " \u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 ", 
        type : " text ", 
        id : " link ",
        name : " email ",
        value : link, 
        onChange : e => setLink(e.target.value), 
        onKeyPress : pressHandler }, ),
      React.createElement('label', { htmlFor : " link " }, "\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443", ),
    ));
}