console.log('connected')
// get search field input
const searchTermInput = documen.body.querySelector("#search-term");

// fetching API data
const getMealCateregories= async () => {  //async to avoid jumping og code
    const mealCateogisApiURL = "https://www.mmobomb.com/api1/games?sort-by=alphabetical"
    
    try {
        const response = await fetch(mealCateogisApiURL)
        const data = await response.json();
        const categories = data.categories;
        console.log('categories:', categories);
        return categories;
    }catch (error) {
        console.log(error)
        alert('Something went wrong, try again later')
    }
};

//render meal categories data to DOM
const renderMealCategories = (mealCategoriesOb) => {
    console.log('renderMealCategories');
    console.table(mealCategoriesOb); 
    //find and select a UL 
    const mealCategoriesList = document.body.querySelector('meal-categories-list')

    mealCategoriesArray.forEach(mealCatergorory => {

        //creat a wrapping
        const mealCateroryListItem = document.createElement('li')
        mealCategoryListItem.className = 'meal-category-card'
        mealCategoriesList.appendChild(mealCateroryListItem)

        //creating an image
        const mealCategoryImage = documentcreatElement('img')
        mealCategoryImage.src = mealCategory?.strCategorythumbnail;
        mealCategoryImage.width = 300
        mealCategoryListItem.appendChild(mealCategoryImage);

        //create an h4 element
        const mealCategoryName = document.createElement('h4');
        mealCategoryName.textContent = mealCategory?.strCategoryname;
        mealCategoryListItem.appendChild(mealCategoryName);

        //create an p element
        const mealCategoryDescription = document.createElement('p');
        mealCategoryDescription.textContent = mealCategory?.strCategorydescription;
        mealCategoryListItem.appendChild(mealCategoryDescription);
    });
};

//function to call form input is given focus
const handleFormInputFocus = async () => {   //new fetch
    console.log('focus occurred');
    
    const mealCategoriesOb = await getMealCateregories();
    renderMealCategories(mealCategoriesOb);
};

//add eventlistner to search term input
searchTermInput.addEventListener('focus', handleFormInputFocus);