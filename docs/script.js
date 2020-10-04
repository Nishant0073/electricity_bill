
function get_ele_charges_per_unit(units)
{
	if(units<=100)
	{
		return(units*3.46);
	}
	else if(units>100 && units<=300)
	{
		return(units*7.73);
	}
	else if(units>300 && units<=500)
	{
		return(units*10.32);
	}
	else 
	{
		return(units*11.71);
	}
}

function get_vehical_size(units)
{
	return(units * 1.45);
}

function get_net_arrears(net_arrears)
{
	return((net_arrears*0.14)/100);
}

function find_bill(units)
{
	var total_bill=0,fixed_size=100,power_size=0,vehical_size=0,electricity_charges=0;current_electricity=0;
	var net_arrears=0;

	power_size=get_ele_charges_per_unit(units);
	console.log("power_size : " + power_size);

	vehical_size=get_vehical_size(units);
	console.log("vehical_size : " + vehical_size);

	electricity_charges=((fixed_size+power_size+vehical_size)*16)/100;
	console.log("electricity_charges : "+electricity_charges);

	current_electricity=(fixed_size+electricity_charges+vehical_size+power_size+net_arrears);
	console.log("current_electricity : "+current_electricity);

	net_arrears=prompt("Enter the Net arrears : ")

	if(net_arrears>0)
	{
		net_arrears= Number(net_arrears)+Number(get_net_arrears(net_arrears));
		console.log("net_arrears: " + net_arrears);
	}

	total_bill=Number(net_arrears)+Number(current_electricity);

	total_bill=parseFloat(total_bill).toFixed( 2 );

	return total_bill;

}
function bill()
{
var units;
units=Number(document.getElementById("units").value);

var ans=find_bill(units);

document.getElementById("answer").innerHTML= ("The Average Bill is Rs." + ans);
}

