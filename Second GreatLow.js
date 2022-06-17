Second GreatLow

function SecondGreatLow(arr) { 

    if (arr.length === 2) {
          arr.sort(function(a,b) {return a - b});
          return arr[1] + " " + arr[0];
     }
      
    var uniqueArray = arr.filter(function(item, pos) {
      return arr.indexOf(item) == pos;
    });
      
    if (uniqueArray.length > 2) {
      uniqueArray.sort(function(a, b){return a-b});
       return uniqueArray[1] + " " + uniqueArray[uniqueArray.length - 2]; 
    }
    else {
      return uniqueArray[1] + " " + uniqueArray[0];
    }
           
  }




  function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));
