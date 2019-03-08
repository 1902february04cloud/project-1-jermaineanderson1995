let primer = () => {
    //Get user input
    let number = document.getElementById('number').value;

    //AJAX Logic
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            //Set data into div
            document.getElementById('primeMessage').innerHTML = data.response;
        }
    };

    //Doing an HTTP call to a specific endpoint
    xhr.open('POST',`https://i96nrwphpa.execute-api.us-east-1.amazonaws.com/prod/primer`);

    //Sending our request
    let request = {'number': number}
    xhr.send(JSON.stringify(request));
}