function solve(arr) {
    let i;
    let max = arr[0]
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]
      } else if (arr[i] < min) {
        min = arr[i]
      }
    }
    let res = (["min: " + min, "max: " + max])
    return res
  }
  
  console.log(solve([10,1000,1,59.10,120,33,4,-1,30]))