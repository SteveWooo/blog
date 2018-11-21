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
		image_upload : require("./image_upload")
	}
	swc.app.get("/v1/content", (req, res, next)=>{req.swc = swc;next()}, reqe, router.content, resp);
	swc.app.post("/v1/image_upload", (req, res, next)=>{req.swc = swc;next()}, reqe, router.image_upload, resp);

	return swc;
}