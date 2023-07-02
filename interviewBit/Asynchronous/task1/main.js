const xhr = new XMLHttpRequest();
xhr.open("GET","https://jsonplaceholder.typicode.com/todos/");
xhr.send();

xhr.onload = function () {
    if(xhr.status !==200) {
        console.log("Error"+xhr.status + xhr.statusText);
    } else{
        console.log("Success",xhr.response);
    }
};

xhr.onerror = function(){
  console.log("xhr request failed");
}; 