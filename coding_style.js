/*
	CODING STYLE
	Task:
	1. What’s wrong with the code style below?

	function pow(x,n)
	{
	  let result=1;
	  for(let i=0;i<n;i++) {result*=x;}
	  return result;
	}

	let x=prompt("x?",''), n=prompt("n?",'')
	if (n<=0)
	{
	  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
	}
	else
	{
	  alert(pow(x,n))
	}
*/

function pow( x, n ){

  let result=1;

  for( let i = 0; i < n; i++ ){

  	result *= x;
  }

  return result;
}

let x = prompt( "Enter value for x:", '' );
let n = prompt( "Enter value for n:", '' );

if ( n < 0 ){
  alert(`Power ${n} is not supported, 
  	please enter an integer number 
  	greater than zero`);
}
else{

  alert(pow(x,n));
}





