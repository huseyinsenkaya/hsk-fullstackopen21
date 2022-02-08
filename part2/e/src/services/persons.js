import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (personObj) => {
  const request = axios.post(baseUrl, personObj);
  return request.then((response) => response.data);
};

const deleteService = (personObj) => {
  const deleteUrl = `${baseUrl}/${personObj.id}`;
  const request = axios.delete(deleteUrl, { id: personObj.id });
  return request.then((response) => response.config.id);
};

const update = (personObj) => {
  const request = axios.put(`${baseUrl}/${personObj.id}`, personObj);
  return request.then((response) => response.data);
};

export default { getAll, create, deleteService, update };
