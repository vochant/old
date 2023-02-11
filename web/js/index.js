var $=mdui.$;

var curact="void";

function ltep(file_contents)
{
	document.getElementById("elementspath").innerHTML=file_contents;
}

function floader(filename,func)
{
	let xhr=new XMLHttpRequest();
	xhr.open('GET',filename,true);
	xhr.send();
	xhr.onreadystatechange=function(){
		if (xhr.readyState==4&&xhr.status==200)
		{
			func(xhr.responseText);
		}
	};
}

function Random(iLimit)
{
	return Math.floor(Math.random()*(iLimit+1));
}

var lli=[1145,4514,1411,1919],mcode=new Array();

function Load(fn)
{
	curact=fn;
	floader(fn+".els",ltep);
	forOnlyPage();
}

function isLocalStorageSupported()
{
	if(window.localStorage)
	{
		return true;
	}
	else
	{
		return false;
	}
}

var lsst=114514;

function checkLS()
{
	if(lsst==114||lsst==514)
	{
		if(lsst==114)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	if(isLocalStorageSupported())
	{
		lsst=114;
		return true;
	}
	else
	{
		lsst=514;
		return false;
	}
}

function BaseII(_text)
{
	return Base64.encode(Base64.encodeURI(_text));
}

var els=new Array();

var elsSetup=false;

var ret="",rid,cid;

function enCoder(_text)
{
	_text=Base64.encode(_text);
	ret="";
	rid=new Array(mcode[0],mcode[1],mcode[2],mcode[3]);
	if(!elsSetup)
	{
		elsSetup=true;
		floader("jsdef.wli",function(_Text){
			els=_Text.split('\n');
		});
	}
	for(i=0;i<_text.length;i++)
	{
		for(j=0;j<65;j++)
		{
			if(els[65][j]==_text[i])
			{
				cid=j;
				break;
			}
		}
		if(cid==64)
		{
			ret+='=';
		}
		else
		{
			ret+=els[(cid+(rid[i%4]%1145141))%64];
			rid[i%4]*=1009;
			rid[i%4]%=19198111;
		}
	}
	while(ret.length%4>0)
	{
		ret="x"+ret;
	}
	return ret;
}

var Actype;
var udid=-1,sid,ucat;

function CheckDevA()
{
    if(!window.localStorage["_dev_readme"])
    {
        console.error("\nDevelopment Activition Manager 1.00\n\nE: DevelopmentID is not generated.\ncode: 0x00000001\ndetail: KEY_NOT_FOUND_A\n\nRecommend solutions:\n*Run GenerateDevId()\n*Add code mapping with yourself");
        return false;
    }
    sid=Number(Base64.decode(window.localStorage["_dev_readme"]));
    if(!window.localStorage["_dev_id"+sid])
    {
        console.error("\nDevelopment Activition Manager 1.00\n\nE: DevelopmentCode is not found.\ncode: 0x00000002\ndetail: KEY_NOT_FOUND_B\n\nRecommend solutions:\n*Run GenerateDevId() to re-generate\n*Repair LocalStorage Keys");
        return false;
    }
    udid=Number(Base64.decode(window.localStorage["_dev_id"+sid]));
    if(!window.localStorage["_code_dev"])
    {
        console.error("\nDevelopment Activition Manager 1.00\n\nE: User code is not found.\ncode: 0x00000003\ndetail: KEY_NOT_FOUND_C\n\nRecommend solutions:\n*Run UseDev() to regist codes\n*Add a key-value-set with yourself");
        return false;
    }
    if(BaseII(udid+"")!=window.localStorage["_code_dev"])
    {
        console.log("\nDevelopment Activition Manager 1.00\n\nYour '_devid' is wrong!\nSo you can't active with DEV.");
        return false;
    }
    ucat=BaseII(BaseII(udid+"")+sid);
    if(!window.localStorage[ucat])
    {
        console.warn("\nDevelopment Activition Manager 1.00\n\nW: UCAT not found.\nDo you already seted it?\nOr seted it with a wrong value?");
        return false;
    }
    if(window.localStorage[ucat]!=Base64.decode(ucat))
    {
        console.log("\nDevelopment Activition Manager 1.00\n\nYour '_didv' is wrong!\nSo you can't active with DEV.");
        return false;
    }
    return true;
}

function Reverse(str)
{
    return str.split('').reverse().join('');
}

function getix(_Itex)
{
    return Base64.encode(Reverse(Base64.encodeURI(_Itex+Reverse(_Itex))));
}

function getDix(_a,_b)
{
    return getix(BaseII(Reverse(_a))+Reverse(BaseII(_b)));
}

function iBasec(_r,_g,_c,_id)
{
    return getDix("<isys><a>"+getDix(_r,_g)+"</a>","<b>"+getDix(_c,_id)+"</b></isys>");
}

var ofarr=new Array(),ofns=["_fact_repo","_fact_lev","_fact_br","_fact_ide","_fact_md5"];

function rawCodeB()
{
    for(i=0;i<4;i++)
    {
        ofarr[i]=window.localStorage[ofns[i]];
    }
    return iBasec(ofarr[0]+mcode[0],ofarr[1]+mcode[1],ofarr[2]+mcode[2],ofarr[3]+mcode[3]);
}

function iMD5A()
{
    return md5(rawCodeB());
}

function iPMCB()
{
    return md5(iBasec(mcode[3]+"",mcode[0]+"",mcode[2]+"",mcode[1]+""));
}

function DoubleMD5()
{
    return md5(getDix(iMD5A(),iPMCB()));
}

function CheckDRCode()
{
    return DoubleMD5()==window.localStorage[ofns[4]];
}

function CheckUserCode()
{
    return window.localStorage["_codern"]==enCoder(window.localStorage["_registname"]);
}

function GetActive()
{
    if(checkLS())
    {
        if(!window.localStorage["_active_type"])
        {
            return false;
        }
        Actype=window.localStorage["_active_type"];
        if(Actype=="1")
        {
            return CheckUserCode();
        }
        if(Actype=="2")
        {
            return CheckDRCode();
        }
        if(Actype=="3")
        {
            return CheckDevA();
        }
        return false;
    }
    return true;
}

function checkDir(fmatc)
{
    if(GetActive())
    {
        return;
    }
    if(fmatc=="nreq")
    {
        return;
    }
    window.location.href=fmatc;
}

function uniInit()
{
	if(!checkLS())
	{
		document.getElementsByTagName("body")[0].innerHTML="<div class=\"mdui-container mdui-typo\"><h1 class=\"title mdui-text-color-theme\">配置错误!<br><small>浏览器不支持LocalStorage,请切换浏览器或者Fork并修改(不推荐,因为老旧的浏览器不支持的内容不一定仅仅是LocalStorage,还可能包括MaterialIcons等.)</small></h1><br><br><br><p class=\"mdui-typo-headline\">VOCHANTIA-LOAD-STATUS-ERROR code=0x00000001 detail=[LocalStorage is not supported]</p><br><br>对于这个错误,请尝试以下处理方法:<br><ul><li>更新浏览器</li><li>下载推荐的浏览器</li><li>Fork并删除有关于LocalStorage的内容(不推荐)</li></ul></div>";
		mdui.alert("<div class=\"mdui-typo\">浏览器不支持LocalStorage功能,网站无法激活,请使用现代的浏览器!<br><br>浏览器参考:<br><a href=\"https://www.google.cn/chrome/index.html\">Chrome</a>要求4.0+<br><a href=\"https://www.microsoft.com/zh-cn/edge\">Edge</a>任意版本<br><a href=\"https://zhuanlan.zhihu.com/p/367276658\">Edge Legacy</a>8.0+<br><a href=\"https://www.firefox.com.cn/\">Firefox</a>3.5+<br><a href=\"https://www.apple.com.cn/safari/\">Safari</a>3.5+<br><a href=\"https://www.microsoft.com/zh-cn/download/internet-explorer.aspx\">IE</a> 8.0+</div><br><br>或者Fork一个网站的副本自行修改移除激活功能.","错误");
	}
    floader("index.dmi",checkDir);
}

uniInit();