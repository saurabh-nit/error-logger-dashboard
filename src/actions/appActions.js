export const createUser = (parameters) => {
  let  headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
    // "Content-Type": "application/x-www-form-urlencoded",
  }
  let configParams = {
    headers: headers,
    method: 'POST'
  }
  configParams.body =  JSON.stringify(parameters);
  const promise = new Promise((resolve, reject) => {
    fetch('http://34.73.59.87/api/users/user-sign-up', configParams)
      .then(response => response.json())
      .then((responseJson) => {
        resolve(responseJson);
      }).catch((error) => {
      reject(error);
    });
  });
  return promise;
};

export const signInUser = (parameters) => {
  let  headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
    // "Content-Type": "application/x-www-form-urlencoded",
  }
  let configParams = {
    headers: headers,
    method: 'POST'
  }
  configParams.body =  JSON.stringify(parameters);
  const promise = new Promise((resolve, reject) => {
    fetch('http://34.73.59.87/api/users/login-user', configParams)
      .then(response => response.json())
      .then((responseJson) => {
        resolve(responseJson);
      }).catch((error) => {
      reject(error);
    });
  });
  return promise;
};

export const getAllErrors = () => {
  let  headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
    // "Content-Type": "application/x-www-form-urlencoded",
  }
  let configParams = {
    headers: headers,
    method: 'GET'
  }
  // configParams.body =  JSON.stringify(parameters);
  const promise = new Promise((resolve, reject) => {
    fetch('http://34.73.59.87/api/users/get-all-errors', configParams)
      .then(response => response.json())
      .then((responseJson) => {
        resolve(responseJson);
      }).catch((error) => {
      reject(error);
    });
  });
  return promise;
};