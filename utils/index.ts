export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '380ab21635msh9d041a2f111d5dcp180d63jsn23c5f39518b1',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();
    return result;
    
} 