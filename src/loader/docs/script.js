angular.module('uixDemo').config('uixLoaderProvider', function (uixLoaderProvider) {
    uixLoaderProvider.setLoadingTime(3000);
});
angular.module('uixDemo').controller('loaderDemoCtrl', ['$scope', '$timeout', '$uixModal',  function ($scope, $timeout, $uixModal) {
    $scope.loadingList = [];
    $scope.loadingList2 = [];

    $scope.isLoading = 0;
    $scope.isLoading2 = 0;

    $scope.reload1 = function () {
        $scope.isLoading = 1;
        $timeout(function () {
            var test = {
                column1: 'column1',
                column2: 'column2',
                column3: 'column3',
                column4: 'column4',
                column5: 'column5'
            };
            $scope.loadingList.push(test);
            $scope.isLoading = 0;
        }, 0);
    };
    $scope.reload2 = function () {
        $scope.isLoading2 = 1;
        $timeout(function () {
            var test = {
                column1: 'column1',
                column2: 'column2',
                column3: 'column3',
                column4: 'column4',
                column5: 'column5'
            };
            $scope.loadingList2.push(test);
            $scope.isLoading2 = 0;
        }, 0);
    };

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function () {

        var modalInstance = $uixModal.open({
            templateUrl: 'modalContent.html',
            controller: ['$scope', function ($scope) {
                $scope.modalBodyText = 'Modal Loader.';
                $scope.isLoading = 1;
                $timeout(function () {
                    $scope.isLoading = 0;
                }, 0);
                $scope.ok = function () {
                    $scope.$close('close modal by $scope');
                };
                $scope.cancel = function () {
                    $scope.$dismiss('dismiss modal by $scope');
                };
            }]
        });

        modalInstance.result.then(function (result) {
            $scope.items = result.items;
            $scope.selected = result.selected;
        }, function () {
        });
    };

    $scope.reload1();
    $scope.reload2();
}]);
