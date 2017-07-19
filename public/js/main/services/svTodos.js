angular.module("app.todos").factory("svTodos", ['$http', ($http) => {
    return {
        get: () =>{
            return $http.get("/api/todos");
        },
        create: (dataForm) => {
            return $http.post("/api/todo",dataForm);
        },
        update: (dataForm) => {
            return $http.put("/api/todo/",dataForm);
        },
        delete: (id) => {
            return $http.delete("/api/todo/" + id); 
        }
    }
}])