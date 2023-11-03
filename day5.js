function fetchData(){
    const data = await fetch('https://jsonplaceholder.typicode.com');
    console.log("async function complete", data)
}
 // function fetchdata(){
    //console.log("fetch data called")
    //let d = null;
    //fetch('https://jsonplaceholder.typicode.com/users')
    //.then(function(data){
    // console.log("Promise success",data);
    // return data.json()
    //})
    //.then(function(data){
    // console.log("final data[0].username", data});
    // let para = docoment.getElementById("username")
    // for( let i=0, i<data.length, i++;){
    //   let eachuser = docoment.createelement("h6");
    //   eachuser.innerhtml="welcome"+ data[i].username
    //   para.style.color="red"
    // d = data;

    //}
    //  .catch(function(err){
    //  console.log("promice failed",err)
//});
//console.log(d)
//}
