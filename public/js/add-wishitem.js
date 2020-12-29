// const addWishItem = async (event) =>
async function addWishItem(event)
{
    event.preventDefault();

    let item_name = document.querySelector('#product').value.trim();
    let brand_name = document.querySelector('#brand').value.trim();
    let user_id_response = await fetch('/api/users/login',
    {
        method: 'GET',
        headers:
        {
            'Content-Type': 'application/json'
        }
    });
    const data = await user_id_response.json();
    let user_id = data.id;
    const response = await fetch('/api/items',
    {
        method: 'POST',
        body: JSON.stringify(
        {
            item_name,
            brand_name,
            user_id
        }),
        headers:
        {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok)
    {
        console.log('Success', response);
    }
    else
    {
        console.log('Error', response);
    }
}

document.querySelector('#add-item').addEventListener('click', addWishItem);