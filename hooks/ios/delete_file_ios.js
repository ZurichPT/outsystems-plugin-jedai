var fs = require('fs'), path = require('path');

function getProjectName() {
    var config = fs.readFileSync('config.xml').toString();
    var parseString = require('xml2js').parseString;
    var name;
    parseString(config, function (err, result) {
        name = result.widget.name.toString();
        const r = /\B\s+|\s+\B/g;  //Removes trailing and leading spaces
        name = name.replace(r, '');
    });
    return name || null;
}

module.exports = function(context) {
	var appName = getProjectName();
    var anagogJSON = path.join(context.opts.projectRoot, 'platforms/ios/' + appName + '/Resources/anagog_config.json');
    fs.unlinkSync(anagogJSON);
 }
