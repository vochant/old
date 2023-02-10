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

function Load(fn)
{
	curact=fn;
	floader(fn+".els",ltep);
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

function Init()
{
	if(!checkLS())
	{
		document.getElementsByTagName("body")[0].innerHTML="<div class=\"mdui-container mdui-typo\"><h1 class=\"title mdui-text-color-theme\">配置错误!<br><small>浏览器不支持LocalStorage,请切换浏览器或者Fork并修改(不推荐,因为老旧的浏览器不支持的内容不一定仅仅是LocalStorage,还可能包括MaterialIcons等.)</small></h1><br><br><br><p class=\"mdui-typo-headline\">VOCHANTIA-LOAD-STATUS-ERROR code=0x00000001 detail=[LocalStorage is not supported]</p><br><br>对于这个错误,请尝试以下处理方法:<br><ul><li>更新浏览器</li><li>下载推荐的浏览器</li><li>Fork并删除有关于LocalStorage的内容(不推荐)</li></ul></div>";
		mdui.alert("<div class=\"mdui-typo\">浏览器不支持LocalStorage功能,网站无法激活,请使用现代的浏览器!<br><br>浏览器参考:<br><a href=\"https://www.google.cn/chrome/index.html\">Chrome</a>要求4.0+<br><a href=\"https://www.microsoft.com/zh-cn/edge\">Edge</a>任意版本<br><a href=\"https://zhuanlan.zhihu.com/p/367276658\">Edge Legacy</a>8.0+<br><a href=\"https://www.firefox.com.cn/\">Firefox</a>3.5+<br><a href=\"https://www.apple.com.cn/safari/\">Safari</a>3.5+<br><a href=\"https://www.microsoft.com/zh-cn/download/internet-explorer.aspx\">IE</a> 8.0+</div><br><br>或者Fork一个网站的副本自行修改移除激活功能.","错误");
	}
	else
	{
		Load("activity.main");
	}
}

Init();

var H111="<h1 class=\"title mdui-text-color-theme mdui-typo\">激活Vochantia<br><small>作为开源网站,不接受的可以Fork</small></h1><br><br><br><div class=\"mdui-typo\">由于该网站属于静态、单人开发、个人所有网站,没有任何设置内购的可能性。为了保证开发过程的顺利,同时提供一些作者日用,本网站于2023年2月7日起决定启用激活特性。本特性保证不会强制收费,但是如果希望规避收费请使用《用户协议》允许的手段,并且保证激活状态和激活方式私有。<br><br>如果希望使用此网站,并且接受激活,请单击以下按钮以继续完成激活流程。</div>";
