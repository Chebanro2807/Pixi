export default class Win {
    constructor() {}
    static win(wheels, score) {
        (Win.winCombination1(wheels)) ? score.changeScoreByPrize(100) : {};
        (Win.winCombination2(wheels)) ? score.changeScoreByPrize(100) : {};
        (Win.winCombination3(wheels)) ? score.changeScoreByPrize(100) : {};
        (Win.winCombination4(wheels)) ? score.changeScoreByPrize(200) : {};
        (Win.winCombination5(wheels)) ? score.changeScoreByPrize(200) : {};
        (Win.winCombination6(wheels)) ? score.changeScoreByPrize(300) : {};
        (Win.winCombination7(wheels)) ? score.changeScoreByPrize(300) : {};
        (Win.winCombination8(wheels)) ? score.changeScoreByPrize(400) : {};
        (Win.winCombination9(wheels)) ? score.changeScoreByPrize(400) : {};
        (Win.winCombination10(wheels)) ? score.changeScoreByPrize(500) : {};
        (Win.winCombination11(wheels)) ? score.changeScoreByPrize(500) : {};
        (Win.winCombination12(wheels)) ? score.changeScoreByPrize(600) : {};
        (Win.winCombination13(wheels)) ? score.changeScoreByPrize(600) : {};
        (Win.winCombination14(wheels)) ? score.changeScoreByPrize(700) : {};
        (Win.winCombination15(wheels)) ? score.changeScoreByPrize(700) : {};
        (Win.winCombination16(wheels)) ? score.changeScoreByPrize(800) : {};
        (Win.winCombination17(wheels)) ? score.changeScoreByPrize(800) : {};
        (Win.winCombination18(wheels)) ? score.changeScoreByPrize(900) : {};
        (Win.winCombination19(wheels)) ? score.changeScoreByPrize(900) : {};
        (Win.winCombination20(wheels)) ? score.changeScoreByPrize(1000) : {};
        (Win.winCombination21(wheels)) ? score.changeScoreByPrize(1000) : {};
        (Win.winCombination22(wheels)) ? score.changeScoreByPrize(1100) : {};
        (Win.winCombination23(wheels)) ? score.changeScoreByPrize(1100) : {};
        (Win.winCombination24(wheels)) ? score.changeScoreByPrize(1200) : {};
        (Win.winCombination25(wheels)) ? score.changeScoreByPrize(1200) : {};
    } 

    static winCombination1(wheels) {
        let wheelTop;
        for (let wheel of wheels){
            if (wheelTop === undefined) {
                wheelTop = wheel.top();
            } else {
                if (!wheelTop.equals(wheel.top())) {
                    return false;
                }
            }
        }
        return true;
    }

    static winCombination2(wheels) {
        let wheelCenter;
        for (let wheel of wheels){
            if (wheelCenter === undefined) {
                wheelCenter = wheel.center();
            } else {
                if (!wheelCenter.equals(wheel.center())) {
                    return false;
                }
            }
        }
        return true;
    }

    static winCombination3(wheels) {
        let wheelBottom;
        for (let wheel of wheels){
            if (wheelBottom === undefined) {
                wheelBottom = wheel.bottom();
            } else {
                if (!wheelBottom.equals(wheel.bottom())) {
                    return false;
                }
            }
        }
        return true;
    }

    static winCombination4(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.top();
            } else {
                if(i===1 || i===3){
                    if (!check.equals(wheel.center())) {
                        return false;
                    }
                } else if(i===2) {
                    if (!check.equals(wheel.bottom())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.top())) {
                        return false;
                    }
                }
                
            }
            ++i;
        }
        return true;
    }

    static winCombination5(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.bottom();
            } else {
                if(i===1 || i===3){
                    if (!check.equals(wheel.center())) {
                        return false;
                    }
                } else if(i===2) {
                    if (!check.equals(wheel.top())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.bottom())) {
                        return false;
                    }
                }
                
            }
            ++i;
        }
        return true;
    }

    static winCombination6(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.center();
            } else {
                if(i===1 || i===2 || i===3){
                    if (!check.equals(wheel.top())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.center())) {
                        return false;
                    }
                }
            }
            ++i;
        }
        return true;
    }

    static winCombination7(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.center();
            } else {
                if(i===1 || i===2 || i===3){
                    if (!check.equals(wheel.bottom())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.center())) {
                        return false;
                    }
                }
            }
            ++i;
        }
        return true;
    }

    static winCombination8(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.top();
            } else {
                if(i===1){
                    if (!check.equals(wheel.top())) {
                        return false;
                    }
                } else if (i===2) {
                    if (!check.equals(wheel.center())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.bottom())) {
                        return false;
                    }
                }
            }
            ++i;
        }
        return true;
    }

    static winCombination9(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.bottom();
            } else {
                if(i===1){
                    if (!check.equals(wheel.bottom())) {
                        return false;
                    }
                } else if (i===2) {
                    if (!check.equals(wheel.center())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.top())) {
                        return false;
                    }
                }
            }
            ++i;
        }
        return true;
    }

    static winCombination10(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.center();
            } else {
                if(i===1){
                    if (!check.equals(wheel.bottom())) {
                        return false;
                    }
                } else if (i===2 || i===4) {
                    if (!check.equals(wheel.center())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.top())) {
                        return false;
                    }
                }
            }
            ++i;
        }
        return true;
    }

    static winCombination11(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.center();
            } else {
                if(i===1){
                    if (!check.equals(wheel.top())) {
                        return false;
                    }
                } else if (i===2 || i===4) {
                    if (!check.equals(wheel.center())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.bottom())) {
                        return false;
                    }
                }
            }
            ++i;
        }
        return true;
    }

    static winCombination12(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.top();
            } else {
                if(i===1 || i===2 || i===3){
                    if (!check.equals(wheel.center())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.top())) {
                        return false;
                    }
                }
            }
            ++i;
        }
        return true;
    }

    static winCombination13(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.bottom();
            } else {
                if(i===1 || i===2 || i===3){
                    if (!check.equals(wheel.center())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.bottom())) {
                        return false;
                    }
                }
            }
            ++i;
        }
        return true;
    }

    static winCombination14(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.top();
            } else {
                if(i===1 || i===3){
                    if (!check.equals(wheel.center())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.top())) {
                        return false;
                    }
                }
            }
            ++i;
        }
        return true;
    }


    static winCombination15(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.bottom();
            } else {
                if(i===1 || i===3){
                    if (!check.equals(wheel.center())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.bottom())) {
                        return false;
                    }
                }
            }
            ++i;
        }
        return true;
    }

    static winCombination16(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.center();
            } else {
                if(i===2){
                    if (!check.equals(wheel.top())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.center())) {
                        return false;
                    }
                }
            }
            ++i;
        }
        return true;
    }

    static winCombination17(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.center();
            } else {
                if(i===2){
                    if (!check.equals(wheel.bottom())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.center())) {
                        return false;
                    }
                }
            }
            ++i;
        }
        return true;
    }

    static winCombination18(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.top();
            } else {
                if(i===2){
                    if (!check.equals(wheel.bottom())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.top())) {
                        return false;
                    }
                }
            }
            ++i;
        }
        return true;
    }

    static winCombination19(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.bottom();
            } else {
                if(i===2){
                    if (!check.equals(wheel.top())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.bottom())) {
                        return false;
                    }
                }
            }
            ++i;
        }
        return true;
    }

    static winCombination20(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.top();
            } else {
                if(i===4){
                    if (!check.equals(wheel.top())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.bottom())) {
                        return false;
                    }
                }
            }
            ++i;
        }
        return true;
    }

    static winCombination21(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.bottom();
            } else {
                if(i===4){
                    if (!check.equals(wheel.bottom())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.top())) {
                        return false;
                    }
                }
            }
            ++i;
        }
        return true;
    }

    static winCombination22(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.center();
            } else {
                if(i===1 || i===3){
                    if (!check.equals(wheel.bottom())) {
                        return false;
                    }
                } else if (i===2){
                    if (!check.equals(wheel.top())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.center())) {
                        return false;
                    }
                }
            }
            ++i;
        }
        return true;
    }

    static winCombination23(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.center();
            } else {
                if(i===1 || i===3){
                    if (!check.equals(wheel.top())) {
                        return false;
                    }
                } else if (i===2){
                    if (!check.equals(wheel.bottom())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.center())) {
                        return false;
                    }
                }
            }
            ++i;
        }
        return true;
    }

    static winCombination24(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.top();
            } else {
                if(i===2 || i===4){
                    if (!check.equals(wheel.top())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.bottom())) {
                        return false;
                    }
                }
            }
            ++i;
        }
        return true;
    }

    static winCombination25(wheels) {
        let check;
        let i = 0;
        for (let wheel of wheels){
            if (check === undefined) {
                check = wheel.bottom();
            } else {
                if(i===2 || i===4){
                    if (!check.equals(wheel.bottom())) {
                        return false;
                    }
                } else {
                    if (!check.equals(wheel.top())) {
                        return false;
                    }
                }
            }
            ++i;
        }
        return true;
    }


}