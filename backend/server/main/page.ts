import { css } from "./style.ts";
import { font1 } from "./font.ts";
import { sidebar, intro, secs } from "./elements.ts";
const gang = "test";

//GET landing page

const header = `
<head>
  <title>Server Page</title>
  ${font1}
  ${css}
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
`;
const page = new TextEncoder().encode(`
${ header }
<body>
  ${sidebar}  
  <div id= "wrapper">
    ${intro}
    ${secs}  
  </div>
  <footer id="footer" class="wrapper style1-alt">
    <div class="inner">
      <ul class="menu">
        <li>&copy; AlgoImplement Technologies. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
      </ul>
    </div>
  </footer>

</body>
<script>
function submitForm() {
  
    var jsonArray = [];

     var splittedFormData = $("#myForm").serialize().split('&');

           $.each(splittedFormData, function (key, value) {

               item = {};
               var splittedValue = value.split('=');               
               item["name"] = splittedValue[0];
               item["email"] = splittedValue[1];
               item["message"] = splittedValue[2];
               jsonArray.push(item);
           });

    console.log(jsonArray);

    var formData = JSON.stringify($("#myForm").serializeArray());
    console.log(formData);
}
</script>

`);



const main = ({ response }: { response: any }) => {
  response.body = page;
};

export { main };