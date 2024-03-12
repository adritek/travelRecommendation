const recommendationsAPI = './travel_recommendation_api.json';

// fetch the details from the API based on the keyword the user enters: beach, temple, or country.

let keywordSubmit = document.getElementById('searchBtn');
let cb = document.getElementById('clearBtn');
keywordSubmit.addEventListener('click', returnKeywordSearch);
cb.addEventListener('click', resetSearch);

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
                    img.setAttribute("src", item.cities[0].imageUrl);
                    paragraph.textContent = item.cities[0].description;
                }
                // img.setAttribute("src", item.imageUrl)
                img.setAttribute("width", "500px")
                title.textContent = item.name;
                // paragraph.textContent = item.description;
                btn.textContent = "Visit"

                card.append(img, title, paragraph, btn);

                document.getElementById("results").appendChild(card);
            })


            document.getElementById("searchQuery").focus();
            // generateCard();
            resetSearch();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function resetSearch() {
    document.getElementById("searchQuery").value = "";
    // document.getElementById("results").innerHTML = "";
}

function generateCard() {
    const card = document.createElement("div");
    const img = document.createElement("img")
    const title = document.createElement("h2");
    const paragraph = document.createElement("p");
    const btn = document.createElement("button");

    card.setAttribute("class", "destinationCard");
    btn.textContent = "Visit";
    card.append(img, title, paragraph, btn);

    document.getElementById("results").appendChild(card);
}