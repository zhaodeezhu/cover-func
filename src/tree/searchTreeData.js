export default function ({data, key, value}) {
  let searchData = null
  let flag = false
  search(data)
  function search(treeData) {
    if(!treeData) {
      return false
    }
    for(let i = 0; i < treeData.length; i++) {
      if(flag) {
        break;
      }
      if(treeData[i][key] === value) {
        searchData = treeData[i]
        flag = true
      } else {
        search(treeData[i].children)
      }
    }
    return true
  }
  return searchData
}