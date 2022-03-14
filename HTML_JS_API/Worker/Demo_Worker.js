var iDemo_Worker = 0;

function Demo_Worker_Counting() { 
	iDemo_Worker += 1; 
	postMessage(iDemo_Worker); 
	setTimeout("Demo_Worker_Counting()", 500); 
}

Demo_Worker_Counting();
