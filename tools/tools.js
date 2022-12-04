function message(s){
	mdui.snackbar({message:s,position:'bottom'});
}

function copy(str){
	const text_area=document.createElement('textarea');
	document.body.appendChild(text_area);
	text_area.setAttribute('id','copier');
	document.getElementById('copier').value=str;
	text_area.select();
	document.execCommand('copy');
	document.body.removeChild(text_area);
	message('内容已复制到剪贴板');
}

function isnumber(x)
{
	return (/(^[1-9]\d*$)/.test(x));
}

function checkprime()
{
	var x=document.getElementById('checkprimeval1').value;
	if(!isnumber(x)){
		document.getElementById("checkprime_result").innerHTML="<font style='color: red;'>&nbsp;&nbsp;\""+x+"\" 不是合法的数.</font>";
		return;
	}
	var x1=Number(x),x2=Math.sqrt(x1),flag=true;
	for(var i=2;i<=x2&&flag;i++)
		if(x1%i==0)flag=false;
	if(flag&&x1>=2)document.getElementById("checkprime_result").innerHTML="<font style='color: green;'>&nbsp;&nbsp;"+x1+" 是质数.</font>";
	else document.getElementById("checkprime_result").innerHTML="<font style='color:red;'>&nbsp;&nbsp;"+x1+" 不是质数.</font>";
}

function randomstring()
{
	var len=document.getElementById('randomstringval1').value;
	var charSet=document.getElementById('randomstringval2').value;
	if(!isnumber(len))
    {
		document.getElementById("randomstring_result").innerHTML="<font style='color: red;'>&nbsp;&nbsp;\""+len+"\" 不是合法的数.</font>";
		return;
	}
	if(charSet==""){
		document.getElementById("randomstring_result").innerHTML="<font style='color: red;'>&nbsp;&nbsp;字符集为空.</font>";
		return;
	}
	var str="",charnum=charSet.length;
	for(var i=1;i<=Number(len);i++)
		str=str+charSet[parseInt(Math.random()*charnum)];
    document.getElementById("randomstring_result").innerHTML="&nbsp;&nbsp;"+str;
	if(copy(str)) message('内容已复制到剪贴板');
}

function randomstring_reset()
{
	var x=document.getElementById('randomstringtmp1').value;
	if(x=="1"){
		document.getElementById('randomstringval1').value="16";
		document.getElementById('randomstringval2').value="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678901234567890123456789~!@#$%^&*()_+{}|:\"<>?`-=[]\;',./";
	}
	if(x=="2"){
		document.getElementById('randomstringval1').value="32";
		document.getElementById('randomstringval2').value="0123456789abcdef";
	}
	if(x=="3"){
		document.getElementById('randomstringval1').value="4";
		document.getElementById('randomstringval2').value="0123456789abcdefghijklmnopqrstuvwxyz";
	}
    if(x=="4"){
		document.getElementById('randomstringval1').value="64";
		document.getElementById('randomstringval2').value="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/=";
	}
    if(x=="5"){
		document.getElementById('randomstringval1').value="64";
		document.getElementById('randomstringval2').value="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=";
	}
    if(x=="6"){
		document.getElementById('randomstringval1').value="64";
		document.getElementById('randomstringval2').value="0123456789ABCDEFGHIJKLMNOPQRSTUV=";
	}
	mdui.updateTextFields();
}