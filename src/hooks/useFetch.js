import { useCallback, useMemo, useState } from 'react';
import youtubeApi from '../services/youtube';

const useFetch = () => {
   const state = useMemo(
      () => ({
         INITIAL_REQUEST_PROPS: {
            loading: false,
            data: [],
            success: false,
            error: null,
         },
         INITIAL_PARAMS: {
            url: '',
            params: {},
            headers: {},
         },
         INITIAL_MESSAGES: {
            success: 'Reaquisição realizada com sucesso!',
            error: 'Erro ao realizar a requisição',
         },
      }),
      []
   );
   const { INITIAL_MESSAGES, INITIAL_REQUEST_PROPS, INITIAL_PARAMS } = state;
   const [fetchOptions, setFetchOptions] = useState(INITIAL_REQUEST_PROPS);

   const get = useCallback(
      async (params = INITIAL_PARAMS) => {
         setFetchOptions({
            ...fetchOptions,
            loading: true,
         });
         try {
            const { data } = await youtubeApi.get(params.url, {
               params: { ...params.params },
               headers: { ...params.headers },
            });
            setFetchOptions({
               ...fetchOptions,
               data,
            });
            return data;
         } catch (error) {
            console.error('Erro:', error);
            setFetchOptions({
               ...fetchOptions,
               error: error || null,
            });
            throw new Error(INITIAL_MESSAGES.error);
         }
      },
      [youtubeApi, INITIAL_PARAMS, INITIAL_MESSAGES]
   );

   return { get, fetchOptions };
};
export default useFetch;
