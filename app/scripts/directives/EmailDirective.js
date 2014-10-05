/**
 * Directive: Email <email></email>
 */
angular.module('angularGmailApp')
    .directive('email', function EmailDrctv ($timeout) {
        'use strict';

        return {
            restrict: 'E',
            replace: true,
            scope: true,
            templateUrl: 'scripts/directives/email.tmpl.html',
            controllerAs: 'email',
            controller: function ($routeParams, $scope, EmailFactory) {

                this.message = {};

                var getmessage = EmailFactory.getMessage($routeParams);
                if (getmessage) {
                    getmessage.then( angular.bind(this, function (response) {
                        EmailFactory.message = response;
                        this.message = EmailFactory.message;
                        $scope.$parent.email.title = this.message.subject;
                    }) );
                }

                this.reply = function (message) {
                    EmailFactory.reply(message);
                };

            },

            //link: function (scope, element, attrs, ctrl) {
            link: function (scope, element) {

                var textarea = element.find('.email__response-text')[0];
                scope.$watch('reply', function (newVal, oldVal) {
                    if (newVal === oldVal){ return; }
                    if (newVal) {
                        $timeout(function () {
                            textarea.focus();
                        }, 0);
                    }
                });
            }
        };
    });
