function fetchCategory(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(response => response.json())
    .then(data => displayCategory(data.categories))
}

function displayCategory(categories){
    const categoryNav = document.getElementById('categories')
    
    for( const item of categories){
        // console.log(item)
        const buttonContainer = document.createElement('div')
        buttonContainer.innerHTML = `
        <button 
        id='btn-${item.category_id}' 
        onclick="loadCategoryVideos(${item.category_id})" 
        class="btn btn-outline btn-primary category-btn">

       ${item.category}

      </button>
        `
        
        categoryNav.appendChild(buttonContainer)

    }
}

fetchCategory()


function fetchVideo(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(response => response.json())
    .then(data => displayVideo(data.videos))

}

function displayVideo(videos){
    const videoContainer = document.getElementById('video');

    videoContainer.innerHTML='' 


    if (videos.length == 0) {
        videoContainer.classList.remove("grid");
        videoContainer.innerHTML = `
        <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center">
        
          <img src="assets/Icon.png" /> 
          <h2 class="text-center text-xl font-bold"> No Content Here in this Categery </h2> 
        </div>`;
      } else {
        videoContainer.classList.add("grid");
      }


    for ( const item of videos){
        console.log(item)
        const videoDiv = document.createElement('div');
        videoDiv.classList ="card card-compact"
        videoDiv.innerHTML = `
    <figure class="h-[200px]">  
    <img
      src= ${item.thumbnail}
      class = " w-full h-full object-cover" 
      alt="thumbnail" />
  </figure>

  <div class="card-body">
    <h2 class="card-title">${item.title}</h2>

    ${ item.authors[0].verified === true ? 'Verified' : 'Not Verified'}

    <p>${item.description}</p>
    <div class="card-actions justify-end">

      <button onclick="loadDetails('${item.video_id}')" class="btn btn-primary">Watch</button>

    </div>
  </div>
        `
        videoContainer.appendChild(videoDiv)

    }
}

function loadCategoryVideos(id){
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(response => response.json())
    .then(data => {
          //sobaike active class remove korao
           removeActiveClass();

         //id er class k active korao
        const activebtn = document.getElementById(`btn-${id}`) //Button Color Change
        activebtn.classList.add('active')
        displayVideo(data.category)

    })
}

function removeActiveClass(){
    const buttons = document.querySelectorAll('.category-btn')
    buttons.forEach(button => button.classList.remove('active'))
    
}
const loadDetails = async ( video_id ) =>{
  const response = await fetch(`https://openapi.programming-hero.com/api/phero-tube
    /video/${video_id}`
    );
    const data = await response.json();
}

const displayDetails = (video) => {
  

}

fetchVideo()

