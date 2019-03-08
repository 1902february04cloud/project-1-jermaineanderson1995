generate = () => {
    //Get user inputs
    let name = document.getElementById('fname').value;
    let month = document.getElementById('month').value;

    //AJAX Logic
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            //Set data into div
            document.getElementById('generateMessage').innerHTML = data.response;
        }
    };

    //Doing an HTTP call to a specific endpoint
    xhr.open('POST',`https://i96nrwphpa.execute-api.us-east-1.amazonaws.com/prod/name`);

    //Sending our request
    if (name != '' && month != ''){
        let request = {
            'name': name, 
            'month': month
        }
        xhr.send(JSON.stringify(request));
    }
    else if (name == ''){
        document.getElementById("generateMessage").innerHTML="Please Enter A Name";
    }
    else if (month == ''){
        document.getElementById("generateMessage").innerHTML="Please Select A Birth Month";
    }
}