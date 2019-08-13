// CATA: https://www.codewars.com/kata/5904be220881cb68be00007d

// My Solution:

function fish(shoal){
  let mysize=1;
  let total=0;
// let fish_array = shoal.split('').map(function(x){return Number(x)}).sort();
  let fish_array = shoal.split('').map(Number).sort();
  fish_array.forEach(function(fish_size){

    if (mysize>=fish_size){
      total+=fish_size;
      if (total>=mysize*4){
        total-= mysize*4;
        mysize++;
      }
    }
  });
return (mysize);
}

//Other solution
