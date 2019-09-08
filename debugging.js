/*
	DEBUGGING ( In Chrome via OSX )
	1. CMD+OPTION+i to inspect elements
	2. Sources - list of files
	3. Console - interface to input commands
		a. debugger will stop the script
	4. Use console.log() - console.log(i);
*/

function hello(name) {
  let phrase = `Hello, ${name}!`;

  // debugger;  // <-- the debugger stops here

  say(phrase);
}