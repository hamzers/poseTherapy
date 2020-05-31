const gang = "test";

//GET landing page

export const page = new TextEncoder().encode(`
<body>
    <h1> Hello  ${gang} </h1>
</body>
`);



const main = ({ response }: { response: any }) => {
  response.body = page;
};

export { main };