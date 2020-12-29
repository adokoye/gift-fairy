async function sendEmail(event)
{
    event.preventDefault();
    console.log('sendEmail folder');
    let email = document.querySelector('#email-input').value;
    let message = document.querySelector('#message').value;
    const user_response = await fetch('/api/users/login',
    {
        method: 'GET',
        headers:
        {
            'Content-Type': 'application/json'
        }
    });
    const data = await user_response.json();
    let name = data.full_name;
    let id = data.id;
    let link = `https://polar-cove-94723.herokuapp.com/list/${id}`;
    const response = await fetch('/api/users/email',
    {
        method: 'POST',
        body: JSON.stringify(
        {
            email,
            link,
            name,
            message
        }),
        headers:
        {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok)
    {
        console.log('Success');
    }
    else
    {
        console.log('Error', response);
    }
}

document.querySelector('#send-email').addEventListener('click', sendEmail);