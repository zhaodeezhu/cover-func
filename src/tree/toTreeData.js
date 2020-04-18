export default function({data, pid, idKey='id', pidKey='pid'}) {
  let result = []
  let temp = []
  for (let i = 0; i < data.length; i++) {
    if(data[i]){
      if (data[i][pidKey] == pid) {
        temp = this.toTreeData({data, pid:data[i][idKey], idKey, pidKey})
        if (temp.length > 0) {
           data[i].children = temp
        } else {
          data[i].children = []
        }
        result.push(data[i])
      }
    }    
  }
  return result
}