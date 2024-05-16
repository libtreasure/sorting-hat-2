const houses = ['Ridesclaw', 'Hotelpuff', 'Gryffinsure', 'Slythcarin'];
const housesWithStudents = {
    'ridesclaw': [],
    'hotelpuff': [],
    'gryffinsure': [],
    'slythcarin': []
};

export function sortingHat(name:String) {
const firstCharOfName = name.charAt(0)
    if (name === 'tom' || name === 'voldemort') {
        return 'Dark Lords are not permitted to work here!';
    }
    if (firstCharOfName.toLocaleLowerCase() === 'h'){
        return`${name.charAt(0).toUpperCase() + name.slice(1)}, you are in Gryffinsure!`;
    }

    let randomHouse = Math.floor(Math.random() * 4);
    return`${name.charAt(0).toUpperCase() + name.slice(1)}, you are in ${houses[randomHouse]}!`;
}




