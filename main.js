console.log('connected')

const handleFormInputFocus = () => {
    console.log('focus occurred')
}

const searchTermInput = documen.body.querySelector("#search-term")

document.addEventListener('focus', handleFormInputFocus)