 async function checkWeath(){

    let api_key= 'd9c3b93b84a92d09bab40f0c9c24b6c6'
    let api_url='http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${API key}'

    let response = await fetch(api_url)

    let data= response.json()
    console.log(data)
}