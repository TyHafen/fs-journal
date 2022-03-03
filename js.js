
// INPUT 2 strings good, evil
function battle(goodTeam, evilTeam) {
    let goodTeam1 = [goodTeam.split()]
    let evilTeam1 = [evilTeam.split()]
    let goodPoints = 0

    for (let i = 0; i < goodTeam1.length; i++) {
        const member = goodTeam1[i];
        goodPoints += (goodTeam1[0] * 1) + (goodTeam1[1] * 2) + (goodTeam1[2] * 3) + (goodTeam1[3] * 3) + (goodTeam1[4] * 4) + (goodTeam1[5] * 10)
    }
    return goodPoints
}

battle('4 3 2 1 0 1', '3 4 2 3 1 1 0')
