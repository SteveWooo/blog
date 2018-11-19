const config = require('./config');
async function main(){
	try{
		var swc = await require("./server/init")(config);
	}catch(e){
		console.log(e);
	}
}
main();