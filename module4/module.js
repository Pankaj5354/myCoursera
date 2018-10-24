
function greeting(){
	var name=["pankaj","junil","amit","january"];
for(var i=0;i< name.length;i++){
	if(name[i].toLowerCase().charAt(0)=='j'){
		console.log("Goodbye",name[i]);

	}
	else{
		console.log("Hello",name[i]);
	}
 }
}
greeting();
