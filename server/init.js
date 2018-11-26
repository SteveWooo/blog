const express = require("express");
const body_parser = require('body-parser');
async function server_startup(swc){
	swc.app.use("/public", express.static("public"));
	swc.app.use(body_parser.json());
	swc.app.use(body_parser.urlencoded({extended: false}));
	swc = await require("./controller/init")(swc);
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
	await server_startup(swc);

	return swc;
}