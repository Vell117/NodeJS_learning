// Запуск сервера.

// Создание модулья http, который необходим для создания сервера.
const http = require("http");

// Создаем новый сервер для прослушивания 
// входящих подключений и обработки запросов.
http.createServer(function(request,response){
    
    //Пишем ответ сервера
    response.end("Hello NodeJS!");

// Вызов метода listen для прослушивания входящих подключений.
// Метод принимает три параметра (локальный порт, локальный адрес, функция)    
}).listen(3000, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
});