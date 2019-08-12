// Cat https://www.codewars.com/kata/58d76854024c72c3e20000de/
// ex: est.assertEquals(reverse("Reverse this string, please!"), "Reverse siht string, !esaelp")

// My not optimal solution, without REVERSE method

function reverse(str) {
  let new_arr =[];
  let finalstr;
  let newstr = str.trim().split(' ');
    newstr.forEach(function (i, b) {
      if (b % 2 == 0) {
        new_arr.push(i);

      } else {
        new_arr.push(reverseString(i));
      }
    });

    finalstr = new_arr.join(" ");

    function reverseString(str) {
      let revString = "";
      str.split("").forEach(char => revString = char + revString);
      return revString;
    }

    return (finalstr);

}
// OTHER Solutions:

function reverse(str){
  return str.split(` `).map((it, index) => {
    return index%2 !== 0 ? it.split(``).reverse().join(``) : it
  }).join(` `).trim();
}

//// OTHER:

function reverse(str){
  let arr = str.split(" "); 
  for(var i = 1; i<arr.length; i+=2){
      arr[i] = arr[i].split('').reverse().join(""); 
  }
  return arr.join(" ").trim(); 
  
}
// SHORT:
const reverse=str=>str.trim().split(' ').map((e,i)=> i%2==0 ? e : e.split('').reverse().join('')).join(' ');
