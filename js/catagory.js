function fetchCategory(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(response => response.json())
    .then(data => displayCategory(data.categories))
}

function displayCategory(categories){
    const categoryNav = document.getElementById('categories')
    for( const item of categories){
        // console.log(item)
        const button = document.createElement('button')
        button.classList = 'btn btn-outline btn-primary'
        button.textContent = item.category
        categoryNav.appendChild(button)

    }
}

fetchCategory()