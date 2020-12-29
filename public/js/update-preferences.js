async function updatePreferences(event)
{
    event.preventDefault();
    let shirt_size = document.querySelector('#shirt-size').value;
    let shoe_size = document.querySelector('#shoe-size').value;
    let favorite_color = document.querySelector('#favorite-color').value;
    let favorite_brand = document.querySelector('#favorite-brand').value;
    const user_response = await fetch('api/users/login',
    {
        method: 'GET',
        headers:
        {
            'Content-Type': 'application/json'
        }
    });
    const data = await user_response.json();
    let id = data.id;
    const response = await fetch(`api/users/preferences/${id}`,
    {
        method: 'PUT',
        body: JSON.stringify(
        {
            shirt_size,
            shoe_size,
            favorite_brand,
            favorite_color
        }),
        headers:
        {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok)
    {
        document.location.replace('/');
    }
    else
    {
        console.log('error:', response);
    }
}

document.querySelector('#save-btn').addEventListener('click', updatePreferences);