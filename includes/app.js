/**
 * Created by adaror on 08/03/2017.
 */
(function() {
    var app = angular.module('dogapp', []);

    app.directive('dogContent',function () {
        return {
            restrict: 'E',
            templateUrl: 'dog1.html',
            controller: function () {

                this.dogs = {
                    tag:'or',
                    fields:[{name:'Great dog!',desc:'very Great',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',image:'dog.jpg'},
                    {name:'Bad dog!',desc:'very Bad',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',image:'dog2.jpg'},
                    {name:'Pretty dog!',desc:'very pretty',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',image:'dog3.jpg'},
                        {name:'Goofy dog!',desc:'very goofy',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',image:'dog4.jpg'}
                ]};

                this.tab = 1;

                this.selectTab = function (setTab) {
                    this.tab = setTab;
                };
                this.isSelected = function (checkTab) {
                    return this.tab === checkTab;
                };
                this.showData = function(tabNum){

                }
            },
            controllerAs: 'dog'
        };
    });

})();
