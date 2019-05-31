import api, { setToken } from './init'
import { getDecodedToken,getValidToken } from './token'

// Sends a POST request to /auth on the server, with the email & password returning the JWT
// Belonging to the user with supplied credentials
export function signIn({ email, password }) {

  return api.post('/auth/login', { email, password })
    .then(res => {
      const token = res.data.data.token;

      if(res.data.data.error){
        return Promise.resolve({error:'Invalid username/password. Please try again.'});

      }else{
        setToken(token)
        return Promise.resolve({data:getDecodedToken()});
      }

    })
    .catch(res => {
      const httpCode=res.response.status;
      if (httpCode === 400 || httpCode === 401 || httpCode===404)  {
        return Promise.resolve({error:'Invalid username/password. Please try again.'});
      }
    })
}

export function signOut() {
  setToken(null)
}


export function isLoggedIn() {
  const tokenInfo=getValidToken();
  if(tokenInfo)
    return true;
  else
    return false;

}

