var num=7;
var isprime=true;
for(var i=2;i<num;i++)
{
    if(num%2==0)
    {
        isprime=false;
        break;
    }
}
if(isprime==true)
{
  console.log("The number is prime");
}
else
{
    console.log("The number is not prime");
}