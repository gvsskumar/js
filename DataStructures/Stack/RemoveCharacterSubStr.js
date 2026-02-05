//Given a String, removing substring characters.
/* 
Input: str1 = "Venkatakumar" , str2 = "mask";
Output: Ventur
*/

function getcountarray(str2)
{
    var count = new Array(256).fill(0);
    
    for (var i = 0; i < str2.length; i++)
    {
        count[str2.charCodeAt(i)]++;
    }
   
    return count;
}
function removeDirtyChars(str1, str2)
{
    // str2 is the string
    // which is to be removed
    var count = getcountarray(str2);
    var res ="";
       
    // ip_idx helps to keep
    // track of the first string
    var index = 0;
  
    while (index < str1.length)
    {
        var temp = str1[index];
        if (count[temp.charCodeAt(0)] == 0)
        {
            res = res.concat(temp);
        }
        index++;
    }
     
    return res;
}
  
// Driver Code
var mask_string = "mask";
var string = "Venkatakumar";
console.log(removeDirtyChars(string, mask_string));