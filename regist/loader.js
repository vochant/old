function actSelect()
{
	if(!window.localStorage.MACCodeGenerated)
	{
		for(i=0;i<4;i++)
		{
			window.localStorage["_mcode_"+i]=Random(lli[i])+"";
		}
		window.localStorage.MACCodeGenerated="true";
	}
	for(i=0;i<4;i++)
	{
		mcode[i]=Number(window.localStorage["_mcode_"+i]);
	}
	document.getElementById("maccode").innerHTML="您的机器编码:"+mcode[0]+"-"+mcode[1]+"-"+mcode[2]+"-"+mcode[3]+"<br>请复制或背诵此编码以方便后续的操作。";
}

function forOnlyPage()
{
	if(curact=="activity.select")
	{
		actSelect();
	}
}

function ltepEx(file_contents)
{
	document.getElementById("elementspath").innerHTML=file_contents;
	forOnlyPage();
}

function LoadEx(fn)
{
	curact=fn;
	floader(fn+".els",ltepEx);
}

function Init()
{
	if(checkLS())
	{
		if(window.localStorage.first_actived)
		{
			Load('activity.license')
		}
		else
		{
			Load("activity.main");
		}
	}
}

Init();

function UseNormal(_regn,_code)
{
	if(enCoder(_regn)==_code)
	{
		window.localStorage["_active_type"]="1";
		window.localStorage["_registname"]=_regn;
		window.localStorage["_codern"]=_code;
		window.localStorage.first_actived="true";
		return true;
	}
	return false;
}

function GenerateDevId()
{
    sid=Random(64);
    udid=Random(114514);
    window.localStorage["_dev_readme"]=Base64.encode(sid+"");
    for(i=0;i<64;i++)
    {
        if(i==sid)
        {
            window.localStorage["_dev_id"+i]=Base64.encode(udid+"");
        }
        else
        {
            window.localStorage["_dev_id"+i]=Base64.encode(Random(114514)+"");
        }
    }
}

function UseDev(_devid,_dcat,_didv)
{
    window.localStorage["_active_type"]=3+"";
    window.localStorage["_code_dev"]=BaseII(Base64.decode(_devid));
    window.localStorage[_dcat]=_didv;
	if(CheckDevA())
	{
		window.localStorage.first_actived="true";
	}
}

function UseAB(_r,_g,_c,_id,_codr)
{
    if(window.localStorage[ofns[0]])
    {
        for(i=0;i<5;i++)
        {
            window.localStorage[ofns[i]+"_backup"]=window.localStorage[ofns[i]];
        }
    }
    window.localStorage[ofns[0]]=_r+"";
    window.localStorage[ofns[1]]=_g+"";
    window.localStorage[ofns[2]]=_c+"";
    window.localStorage[ofns[3]]=_id+"";
    window.localStorage[ofns[4]]=_codr+"";
    if(CheckDRCode())
    {
        window.localStorage["_active_type"]="2";
		window.localStorage.first_actived="true";
        return true;
    }
    else
    {
        for(i=0;i<5;i++)
        {
            window.localStorage.removeItem(ofns[i]);
        }
        if(window.localStorage[ofns[0]+"_backup"])
        {
            for(i=0;i<5;i++)
            {
                window.localStorage[ofns[i]]=window.localStorage[ofns[i]+"_backup"];
                window.localStorage.removeItem(ofns[i]+"_backup");
            }
        }
        return false;
    }
}

function CheckAct()
{
	if(window.localStorage["_active_type"])
	{
		if(window.localStorage["_active_type"]=='1')
		{
			if(CheckUserCode())
			{
				mdui.alert("当前激活方式: 普通激活码激活(1)<br>当前激活状态: 已激活,点<a href=\"../\">我</a>前往主页。<br>当前机器编码:"+mcode[0]+"-"+mcode[1]+"-"+mcode[2]+"-"+mcode[3]+"<br>当前注册用户:"+window.localStorage["_registname"]+"<br>当前激活码:"+window.localStorage["_codern"]);
			}
			else
			{
				mdui.alert("当前激活方式: 普通激活码激活(1)<br>当前激活状态: 激活失败");
			}
		}
		else if(window.localStorage["_active_type"]=='2')
		{
			if(CheckDRCode())
			{
				mdui.alert("当前激活方式: 学生免费激活(2)<br>当前激活状态: 已激活,点<a href=\"../\">我</a>前往主页。<br>当前机器编码:"+mcode[0]+"-"+mcode[1]+"-"+mcode[2]+"-"+mcode[3]+"<br>您提供的信息:<br>-"+window.localStorage["_fact_repo"]+"<br>-"+window.localStorage["_fact_lev"]+"<br>-"+window.localStorage["_fact_br"]+"<br>-"+window.localStorage["_fact_ide"]+"<br>当前激活码:"+window.localStorage["_fact_md5"]);
			}
			else
			{
				mdui.alert("当前激活方式: 学生免费激活(2)<br>当前激活状态: 激活失败");
			}
		}
		else if(window.localStorage["_active_type"]=='3')
		{
			if(CheckDevA())
			{
				mdui.alert("当前激活方式: 开发者激活(3)<br>当前激活状态: 已激活,点<a href=\"../\">我</a>前往主页。<br>当前位移:"+sid+"<br>当前基本值:"+udid+"<br>当前varA:"+BaseII(udid+"")+"<br>当前varB.location:"+ucat+"<br>当前varB:"+Base64.decode(ucat));
			}
			else
			{
				mdui.alert("当前激活方式: 开发者激活(3)<br>当前激活状态: 激活失败");
			}
		}
		else
		{
			mdui.alert("当前激活方式: 未知("+window.localStorage["_active_type"]+")<br>当前激活状态: 激活失败");
		}
	}
	else
	{
		mdui.alert("当前激活方式: 空(null)<br>当前激活状态: 激活失败");
	}
}

function faA()
{
	if(UseNormal(document.getElementById("un").value,document.getElementById("cod").value))
	{
		Load("activity.done");
	}
}

function faB()
{
	if(UseAB(document.getElementById("shk").value,document.getElementById("gra").value,document.getElementById("cls").value,document.getElementById("sid").value,document.getElementById("spe").value))
	{
		Load("activity.done");
	}
}

function DebugJS()
{
	function(document.getElementById("js").value);
}

function NoActive()
{
	window.localStorage.removeItem("_active_type");
}
