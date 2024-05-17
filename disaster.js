class DisasterRecoverySystem {
    constructor() {
        this.situations = {};
    }
    addSituation(location, situation) {
        if (!this.situations[location]) {
            this.situations[location] = [];
        }
        this.situations[location].push(situation);
    }
    getSituation(location) {
        return this.situations[location];
    }
}

const disaster = new DisasterRecoverySystem();
disaster.addSituation("Athiriver", "Flood");
disaster.addSituation("Kitengela", "Earthquake");
console.log(disaster.getSituation("Athiriver")); 
console.log(disaster.getSituation("Kitengela")); 