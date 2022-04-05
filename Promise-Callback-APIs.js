var getUser = new Promise(function(resolved,rejected){
    var req = new XMLHttpRequest();
    req.open('GET','https://randomuser.me/api/?results=1');
    req.onload = () => {
        if(req.status ==200) { resolved(JSON.parse(req.response).results);}
        else{
         alert("sorry the req can\'t Fetch");
         rejected(new Error('sorry the req can\'t Fetch')); }}  
          
    req.onerror =()=>{ rejected(new Error('sorry the req can\'t Fetch')); }
    req.send();});

 getUser.then(data =>{
      console.log(data);
      var x = JSON.stringify(data);
      obj = JSON.stringify(data[0].name) ; 
      obj = JSON.stringify(obj) ;
      document.getElementById('here').innerHTML=x; 
      document.getElementById('here2').innerHTML=obj;       
      err=>{console.log(err.message);}});