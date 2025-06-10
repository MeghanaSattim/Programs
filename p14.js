var num=153;
 var sum=0;
 while(num>0)
 {  
 var rem=num%10;
 var cube=rem**3;
 sum=sum+cube;
 num=Math.floor(num/10);
 }
 console.log(sum);

