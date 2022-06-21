

	var i = 1;
var j= -1;
function txt1(){
	var titleList = ['Subodh Khadka'];
	var a=titleList[0];
	var len = titleList.length;
	var num = 0;
	var strs = a.slice(0,i);

	$("#texttitle").html(strs +'|');

	if(i >= 0)
	{
		if (i != a.length)
			{
				i++;
			}
		else
			{
				i = -1;}
	}
	else
	{
		if(-1*i != a.length)
			{
				i--;
			}
		else
			{
				i=1;
				var flag = ret_index(a);
				a = titleList[flag];
			}


	}



}
function ret_index(a){
	var index = titleList.indexOf(a);
	if (index!= (len-1))
		{return (index+1);}
	else
		{return 0;}

}


setInterval(txt1,170);