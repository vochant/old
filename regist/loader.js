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
	}
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