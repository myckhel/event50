import Http from '../Http';

export default request = (route, data = null, method = 'get') => {
  return new Promise(async function(resolve, reject) {
    try {
      const params = data ? ((method === 'post' || method === 'put')
      ? {...data}
      : {params: {...data}}) : null
      // console.log(data);
      // const params = data ? ((method === 'post' || method === 'put') ? data : {params: {...data}}) : null
      const res = await Http[method](route, params)
      console.log(res);
      resolve(res.data)
    } catch (e) {
      console.log({e});
      reject(e)
    }
  });
}
