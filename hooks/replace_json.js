var fs = require('fs'), path = require('path');

module.exports = function(context) {

    var anagogJSON = path.join(context.opts.projectRoot, 'platforms/android/app/src/main/assets/anagog_config.json');
    
      var newJSON = '{"userDefinedStats":{"Name":"STRING","Age":"INTEGER","Score":"DECIMAL"},"notificationChannelId":"CordovaAppChannel","foregroundChannelId":"","enableAudienceAnalytics":true,"foregroundMode":"NEVER","enableLatestMs":true,"enableCrashReports":true,"enableInternalLog":true}';
      fs.writeFile(anagogJSON, newJSON, 'utf8', function (err) {
        if (err) 
          {throw new Error('>>> Unable to write into anagog_config.json: ' + err);}
        else 
          {console.log(">>> anagog_config.json edited successfuly <<<");}
      }
  }
