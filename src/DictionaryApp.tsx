import { useCallback, useEffect, useState } from 'react';
import { dictionaryApi } from './api/dictionaryApi';
import { DictionaryResponse } from './interfaces/interfaces';
import { AxiosResponse } from 'axios';

export const DictionaryApp = () => {
	const [data, setData] = useState<DictionaryResponse>();
	const fetchData = useCallback(async () => {
		const response: AxiosResponse<DictionaryResponse, []> = await dictionaryApi.get('/dog');
		setData(response.data);
	}, []);
	useEffect(() => {
		fetchData();
	}, [fetchData]);
  if(!data){
    return <>Loading...</>
  }
	return <div>
    {JSON.stringify(data,null,2)}
  </div>;
};
