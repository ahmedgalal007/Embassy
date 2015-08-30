var path = require('path');
var rootpath = path.normalize(__dirname + '/../../');

var config =  {

    'Development' :
    {
        port : 5000,
        'rootpath' : rootpath
    }
,

    'Production'  :
    {
        port : 80,
        'rootpath' : rootpath
    }

}

module.exports = config;