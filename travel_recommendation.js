const recommendationsAPI = './travel_recommendation_api.json';

// fetch the details from the API based on the keyword the user enters: beach, temple, or country.

let keywordSubmit = document.getElementById('searchBtn');
let cb = document.getElementById('clearBtn');
keywordSubmit.addEventListener('click', returnKeywordSearch);
cb.addEventListener('click', resetSearch);

function returnKeywordSearch(){
    let keywordSearch = document.getElementById("searchQuery").value;
    let keyword = keywordSearch.toLowerCase();
    switch (keyword) {
        case 'beach':
        case 'beaches':
            fetchRecommendations('beaches');
            resetSearch();
            break;
        case 'temple':
        case 'temples':
            fetchRecommendations('temples')
            break;
        case 'country':
        case 'countries':
            fetchRecommendations('countries')
            break;
        default:
            alert('no recommendations')
            break;
    }
}

function fetchRecommendations(term) {
    fetch(recommendationsAPI)
    .then(response => response.json())
    .then(data => {
        console.log(data[term]);
        document.getElementById("searchQuery").focus();
        resetSearch();
    })
    .catch(error => {
        console.error('Error:', error);
    }); 
}

// fetchRecommendations()
function resetSearch(){
    document.getElementById("searchQuery").value = "";
}


