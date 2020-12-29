async function register(event)
{
    event.preventDefault();
    let full_name = document.querySelector('#full-name').value.trim();
    let email = document.querySelector('#email-address').value.trim();
    let password = document.querySelector('#register_password').value.trim();
    let dob = document.querySelector('#birthdate').value.trim();


    const response = await fetch('/api/users/',
    {
        method: 'POST',
        body: JSON.stringify(
        {
            full_name,
            email,
            password,
            dob
        }),
        headers:
        {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok)
    {
        document.location.replace('/list');
    }
    else
    {
        jsonResponse = await response.json();
        console.log('Error', jsonResponse);
    }
}

document.querySelector('#register').addEventListener('click', register);