process.stdin.on('data',function(data){
	var cad=data.toString().split(" ");
	var resp="";
	cad[cad.length-1]=cad[cad.length-1].substring(0,cad[cad.length-1].length-1);
	for(var i=0; i<cad.length; i++)
	{
		if(i%2==0)
		{
			var palabra="";
			for(var j=cad[i].length-1; j>=0; j--)
			{
				palabra=palabra+cad[i].charAt(j);
			}
			cad[i]=palabra;
		}
	}
	for(var i=0; i<cad.length-1; i++)
	{
		resp=resp+cad[i]+" ";
	}
	resp=resp+cad[cad.length-1];
	console.log(resp);
	process.exit();
});
