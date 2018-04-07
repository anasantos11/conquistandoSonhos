'use strict';

angular
    .module('sonhosApp').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/conquistandoSonhos");

        $stateProvider
            .state("conquistandoSonhos", {
                url: "/conquistandoSonhos",
                views: {
                    'app@': {
                        templateUrl: 'components/home/home2.html',
                        controller: 'Main',
                        controllerAs: 'vm'
                    }
                }

            })
    });