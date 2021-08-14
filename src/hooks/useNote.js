import axios from "axios";
axios.defaults.baseURL = location.protocol + '//' + location.hostname + ':' + 3001;

export default function () {
  const post = (data) => {
    axios.post("/api/notes", data).then((res) => {
      console.log(res);
    });
  };

  const update = (id, data) => {
    axios.put("/api/notes/" + id, data).then((res) => {
      console.log(res);
    });
  };

  const remove = (id) => {
    axios.delete("/api/notes/" + id).then((res) => {
      console.log(res);
    });
  };

  const getByID = (id) => {
    return axios.get("/api/notes/" + id);
  };

  const getAll = () => {
    return axios.get("/api/notes").then(notes => {
        return Promise.resolve(notes.data);
    });
  };

  return { post, update, remove, getByID, getAll };
}