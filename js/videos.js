function fetchVideo(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(response => response.json())
    .then(data => displayVideo(data.videos))

}

function displayVideo(videos){
    const videoContainer = document.getElementById('video');
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
    <p>${item.description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Watch</button>
    </div>
  </div>
        `
        videoContainer.appendChild(videoDiv)

    }
}

fetchVideo()

