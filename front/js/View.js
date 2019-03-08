view = () => {

    //AJAX Logic
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            //Set data into div
            //document.getElementById('viewMessage').innerHTML = data.response;
            //Present the data to the user
            presentEC2(data);
        }
    };

    //Doing an HTTP call to a specific endpoint
    xhr.open('GET',`https://i96nrwphpa.execute-api.us-east-1.amazonaws.com/prod/view`);

    xhr.send();
}

//Present all Records
function presentEC2(data) {
    //Get customer list node
    let tag = document.getElementById("List");

    //Clean customer list
    tag.innerHTML = "";

    //Iterate over all records
    data.forEach((record) => {
        //Creating records of <li>
        let records = document.createElement("li");

        //Add class for styling <li class="something">
        //You can access any HTML fields (id might be useful)
        records.className = "list-group-item";

        //Creating innerHTML object, adding customer name to it.
        //<li class="something">[creating this object]</li>
        let row = document.createTextNode(`Name: ${record.NAME} | Genre: ${record.GENRE} | Age: ${record.AGE}`);

        //Append innerHTML to the records
        //<li class="something">Perez, Julio</li>
        records.appendChild(row);

        //Finally, we append the new customerNode to the customerList
        //<ul id="List">
        //<li class="something">Something</li>
        //</ul>
        tag.appendChild(records);
    });
}
