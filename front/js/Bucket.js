create_ec2 = () => {
    //Get user input
    let name = document.getElementById('name').value;

    //AJAX Logic
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            //Set data into div
            //document.getElementById('createMessage').innerHTML = data.response;
            //window.location.href = data.response;
            document.getElementById("createMessage").innerHTML='<object type="text/html" data="'+data.response+'" width="700" height="700" position: absolute></object>';
        }
    };

    //Doing an HTTP call to a specific endpoint
    xhr.open('POST',`https://i96nrwphpa.execute-api.us-east-1.amazonaws.com/prod/image`);

    //Sending our request
    if (name != ""){
        let request = {'name': name}
        xhr.send(JSON.stringify(request));
    }
    else {
        document.getElementById("createMessage").innerHTML="Please Select A Genre";
    }
    
}