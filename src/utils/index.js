const getLocal = (key) => {
  const data = localStorage.getItem(key);
  return data;
};

const setLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export { getLocal, setLocal };
