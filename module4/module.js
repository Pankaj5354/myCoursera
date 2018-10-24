
function greeting(){
	var name=["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for(var i=0;i< name.length;i++){
	if(name[i].toLowerCase().charAt(0)=='j'){
		console.log("Good Bye",name[i]);

	}
	else{
		console.log("Hello",name[i]);
	}
 }
}
greeting();
