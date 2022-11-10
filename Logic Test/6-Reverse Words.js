// Create a function that receive input and will give output:

// Reverse each word of these:
function wordsReverser(str){
    return str.replace(/[a-zA-Z]+/gm, function(item) {    
          return item.split('').reverse().join('');
      });
  }
  
  console.log(wordsReverser("I am Great human"));