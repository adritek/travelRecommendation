const recommendationsAPI = './travel_recommendation_api.json';

let keywordSubmit = document.getElementById('searchBtn');
let clearResults = document.getElementById('clearBtn');
let resultsDiv = document.getElementById("results");

keywordSubmit.addEventListener('click', returnKeywordSearch);
clearResults.addEventListener('click', clearDestinations);

function returnKeywordSearch() {
    let keywordSearch = document.getElementById("searchQuery").value;
    let keyword = keywordSearch.toLowerCase();
    switch (keyword) {
        case 'beach':
        case 'beaches':
            fetchRecommendations('beaches');
            break;
        case 'temple':
        case 'temples':
            fetchRecommendations('temples');
            break;
        case 'country':
        case 'countries':
            fetchRecommendations('countries');
            break;
        default:
            alert('no recommendations');
            break;
    }
}

function fetchRecommendations(term) {
    fetch(recommendationsAPI)
        .then(response => response.json())
        .then(data => {
            data[term].map(item => {
                const card = document.createElement("div");
                const img = document.createElement("img")
                const title = document.createElement("h2");
                const paragraph = document.createElement("p");
                const btn = document.createElement("button");

                if (term === 'countries' || term === 'country') {
                    title.textContent = item.cities[0].name;
                    img.setAttribute("src", item.cities[0].imageUrl);
                    img.setAttribute("width", "500px");
                    paragraph.textContent = item.cities[0].description;
                    btn.textContent = "Visit";
                } else {
                    img.setAttribute("src", item.imageUrl);
                    img.setAttribute("width", "500px");
                    title.textContent = item.name;
                    paragraph.textContent = item.description;
                    btn.textContent = "Visit";
                }
                    
                card.append(img, title, paragraph, btn);
                resultsDiv.style.visibility = "visible";
                resultsDiv.appendChild(card);
            })

            document.getElementById("searchQuery").focus();
            resetSearch();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function resetSearch() {
    document.getElementById("searchQuery").value = "";
}

function clearDestinations(){
    resultsDiv.innerHTML = "";
    resultsDiv.style.visibility = "hidden";
}