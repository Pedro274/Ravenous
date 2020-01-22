const apiKey ='kXxTjTYhaiMwWs9JoELqMHBmqMSozoTiJjJD6Kxe7QfjX099jJbZMZWfAopJGS1dxQamMiG-f1tuFtxD-k_gGLSuD9Az1X1S_tkf6FgZiIhcQ5W_Icjjm6aEey8nXnYx';
export const yelp = {
    search: (term,location,sortBy) => { 
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{headers:{Authorization:`Bearer ${apiKey}`}})
        .then(response => response.json())
        .then(jsonResponse =>{
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map( business => {
                  return  {
                    id:business.id,
                    imageSrc:business.image_url,
                    name:business.name,
                    address:business.location.address2,
                    city:business.location.city,
                    state:business.location.state,
                    zipCode:business.location.state,
                    category:business.category,
                    rating:business.rating,
                    reviewCount:business.review_count,
                  }
                })
            }
            else{console.log('there was an error')}
        })
    },
};