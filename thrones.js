
async function foo(){
    let url=await fetch("https://thronesapi.com/api/v2/Characters");
    let res=await url.json();
    console.log(res);

    for(var i=0;i<res.length;i++){
        console.log(res[i]);

        var div=document.createElement("div");
      div.setAttribute("class","col-md-4")
      div.innerHTML=`
      <div class="card border-success mb-3" style="max-width: 20rem;">
      <div class="card-body text-success">

      <img src="${res[i].imageUrl}"   style="height:240px; width:270px" alt="">
      <h5 class="card-title" >ID : ${res[i].id}</h5>
        <h5 class="card-title" >Title: ${res[i].title}</h5>
        <h5 class="card-title" >Name : ${res[i].fullName}</h5>
        <h5 class="card-title" >Family : ${res[i].family}</h5>
                              
      </div>
    </div>`
    
       document.getElementById("tc").append(div);

    }
}
foo()