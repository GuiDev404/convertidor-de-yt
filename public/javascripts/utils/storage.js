const setStorage = (key, value)=> window.localStorage.setItem(key, JSON.stringify(value));
const getStorage = (key)=> JSON.parse(window.localStorage.getItem(key));

export { 
  setStorage,
  getStorage
}