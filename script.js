var app = angular.module('NameCard', []);

app.controller('namecontroller', function ($scope) {
    $scope.namecard1 = {
        name: "sai teja",
        age: "21",
        address: {
            street: "eat street",
            area: "Necklace Road",
            location: "hyderabad",
            state: "Telangana"
        },
        friends: ["sanith", "karthik", "santosh"],
        imageUrl:"iron.png",
        status: ""
    };
    $scope.namecard2 = {
        name: "Ravi teja",
        age: "25",
        address: {
            street: "rrr street",
            area: "rrr Road",
            location: "hyderabad",
            state: "Telangana"
        },
        friends: ["rrr", "aaa", "bbb"],
        imageUrl:"ironone.png",
        status: ""
    }
});

app.directive('teNameCard', function () {
    return {
        restrict: "E",
        // template: "{{namecard.name}}"
        templateUrl: "NameCard.html",
        scope: {
            namecard: "=", // with @ we are limited to only passing strings
            initialCollapsed: '@collapsed' // setting the initial collapsed value to collapsed in the INDEX html page so that mo need to change the collapsed care taking values    
        }, 
        controller: function ($scope) {
             $scope.zerosize=false;
            $scope.collapsed = ($scope.initialCollapsed == 'true'); // comparing because from the html we get a string not a boolean 
            $scope.fullCollapse = function () {
                $scope.collapsed = !$scope.collapsed;
            };
            $scope.endorse = function (namecard) {
                $scope.namecard.status = "endorsed";
            };
            $scope.removeFriend = function (frnd) {
                var id = $scope.namecard.friends.indexOf(frnd);
                if (id > -1) {
                    $scope.namecard.friends.splice(id, 1);
                }
                if($scope.namecard.friends.length==0){
                $scope.zerosize=true;
                }
            }
        }
    }
});

app.directive('teRemoveFriend', function () {
    return {
        restrict: "E",
        templateUrl: "removefriend.html",
        scope: {
            notifyParent: "&method"
        },
        controller: function ($scope) {
            /*
              $scope.zerolength = false;
            if ($scope.namecard.friends.length == 0) {
                    $scope.zerolength = true;
                }*/
            $scope.showcross = false;
            $scope.options = function () {
                $scope.showcross = true;
            }
            $scope.closeoptions = function () {
                $scope.showcross = false;
            }
            $scope.editcard = function () {
                $scope.closeoptions();
            }
            $scope.deletecard = function () {
                $scope.notifyParent();
            }
        }
    }

});

app.directive('teAddressInfo', function () {
    return {
        restrict: "E",
        templateUrl: "address.html",
        scope: true,
        controller: function ($scope) {
            $scope.collapsed = false;
            $scope.minimise = function () {
                $scope.collapsed = true;
            };
            $scope.expand = function () {
                $scope.collapsed = false;
            };


        }




    }
});