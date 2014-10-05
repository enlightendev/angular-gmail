this is based on the following tutorial: http://www.thinkful.com/learn/angularjs-tutorial-build-a-gmail-clone


## Angular Directives

Unlike AngularJS controllers, directives don’t declare a dependency on the $scope service; instead, they are passed the scope created by the controller that supports the view in which the directive is applied.
(Pro Angular JS pg385)

AngularJS doesn’t expose the DOM API provided by the browser, and any time you are working
with elements, you can expect to receive a jqLite object. The jqLite functionality is exposed through the element argument that is passed to the link function.
(Pro Angular JS)



## What's a Factory?
Angular Factories can be used for many different things. Some of the most common use-cases are server-side communication 
via HTTP and abstracting Models to persist application state and changes across controllers. Angular Factories are a 
great way to create reusable features and code blocks throughout our application.

Key takeaway: If you want to communicate with a RESTful API, do it through a factory! If you want to store a 
'CurrentUser' with authentication information, do it in a factory!


## Notes & Observations
app.js lists routes and associated controller, e.g.

    $routeProvider
            .when('/inbox', {
                templateUrl: 'views/inbox.html',
                controller: 'InboxCtrl',
                controllerAs: 'inbox'
            })
            .when('/inbox/email/:id', {
                templateUrl: 'views/email.html',
                controller: 'EmailCtrl',
                controllerAs: 'email'
            })
            .otherwise({
                templateUrl: 'views/main.html'
                //redirectTo: '/'
            });