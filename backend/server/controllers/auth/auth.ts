async function checkValidUser(email: string, uid: string) {
   
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("email", email);
    urlencoded.append("uid", uid);
    
        
    const val = await fetch("https://us-central1-algoimplement.cloudfunctions.net/auth/api/users", {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'})
    return val.text()
}

export { checkValidUser }