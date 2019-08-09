/* CAT: https://www.codewars.com/kata/55c45be3b2079eccff00010f
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

*/ 

// My Solution:
function order(words){
    var i, regex, find, result, final;
    var arr=[];
    if (words=="") {
    return ("");
    };
    for (i=1; i<=9; i++){
    regex = "\\b(\\w*["+i+"]\\w*)\\b";
    find=new RegExp(regex);
    result=find.exec(words);
        if (result !== undefined && result != null){
        arr.push(result[0]);
                
        } else {continue};
        final=arr.join(" ");
    }
  
    return (final);
};
