class Animals {
    constructor (name, race, color, eayColor, legs, favoriteFood){
        this.Name = name;
        this.Race = race;
        this.Color = color;
        this.EayColor = eayColor;
        this.LegsNum = legs;
        this.FavoriteFood = favoriteFood;
        this.IsSitingNow = false;
    }
    sitingNow() {
        this.IsSitingNow = true;
        console.log(`${this.Name} is siting now`);
        return
    }
    notSitingNow() {
        this.IsSitingNow = false;
        console.log(`${this.Name} do not siting now`);
        return
    }
}
const gyvunas1 = new Animals('Rex', 'dog', 'black', 'blue', 4, 'sausage')
console.log(gyvunas1);
const gyvunas2 = new Animals('Rainis', 'cat', 'white', 'red', 4, 'fish')
console.log(gyvunas2);
const gyvunas3 = new Animals('ChiaChia', 'hamster', 'brown', 'blue', 4, 'wood')
console.log(gyvunas3);
const gyvunas4 = new Animals('Jack', 'parrut', 'black', 'blue', '2 wings', 'seeds')
console.log(gyvunas4);


gyvunas1.sitingNow();
gyvunas1.notSitingNow();