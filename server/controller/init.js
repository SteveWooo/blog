function reqe(req, res, next){
	res.resp = {
		code : 0,
		data : {},
		message : {}
	}
	next();
}

function resp(req, res){
	try{
		res.send(JSON.stringify(res.resp));
	}catch(e){
		console.log(e);
	}
}

module.exports = async(swc)=>{
	var router = { //只能在这里调用router
		content : require("./content"),
	}
	swc.app.get("/content", (req, res, next)=>{req.swc = swc;next()}, reqe, router.content, resp);

	return swc;
}