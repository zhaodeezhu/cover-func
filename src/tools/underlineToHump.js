// 将下划线编程小驼峰
export default function underlineToHump(data) {
  if (Array.isArray(data)) {
    return data.map(item => {
      let obj = {}
      Object.keys(item).forEach(key => {
        let newKey = key.toLowerCase().replace(/\_(\w)/g, function (all, letter) {
          return letter.toUpperCase();
        })
        obj[newKey] = item[key]
      })
      item = obj
      return item
    })
  } else if (typeof data === 'object') {
    let obj = {}
    Object.keys(data).forEach(key => {
      let newKey = key.toLowerCase().replace(/\_(\w)/g, function (all, letter) {
        return letter.toUpperCase();
      })
      obj[newKey] = data[key]
    })
    return obj
  } else {
    return data.toLowerCase().replace(/\_(\w)/g, function (all, letter) {
      return letter.toUpperCase();
    })
  }
}