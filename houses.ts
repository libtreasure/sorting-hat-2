export function getHouse(name : string){
    let houseArray: string [] = ["Hotelpuff", "Ridesclaw", "Gryffinsure", "Slythcarin"];
    const randomIndex: number = Math.floor(Math.random() * houseArray.length);
    // let houseName: string | undefined = houseArray[randomIndex];
    // let nameArray: string [] = ["Harry","Tom","Ron","Ginny"];
    if (name.startsWith("H")) {
        return name + " you are in " + "Gryffinsure"
    } else {
        return name + " you are in " + "Slythcarin"
    }

}