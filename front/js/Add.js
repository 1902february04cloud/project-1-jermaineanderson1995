add = () => {
    //Get user inputs
    let genre = document.getElementById('genre').value;
    let name = document.getElementById('artist').value;
    let age = document.getElementById('age').value;

    //AJAX Logic
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            //Set data into div
            document.getElementById('addMessage').innerHTML = data.response;
        }
    };

    //Doing an HTTP call to a specific endpoint
    xhr.open('POST',`https://i96nrwphpa.execute-api.us-east-1.amazonaws.com/prod/addtotable`);

    //Sending our request
    if (genre != '' && name != '' && age != ''){
        let request = {
            'genre': genre, 
            'name': name, 
            'age': age
        }
        xhr.send(JSON.stringify(request));
    }
    else if (genre == ''){
        document.getElementById("addMessage").innerHTML="Please Select A Genre";
    }
    else if (name == ''){
        document.getElementById("addMessage").innerHTML="Please Enter A Name";
    }
    else if(age == ''){
        document.getElementById("addMessage").innerHTML="Please Enter A Age";
    }
}