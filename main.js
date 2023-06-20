console.log('connected')

const searchTermInput = documen.body.querySelector("#search-term");

// fetching API data
const getMealCateregories= async () => {  //async to avoid jumping og code
    const mealCateogisApiURL = "GET https://www.mmobomb.com/api1/games?sort-by=alphabetical"
    try {
        const response = await fetch(mealCateogisApiURL)
        const data = await response.json()
        
        console.log('data:', data);
    }catch (error) {
        console.log(error)
        alert('Something went wrong, try again later')
    }
}

const handleFormInputFocus = async () => {   //new fetch
    console.log('focus occurred');

    await getMealCateregories();
};

searchTermInput.addEventListener('focus', handleFormInputFocus);