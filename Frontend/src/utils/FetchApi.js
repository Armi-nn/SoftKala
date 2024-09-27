const fetchApi = async (url, option = {}) => {
  try {
    const res = await fetch(url, option);
    const data = await res.json();
    return data;
  } catch (err) {
    alert(err)
  }
};

export default fetchApi