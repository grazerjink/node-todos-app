var app = angular.module("app.todos", ["xeditable"]);
app.controller("todoController", ['$scope', 'svTodos', ($scope, svTodos) => {
    $scope.appName = "Todo Dashboard !!!"
    $scope.formData = {};
    $scope.todos = [];
    $scope.loading = true;
    svTodos.get().then((res) => {
        $scope.todos = res.data;
        $scope.loading = false;
    })

    $scope.createTodo = () => {
        $scope.loading = true;
        var todo = {
            text: $scope.formData.text,
            status: false
        }
        svTodos.create(todo).then((res) => {
            $scope.todos = res.data;
            $scope.loading = false;
            $scope.formData.text = "";
        })

    }
    $scope.updateTodo = (todo) => {
        $scope.loading = true;
        svTodos.update(todo).then((res) => {
            $scope.todos = res.data;
            $scope.loading = false;
        })
    }
    $scope.deleteTodo = (todo) => {
        $scope.loading = true;
        svTodos.delete(todo._id).then((res) => {
            $scope.todos = res.data;
            $scope.loading = false;
        })
    }
}])