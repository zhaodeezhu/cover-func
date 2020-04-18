export default function({data, val=[]}) {
  data.forEach(item => {
    val.push({
      ...item,
      children: []
    })
    if(item.children.length > 0) {
      this.readTree(item.children, val)
    }
  })
  return val
}
