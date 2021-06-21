export default class SmallWin {
    constructor() {}
    
    static win(wheels, score) {
        SmallWin.rowWin(wheels, score);
        SmallWin.diagonalWinRight(wheels, score);
        SmallWin.diagonalWinLeft(wheels, score);
    }

    static rowWin(wheels, score) {
        let poses = ["top","center", "bottom"];
        for (let i=0; i<3; i++) {
            poses.forEach(pos => {
                if (wheels[i].pos(pos).equals(wheels[i+1].pos(pos)) && wheels[i].pos(pos).equals(wheels[i+2].pos(pos))) {
                    score.changeScoreByPrize(111);
                }
            });
        }
    }

    static diagonalWinRight(wheels, score) {
        for (let i=0; i<3; i++) {
            if (wheels[i].top().equals(wheels[i+1].center()) && wheels[i].top().equals(wheels[i+2].bottom())) {
                score.changeScoreByPrize(222);
            }   
        }
    }

    static diagonalWinLeft(wheels, score) {
        for (let i=0; i<3; i++) {
            if (wheels[i].bottom().equals(wheels[i+1].center()) && wheels[i].bottom().equals(wheels[i+2].top())) {
                score.changeScoreByPrize(222);
            }   
        }
    }
}