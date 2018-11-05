var xhr = new XMLHttpRequest();
xhr.open('get','url');
xhr.send(null);
xhr.onreadystatechange = function(){
    if(xhr.statue == 200 & xhr.readystate == 4){
        var obj = JSON.parse(xhr.reponseText);
        console.log(obj);
    }
}

var xhr = new XMLHttpRequest();
xhr.open('post','url');
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
