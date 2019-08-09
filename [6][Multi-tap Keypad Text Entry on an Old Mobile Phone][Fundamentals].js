/* CAT: https://www.codewars.com/kata/54a2e93b22d236498400134b
*/ 

// My Solution

function presses(phrase) {
var phrase, number=0, arr, i;

phrase=phrase.toLowerCase();
arr=phrase.split('');
var obj = { 'a':1, '1':1, 'b':2, 'c':3, '2':4, 'd':1, 'e':2,'f':3, '3':4, 'g':1, 'h':2, 'i':3, '4':4, 'j':1, 'k':2, 'l':3, '5':4, 'm':1, 'n':2, 'o':3, '6':4, 'p':1, 'q':2, 'r':3, 's':4, '7':5, 't':1, 'u':2, 'v':3, '8':4, 'w':1, 'x':2, 'y':3, 'z':4, '9':5, ' ':1, '0':2};
    
    
    for (i in arr) 
        {
            if (arr[i] in obj){
                number=number+obj[arr[i]];
            }
           
        }
   
    return (number);
}
