import axios from 'axios';

export const GET = (url: string) => {
  return axios.get(url).then(res => res.data);
};
