document.addEventListener("DOMContentLoaded", function() {
  
  let array = [1,2,4,'12','vasa']


  //FOREACH
  function each(array,callback){
    for(let el of array){
      callback(el)
    }
    
  }
  each([1,2,4,'12','vasa'], el=>console.log(el))
  each([])
  each([{key:1},{key:2}], el=>console.log(el))





  //FININDEX

  function find(array, callback, key){
    for(let el in array){
      let ret = callback(el)
      if(ret != -1) return ret; 
    }
    return -1;
  }

  console.log(find(array, el=>array[el] === 5 ? el : -1)); 
  



  //FILTER

  function filt(array, callback){
    let tempArr =[]
    for(let el of array){
      let check = callback(el)
      check == true ? tempArr.push(el) : null
    }
    return tempArr
  }

  console.log(filt(array, el=> el == 2 ? true : false)); 
  console.log(filt([1,2,3,4,5,6,6,2,2,2,2,1,1,2,21,], el=> el >= 2 ? true : false)); 
  console.log(filt([1,2,3,4,5,6,6,2,2,2,2,1,1,2,21,], el=> el <= 0 ? true : false)); 



});
