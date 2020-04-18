/** 解析query字符串 */
export default function queryParse(url) {
  let originUrl = decodeURI(url);
  let queryString = originUrl.split('?')[1]
  let queryArrBaseArr = queryString ? queryString.split('&') : [];
  let qyery = {}  
  queryArrBaseArr.forEach(item => {
    let mid = item.split('=')
    qyery[mid[0]] = mid[1]
  })
  return qyery;
}