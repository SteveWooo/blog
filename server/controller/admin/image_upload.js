const formidable = require("formidable");
const crypto = require("crypto");
const fs = require("fs");

function get_name (file){
	var str = file.name + "&" + file.size + "&" + file.type;
	var hashname = crypto.createHash("md5").update(str).digest("hex");
	return hashname;
}

module.exports = (req, res, next)=>{
	var form = new formidable.IncomingForm();
	res.resp.success = 1;
	form.parse(req, function(error, fields, files) {
        let type = files["editormd-image-file"].type.split("/");
        let filename = get_name(files["editormd-image-file"]) + "." + type[type.length - 1];
        let filepath = "public/res/";
        fs.writeFileSync(filepath + filename, fs.readFileSync(files["editormd-image-file"].path));
        res.resp.url = "/" + filepath + filename;
        next();
    })
}