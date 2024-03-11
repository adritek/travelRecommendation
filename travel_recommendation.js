const recommendationsAPI = './travel_recommendation_api.json';

// fetch the details from the API based on the keyword the user enters: beach, temple, or country.

let keywordSearch = document.getElementById("searchQuery").value;
let keywordSubmit = document.getElementById('searchBtn');
keywordSubmit.addEventListener('click', returnKeywordSearch);

function returnKeywordSearch(){
    let keyword = keywordSearch.toLowerCase();
    console.log(`Keyword search: ${keyword}`)
    if (keyword === 'beach' || 'beaches'){
        fetchRecommendations(beaches);
        resetSearch();
    }
}

function fetchRecommendations() {
    fetch(recommendationsAPI)
    .then(response => response.json())
    .then(data => {
        console.log(data.beaches);
        // const recommendation = data.conditions.find(item => item.name.toLowerCase() === input);
        
        // Further processing of the data can be done here

    })
    .catch(error => {
        console.error('Error:', error);
    }); 
}

fetchRecommendations()
function resetSearch(){
    document.getElementById("searchQuery").value = "";
}
