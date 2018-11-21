const express = require("express");

async function server_startup(swc){
	swc.app.use("/public", express.static("public"));
	swc.app.listen(swc.config.server.port, ()=>{
		console.log("config : ");
		console.info(swc.config);
	})
	return;
}

module.exports = async (config)=>{
	var swc = {
		config : config,
		controller : {},
		model : require("./model/router"),
		app : express()
	}
	//router
	swc = await require("./controller/init")(swc);
	await server_startup(swc);

	return swc;
}