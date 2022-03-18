import axios from 'axios'
import { GetStaticProps } from 'next'

let axiosConfig = { headers: {"Content-Type": "application/json"}};

interface Comp {
    id: number;
    class_attr: string;
}

export const getFragments: GetStaticProps = async() => {
  const response = axios
    .get(`http://localhost:5000/fragments`)
    .then((result) => {
      result.data.sort(function (a: Comp, b: Comp) {
        return a.id - b.id || a.class_attr.localeCompare(b.class_attr);
      });
      let list = result.data
      return{
        
        props: {
          list
        }
      };
    });
  return response;
}

export async function getFragmentById(id: string) {
  const url = `http://localhost:5000/fragments/` + id;
  const response = await axios.get(url).then((apiResponse) => {
    return apiResponse;
  });
  return response;
}

export async function createFragment(data: object) {
  const url = `http://localhost:5000/fragments`;
  const response = await axios.post(url, data, axiosConfig).then((result) => {
    console.log(result);
    return result;
  });
  return response;
}

export async function editFragment(id: string, data: object) {
  const url = `http://localhost:5000/fragments/` + id;
  const response = await axios.put(url, data, axiosConfig).then((result) => {
    return result;
  });
  return response;
}

export async function deleteFragment(id: string) {
  const url = `http://localhost:5000/fragments/` + id;
  const response = axios.delete(url).then((result) => {
    return result;
  });
  return response;
}
