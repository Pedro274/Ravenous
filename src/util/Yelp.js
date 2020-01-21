const apiKey = 'kXxTjTYhaiMwWs9JoELqMHBmqMSozoTiJjJD6Kxe7QfjX099jJbZMZWfAopJGS1dxQamMiG-f1tuFtxD-k_gGLSuD9Az1X1S_tkf6FgZiIhcQ5W_Icjjm6aEey8nXnYx';
const endPoint = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
const yelp = {
    search: (term,location,sortBy) => { 
        return fetch(endPoint,{headers:{Authorization:`Bearer ${apiKey}`}})
        .then(response => response.json())
        .then(jsonResponse =>{
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map( business => {
                  return  {
                        
                  }
                })
            }
            else{}
        })
          
    
    
    },
};