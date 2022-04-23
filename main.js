const baseURL = 'https://api.tvmaze.com/'

const endpoints = {
    shows: 'shows'
};

const xhr = new XMLHttpRequest();

xhr.open('GET',`${baseURL}${endpoints.shows}`);

xhr.responseType = 'json';


xhr.onreadystatechange = (response) => {
    if (xhr.status === 200 && xhr.readyState === 4) {
        const show = xhr.response;
        const shows = document.querySelector('.shows')
        for (let i = 0; i < show.length; i++) {

            const show_block = `
                    <div class="show_block">
                        <div class="show_info">
                            <ul>
                                <li>${show[i].rating.average}</li>
                                <li>${show[i].genres}</li>
                                <li>${show[i].language}</li>
                                <li>${show[i].weight} min</li>
                            </ul>
                        </div> 
                        <div class="image">
                            <img src="${show[i].image.medium}" alt=""/>
                        </div>
                        
                        <h3>${show[i].name}</h3>
                        
                         
                        
                        <button><a href="${show[i].officialSite}"
                        target="_blank" 
                        rel="noreferrer"
                        >More</a></button>
                    </div>
            `;
            shows.innerHTML += show_block;
        }
    }
}

xhr.onload = (response) =>{
    console.log(response.target.status);
}

xhr.onerror = (response) => {
    console.log("error in: ", response.timeStamp);
    console.log("Запрос не верный!");
}

xhr.onabort = (response) =>{
    console.log(xhr.readyState, "Aborting!");
}

xhr.send();

