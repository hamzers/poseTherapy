
const main = ({ response }: { response: any }) => {
  response.body = new TextEncoder().encode(`
  <html>
  <head>
      <title>Signup for an account</title>
  </head>
  <body>
  
  <form>
    <div><input type="text" name="email" value="" id="a"></div>
    <div><input type="text" name="password" value="" id="b"></div>
  
    <div><select name="e">
      <option value="patient" selected="selected">Patient</option>
      <option value="doctor">Doctor</option>
    </select></div>
    <div>
      <input type="submit" name="g" value="Submit" id="g">
    </div>
    <p id="disp"></p>
  </form>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  
  </body>
  <script>
  $( "form" ).submit(function( event ) {
    var data = $( this ).serializeArray();
    var newData = new Object();
    newData.name = data[0].value;
    newData.email = data[1].value;
    newData.selection = data[2].value;
    console.log(JSON.stringify(newData));
    newData = JSON.stringify(newData);
    
    $.ajax({
          url:"/getinfo",
          type:"POST",
  
          data: newData,
          contentType:"application/json; charset=utf-8",
          dataType:"json",
          success:function(response) {
            console.log(response);
            //document.getElementById("total_items").value=response;
           document.getElementById("disp").innerHTML =response.data.value.name;
         },
         error:function(){
          alert("error");
         }
  
        });
    
    
    event.preventDefault();
  });
  </script>
  </html>
  `);
};

const testPost = async (
  { request, response }: { request: any; response: any },
) => {
  console.log(request);
  let body = "adf";
  console.log(request);
  //const body = await request.body();
  console.log(body);
  if (!request) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "No data",
    };
  } else {
   
    response.status = 201;
    response.body = {
      success: true,
      data: request,
    };
  }
};

export { main, testPost };