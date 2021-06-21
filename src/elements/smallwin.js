export default class SmallWin {
    constructor() {}
    
    static win(wheels, score) {
            SmallWin.square1win1(wheels, score);
    }

    static square1win1(wheels, score) {
        let poses = ["top","center", "bottom"];
        for (let i=0; i<3; i++) {
            poses.forEach(pos => {
                if (wheels[i].pos(pos)._name === wheels[i+1].pos(pos)._name && wheels[i].pos(pos)._name === wheels[i+2].pos(pos)._name) {
                    score.changeScoreByPrize(111);
                }
            });
        }
    }
}