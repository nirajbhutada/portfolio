function isSecurity(chkFlag){
	if (chkFlag == "true") return true;
	if (chkFlag == "false") return false;
	return false;
}

function changeH1Class(){
	document.getElementById("blockMessage").className = "security";
}

function writeHeader(){
	if(isSecurity(securityFlag)){
		//document.write("Security risk blocked for your protection");

		document.write("Content blocked by your organization");
		changeH1Class();
	}
	else{
		//document.write("URL blocked by Organization Policy");
		document.write("Content blocked by your organization");
		changeH1Class();
	}
}

function writeReason(){
	if(isSecurity(securityFlag)){
		document.write("Sites in this category may pose a security threat to network resources or private information, and are blocked by your organization.");
	}
}

function writeWarning(){
	if(isSecurity(securityFlag)){
		document.write('<span class="warning">Not Recommended</span>');
	}
}

function writeWarning1(){
	if(isSecurity(securityFlag)){
		document.write('This action is not recommended.')
	}
}