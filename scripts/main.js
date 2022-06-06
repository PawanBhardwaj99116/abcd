

async function getdata(){
    try{
        let res = await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`);
        let data = await res.json();
        console.log('This is the data',data)
    }
    
    catch(err){
      console.log("error",err)
    }

}
getdata();

function savedata(){

  let name1 = document.getElementById("name").value 
  let email1 = document.getElementById("email").value 
  let image1 = document.getElementById("image").value 
  let amount1 = document.getElementById("amount").value 

  let myobj{
    

  }

}
