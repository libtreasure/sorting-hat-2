export function getHouse(name : string){
    let houseArray: string [] = ["Hotelpuff", "Ridesclaw", "Gryffinsure", "Slythcarin"];
    const randomIndex: number = Math.floor(Math.random() * houseArray.length);
    let houseName: string = houseArray[randomIndex];
    let nameArray: string [] = ["Harry","Tom","Ron","Ginny"];
    if (nameArray.includes("Harry")){
        return houseArray[0]; } else {
        return "Slythcarin";
    }
};