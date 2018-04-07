angular.module('sonhosApp')
    .controller('DespesaCtrl', [function () {
        var vm = this;
        vm.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

        vm.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        vm.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        vm.datasetOverride = [
            {
                label: "Bar chart",
                borderWidth: 1,
                type: 'bar'
            },
            {
                label: "Line chart",
                borderWidth: 3,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                type: 'line'
            }
        ];


        vm.labelsy = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
        vm.datay = [300, 500, 100, 40, 120];


        vm.labelsz = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        vm.seriesz = ['Series A', 'Series B'];
      
        vm.dataz = [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ];
    }]);

