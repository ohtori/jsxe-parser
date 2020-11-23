import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, showAlert } from '../redux/actions';
import { Alert } from '../components/Alert';

export const Form = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.error);
  const [input, setInput] = useState({title: ''});

  const inputChange = e => {
    setInput({[e.target.name]: e.target.value});    
  }

  const formSubmit = e => {
    e.preventDefault();  
    if (!input.title.trim() || input.title.trim().length < 3) {
      dispatch(showAlert('\u0421\u043B\u0438\u0448\u043A\u0430\u043C \u043C\u0430\u043B\u043E \u0431\u0443\u043A\u0430\u0444!'));
      return;
    }
    const post = {
      title: input.title,
      id: Date.now()
    }
    dispatch(createPost(post));
  }

  return (
    React.createElement('div', { className : " input-group mb-3 " }, 
      React.createElement('form', { onSubmit : formSubmit }, 

        React.createElement('div', { className : " form-group " }, 
          React.createElement('label', { htmlFor : " title " }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043F\u043E\u0441\u0442\u0430", ),
          React.createElement('input', { type : " text ", 
            className : " form-control ", 
            name : " title ",
            id : " title ",
            value : input.value,  
            onChange : inputChange }, ),
        ),
        React.createElement('button', { type : " submit ", className : " btn btn-success " }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C", ),
      ),
    ))
}