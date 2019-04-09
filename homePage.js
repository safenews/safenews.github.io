"use strict";			

//changes save button when clicked
function change1()
{
	var plus = '\u2606';
	var minus = '\u2605';

    var sb = document.getElementById("saveButton1");
    if ( sb.innerText == plus ) 
    	sb.innerText = minus;
    else 
    	sb.innerText = plus;
}

//changes save button when clicked
function change2()
{
	var plus = '\u2606';
	var minus = '\u2605';

    var sb = document.getElementById("saveButton2");
    if ( sb.innerText == plus ) 
    	sb.innerText = minus;
    else 
    	sb.innerText = plus;
}

//changes save button when clicked
function change3()
{
	var plus = '\u2606';
	var minus = '\u2605';
	
    var sb = document.getElementById("saveButton3");
    if ( sb.innerText == plus ) 
    	sb.innerText = minus;
    else 
    	sb.innerText = plus;
}

//changes save button when clicked
function change4()
{
	var plus = '\u2606';
	var minus = '\u2605';

    var sb = document.getElementById("saveButton4");
    if ( sb.innerText == plus ) 
    	sb.innerText = minus;
    else 
    	sb.innerText = plus;
}

//shows/hides navbar
function toggleNavBar()
{
	var menuButton = document.getElementById("mb");
	var buttonColor = menuButton.style.background;
	console.log( document.getElementById("mb").style.background );

	//buttonColor = 'red';

	if( buttonColor == 'white' )
	{
		console.log( "menu is hidden" );
		document.getElementById("nBar").style.display = 'block';
		document.getElementById("mb").style.background = "#6B6F77";
		document.getElementById("mb").style.color = "white";
	}
	else
	{
		console.log( "menu is shown" );
		document.getElementById("nBar").style.display = 'none';
		document.getElementById("mb").style.background = "white";
		document.getElementById("mb").style.color = "#6B6F77";
	}
}