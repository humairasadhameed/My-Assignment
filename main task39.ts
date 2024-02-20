function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Example calls to the function
let location1 = city_country('Lahore', 'Pakistan');
let location2 = city_country('Tokyo', 'Japan');
let location3 = city_country('New York', 'USA');

// Print the returned values
console.log(location1);
console.log(location2);
console.log(location3);
