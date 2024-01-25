const queryStrings={
    app_id:process.env.REACT_APP_EDAMAN_ID,
    app_key:process.env.REACT_APP_EDAMAN_KEY
}


export const featchData = async (defaultQuery)=>{
    const {app_id, app_key} = queryStrings
    try {
        const data= await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`)
        const response = data.json();
        return response;
    } catch (e) {
        console.log(e,'Something went wrong')
        return e
    }
}

export const featchTabData = async (defaultQuery)=>{
    const {app_id, app_key} = queryStrings
    try {
        const data= await fetch(`https://api.edamam.com/api/recipes/v2/${defaultQuery}?type=public&app_id=${app_id}&app_key=${app_key}`)
        const response = data.json();
        return response;
    } catch (e) {
        console.log(e,'Something went wrong')
        return e
    }
}
