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
		client : {
			content : require("./client/content"),
			router : require("./client/router")
		},

		admin : {
			content_update : require("./admin/content_update"),
			router_update : require("./admin/router_update"),
			image_upload : require("./admin/image_upload"),
		},
	}

	swc.app.get("/v1/client/content", (req, res, next)=>{req.swc = swc;next()}, reqe, router.client.content, resp);
	swc.app.get("/v1/client/router", (req, res, next)=>{req.swc = swc;next()}, reqe, router.client.router, resp);

	swc.app.post("/v1/admin/image_upload", (req, res, next)=>{req.swc = swc;next()}, reqe, router.admin.image_upload, resp);
	swc.app.post("/v1/admin/content_update", (req, res, next)=>{req.swc = swc;next()}, reqe, router.admin.content_update, resp);
	swc.app.post("/v1/admin/router_update", (req, res, next)=>{req.swc = swc;next()}, reqe, router.admin.router_update, resp);

	return swc;
}