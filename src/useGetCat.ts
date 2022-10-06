import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetCat = () => {
  const { data, refetch, isLoading } = useQuery(['catFact'], async () => {
    return await axios.get('https://catfact.ninja/fact').then(res => res.data);
  });

  const refetchData = () => {
    alert('data reftech');
    refetch();
  };
  return { data, refetchData, isLoading };
};
