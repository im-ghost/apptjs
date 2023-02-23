import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
async function request(
  url, 
  config = {}
) {
  const response = await fetch(url, config);
  return await response.json();
}
 export const api = {
  get: (url:,token) => 
  	request(url,{
  	  headers:{
  	    authorization:token
  	  }
  	}),
  post: (url, body, token) => 
  	request(url, { method: 'POST',   headers:{
  	    authorization:token
  	  },body }),
   put: (url, body,token) => 
  	request(url, { method: 'PUT', body,  headers:{
  	    authorization:token
  	  } }),
  delete: (url,id,token) => 
  	request(url, { method: 'DELETE',  headers:{
  	    authorization:token
  	  }, body:id }),
}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
