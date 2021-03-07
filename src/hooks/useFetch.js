const useFetch = endpoint => {
  const defaultHeader = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  const customFetch = (
    url,
    method = "GET",
    body = false,
    headers = defaultHeader
  ) => {
    const options = {
      method,
      headers
    };
    if (body) options.body = JSON.stringify(body);
    return fetch(url, options)
      .then(response => response.json())
      .catch(err => {
        throw new Error(err);
      });
  };

  const getAll = ()=>{
    const url = `${endpoint}`;
    return customFetch(url);
  }
  const get = id => {
    const url = `${endpoint}${id ? `/${id}` : ""}`;
    return customFetch(url);
  };
  const post = (body = false) => {
    if (!body) throw new Error("to make a post you must provide a     body");
    return customFetch(endpoint, "POST", body);
  };
  const put = (id = false, body = false) => {
    if (!id || !body)
      throw new Error("to make a put you must provide the id and the   body");
    const url = `${endpoint}/${id}`;
    return customFetch(url, "PATCH", body);
  };
  const del = (id = false) => {
    if (!id)
      throw new Error("to make a delete you must provide the id and the body");
    const url = `${endpoint}/${id}`;
    return customFetch(url, "DELETE");
  };
  return {
    get,
    post,
    put,
    del,
    getAll
  };
};
export default useFetch;