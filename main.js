console.log('connected')
// get search field input
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
};

//render meal categories data to DOM
const renderMealCategories = (mealCategoriesOb) => {
    console.log('renderMealCategories');
    console.table(mealCategoriesOb);
};

//function to call form input is given focus
const handleFormInputFocus = async () => {   //new fetch
    console.log('focus occurred');
    
    const mealCategoriesOb = await getMealCateregories();
    renderMealCategories(mealCategoriesOb);
};

//add eventlistner to search term input
searchTermInput.addEventListener('focus', handleFormInputFocus);