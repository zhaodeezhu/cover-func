export default function queryString(queryParse) {
  let querystring = ''
  Object.keys(queryParse).forEach((key, index) => {
    if(index !== 0) {
      querystring += '&'
    }
    querystring += `${key}=${queryParse[key]}`
  })
  return querystring;
}