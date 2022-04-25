const form = document.querySelector('#showSearch');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params : {q : searchTerm}};
    const res = await axios.get(`http://api.tvmaze.com/search/shows`,config);
    addImages(res.data);
    form.elements.query.value = '';
    
    
})



const addImages = (shows)=>{
    for(let result of shows)
    {
        if(result.show.image){
            const imag = document.createElement('IMG');
            imag.src = result.show.image.medium;
            document.body.append(imag);
        }
    }
}

