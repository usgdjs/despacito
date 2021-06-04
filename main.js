function myfunction(){
var first_name="Krish";
var last_name="Chhibber";
var full_name= first_name.concat(last_name);
var a=7;
var b=8;
var c=a+b;
console.log(c);
console.log(full_name)}

function myfunction2(){
    var retVal = confirm("Do you want to continue ?");
               if( retVal == true ) {
                console.log("User wants to continue!");
                  return true;
               } else {
                  console.log("User does not want to continue!");
                  return false;
               }

}