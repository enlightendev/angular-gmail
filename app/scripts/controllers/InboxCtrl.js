angular.module('angularGmailApp')
    .controller('InboxCtrl', function InboxCtrl($scope, InboxFactory) {
        'use strict';
        $scope.meta = {
            title: 'My Inbox'
        };

        /**
         * Call the inbox factory getMessages() to get our json data
         */
        InboxFactory.getMessages()
            .success(function (jsonData, statusCode) {
                console.log('The request was successful!', statusCode);
                console.dir(jsonData);
                // Now add the Email messages to the controller's scope
                $scope.data = {
                    emails: jsonData
                };
            });
    });
