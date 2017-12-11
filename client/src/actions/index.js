import "isomorphic-fetch"
import APIKEY from './URLs.js'

export function getNotes() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_NOTES' })
    return fetch('/api/notes', {
    method: "get", headers: { "Content-Type": "application/json", 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }})
        .then(response => {
          return response.json()
        }).then(payload => dispatch({ type: 'SHOW_NOTES', payload }));
  };
}

export function persistNote(name, description, link, comments) {
  const noteInfo = JSON.stringify({
    note:{
      name: name,
      description: description,
      link: link,
      comments: comments
    }
  });
  return (dispatch) => {
    dispatch({ type: 'SAVING_NOTE' })
    return fetch('/api/notes', {
      method: "post", body: noteInfo, headers: { "Content-Type": "application/json", 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }})
      .then(response => response.json()).then(payload => dispatch({ type: 'ADD_NOTES', payload }));
  }
}

export function updateNote(noteId, name, description, link, comments) {
  return (dispatch) => {
    dispatch({ type: 'SAVING_NOTE' })
    return fetch(`/api/notes/${noteId}`, {
      method: "put", body: JSON.stringify({note:{
        name: name,
        description: description,
        link: link,
        comments: comments
      }
    }), headers: { "Content-Type": "application/json", 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
    })
      .then(response => response.json()).then(payload => dispatch({ type: 'SAVING_NOTE' }));
  }
}

export function fetchNews() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_NEWS' });

    return fetch(`https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=${APIKEY}`)
    .then(response => {
      return response.json()})
      .then(responseJSON => {
      return responseJSON.articles
    }).then(news => dispatch({type: 'FETCH_NEWS', news}));

  };
}

export function fetchFoxSports() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_NEWS' });

    return fetch(`https://newsapi.org/v1/articles?source=fox-sports&sortBy=top&apiKey=${APIKEY}`)
      .then(response => {
        return response.json()})
        .then(responseJSON => {
        return responseJSON.articles
      }).then(news => dispatch({type: 'ADD_FOX_SPORTS', news}));

  };
}

//Add a .env file to the root of the react project
//To access in app process.env.REACT_APP_FOX_SPORTS_KEY

export function fetchNFLNews() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_NEWS' });

    return fetch(`https://newsapi.org/v1/articles?source=nfl-news&sortBy=top&apiKey=${APIKEY}`)
      .then(response => {
        return response.json()})
        .then(responseJSON => {
        return responseJSON.articles
      }).then(news => dispatch({type: 'ADD_NFL_NEWS', news}));

  };
}

export function jwt(data, routerHistory) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    return fetch('/user_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: data
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        response.json()
        .then(data => {
          localStorage.setItem('jwt', data.jwt)
          dispatch({ type: 'RETURN_JWT'});
          dispatch({ type: 'LOADING' });
          return fetch('/api/users/:id', {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
          }).then(response => response.json())
          .then(data => {
            localStorage.setItem('user', JSON.stringify(data))
            dispatch({ type: 'CURRENT_USER', payload: data });
            routerHistory.replace('/');
          });
        });
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ', error.message);
    });
  }
}

export function signUp(data, routerHistory) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    return fetch('/api/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: data
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
       response.json()
        .then(data => {
          localStorage.setItem('jwt', data.jwt)
          dispatch({ type: 'RETURN_JWT' });
          dispatch({ type: 'LOADING' });
          return fetch('/api/users/:id', {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
          })
          .then(response => response.json())
          .then(data => {
            localStorage.setItem('user', JSON.stringify(data))
            dispatch({ type: 'CURRENT_USER', payload: data });
            routerHistory.replace('/');
          })
        })
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ', error.message);
    });
  }
}

export function signOut() {
  return (dispatch) => {
    dispatch({ type: 'LOGGED_OUT' })
    window.location.replace('/login');
  }
}
