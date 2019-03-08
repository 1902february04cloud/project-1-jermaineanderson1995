window.onload = () => {
    //Prime Lambda Event Listener
    document.getElementById('calculate').addEventListener('click', primer)

    //Create EC2 Lambda Event Listener
    document.getElementById('create').addEventListener('click', create_ec2);

    //Get all EC2s Listener
    document.getElementById('list').addEventListener('click', view);

    //Add To DB Listener
    document.getElementById('add').addEventListener('click', add);

    //Generate Stage Name Listener
    document.getElementById('generate').addEventListener('click', generate);
}