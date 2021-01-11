function flat (arr) {
  let newArr = []
  arr.forEach(item => {
      if(Array.isArray(item)){
          newArr = newArr.concat(flat(item))
      } else {
          newArr.push(item)
      }
  })
  return newArr
}

console.log(flat([1,2,[3,4,5, [6,7,8,[9,10,11]]],12,13,14]))
