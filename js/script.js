function izracunaj()
{
	select = document.getElementById('apts').value;
	br_noci = document.getElementById('brnoc').value;
	popust = document.getElementById('popus').value;
	datum = document.getElementById('datum').value;
	ukupnacena = select * br_noci;

	if(popust === "singidunum")
	{
		ukupnacena = ukupnacena - (ukupnacena * 0.2);
	}


	document.getElementById('ukupnacena').innerHTML = ukupnacena + " eur";
}

function check()
{	
		alert("Uspešno ste rezervisali smeštaj!");
}
