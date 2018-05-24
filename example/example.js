/*global console: false */
/*jslint unparam: true*/

window.angular.module('exampleApp', [
    'angular-web-notification',
    'ui.bootstrap',
    'dialogs',
    'exampleApp.services'
]).controller('exampleForm', ['$scope', '$dialog', '$timeout',function ($scope, $dialog,$timeout) {
    'use strict';
 
  $scope.click = function(data){
    $scope.user.status = data
  }

    $scope.user = {
        status:''
    }
    console.log(JSON.stringify($scope.user))
    $scope.title = new Date();
    $scope.text = 'Please click here to get your data';
}]).directive('showButton', ['webNotification','$dialog', function (webNotification,$dialog) {
    'use strict';

    return {
        restrict: 'C',
        scope: {
            notificationTitle: '=',
            notificationText: '='
        },
        link: function (scope, element) {
            surprise();
            // var time = scope.notificationTitle + '';
            // var ModifiedTime = time.split(" ");
            // var hoursTime = ModifiedTime[4]

            function hanan(){
                webNotification.showNotification("How do you feel today?" , {
                    body: 'Please click her to fill out the form',
                    icon: 'https://img.freepik.com/free-vector/yellow-background-with-expressive-faces_23-2147634255.jpg?size=338&ext=jpg',

                    onClick: function onNotificationClicked() {
                        console.log('Notification clicked.');
                        $dialog.dialog({}).open('modalContent.html')
                    },
                    autoClose: 10000 //auto close the notification after 4 seconds (you can manually close it via hide function)
                },function onShow(error, hide) {
                    if (error) {
                        window.alert('Unable to show notification: ' + error.message);
                        console.log(error.message)
                    } else {
                        console.log('Notification Shown.');

                        setTimeout(function hideNotification() {
                            console.log('Hiding notification....');
                            hide(); //manually close the notification (you can skip this if you use the autoClose option)
                        }, 5000);
                    }
                });
           // });
        }
            // to here before updating on time if statment,,,>>>>>>
            function surprise() {
                (function loop() {
                  
                    var now = new Date();
                      console.log(now.getHours())
                    if ( now.getHours() === 16 && now.getMinutes() ) {
                      hanan();
                  }
                     now = new Date();                  // allow for time passing
                     // var delay = 60000 - (now % 60000); // exact ms to next minute interval
                    setTimeout(loop, 30000);
                     })();
                }
   
        }
    };
}])
