var fs = require('fs'), path = require('path');

module.exports = function(context) {

      var anagogJSON = path.join(context.opts.projectRoot, 'platforms/ios/anagog_config.json');

      var newJSON = '{"userDefinedStats":{"cms_MissingData": "STRING","cms_UnmatchingData": "STRING","cms_FrozenData": "STRING","cms_AnagogConsent": "STRING"},"notificationChannelId":"CordovaAppChannel","foregroundChannelId":"","enableAudienceAnalytics":true,"foregroundMode":"NEVER","enableLatestMs":true,"enableCrashReports":true,"enableInternalLog":true,"jedaiAutoEnabled":false,"callCompletionHandlerForRemoteNotifications": false,"overwriteUNUserNotificationCenterDelegate": false}';
      fs.writeFile(anagogJSON, newJSON, 'utf8', function (err) {
        if (err) 
          {throw new Error('>>> Unable to write into anagog_config.json: ' + err);}
        else 
          {console.log(">>> anagog_config.json edited successfuly <<<");}
          {console.log(anagogJSON);}
      });
  }
