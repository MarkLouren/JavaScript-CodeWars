// wave("hello") => []string{"Hello", "hEllo", "heLlo", "helLo", "hellO"}

// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

// My Solution:

function wave(word) {
   let lower = word.toLowerCase()
   let new_array = lower.split('').map(String);
   let finish_word, upper;
   let wave_new = [];
   
    for ( let i=0; i<new_array.length; i++){
       if (new_array[i] == ' ') {
          continue;
      }
        upper = new_array[i].toUpperCase();
        finish_word = (Object.assign([], new_array, {[i]: upper})).join('');
        wave_new.push(finish_word);  
       ;
    }
   
   return(wave_new);
}

// Other solution Via String:

function wave(str){
    let result = [];
    
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
}
//   Clear Solution
const wave = s => Array.from( s, (_,i) => /\s/.test(s[i]) ? null : s.slice(0,i) + s[i].toUpperCase() + s.slice(i+1) ).filter(Boolean) ;

// Other:

function wave(s){
  // Code here
  let w=[]
  for(let i=0;i<s.length;i++){
    w.push(s.substring(0,i)+s.charAt(i).toUpperCase()+s.slice(i+1))

  }
  return w.filter(x=>x!=s);
}
