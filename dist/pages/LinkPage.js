import React, { useState, useContext, useCallback, useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';
import { Loader } from '../components/Loader';
import { LinksList } from '../components/LinksList';

export const LinksPage = () => {
  const [links, setLinks] = useState([]);
  const {loading, request} = useHttp();
  const {token} = useContext(AuthContext);

  const fetchLinks = useCallback(async () => {
    try {
      const data = await request('/api/link', 'GET', null, {
        Authorization: `Bearer ${token}`
      });
      setLinks(data);
    } catch (e) {
      console.log(e.message);
    }
  }, [token, request]);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  if (loading) {
    return React.createElement(Loader , null)}

  return (
    React.createElement(React.Fragmen, null, 
      !loading && React.createElement(LinksList  , { links : links }, ), ));
}