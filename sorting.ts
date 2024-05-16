const houses = ['Ridesclaw', 'Hotelpuff', 'Gryffinsure', 'Slythcarin'];

export function sortingHat(name:String) {

    let randomHouse = Math.floor(Math.random() * 4);
    return`${name.charAt(0).toUpperCase() + name.slice(1)}, you are in ${houses[randomHouse]}!`;
}




