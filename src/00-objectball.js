function gameObject() {
    let gameObject = {
        home: {
            teamName:   'Brooklyn Nets',
            colors:     ['black','white'],
            players:    {
                'Alan Anderson': {},
                'Reggie Evans': {},
                'Brook Lopez': {},
                'Mason Plumlee':{},
                'Jason Terry': {}
            }
        },
        away: {
            teamName:   'Charlotte Hornets',
            colors:     ['turquoise','purple'],
            players:    {
                'Jeff Adrien': {},
                'Bismak Biyombo': {},
                'DeSagna Diop': {},
                'Ben Gordon': {},
                'Brendan Haywood': {}
            }
        }
    };

    const playerStatArrs = {
        'Alan Anderson':      [ 0, 16, 22, 12, 12,  3,  1,  1],
        'Reggie Evans':       [30, 14, 12, 12, 12, 12, 12,  7],
        'Brook Lopez':        [11, 17, 17, 19, 10,  3,  1, 15],
        'Mason Plumlee':      [ 1, 19, 26, 12,  6,  3,  8,  5],
        'Jason Terry':        [31, 15, 19,  2,  2,  4, 11,  1],
        'Jeff Adrien':        [ 4, 18, 10,  1,  1,  2,  7,  2],
        'Bismak Biyombo':     [ 0, 16, 12,  4,  7,  7, 15, 10],
        'DeSagna Diop':       [ 2, 14, 24, 12, 12,  4,  5,  5],
        'Ben Gordon':         [ 8, 15, 33,  3,  2,  1,  1,  0],
        'Brendan Haywood':    [33, 15,  6, 12, 12, 22,  5, 12]
    };
    const statList = ['number','shoe','points','rebounds','assists','steals','blocks','slamDunks'];
    for (let team in gameObject){
        for (let player in gameObject[team].players){
            for (let i = 0; i < 8; i++){
                let playerStats = playerStatArrs[player];
                gameObject[team].players[player][statList[i]] = playerStats[i];
                
                // console.log(gameObject[team].players[player]);
                debugger
            }
        }
    }

    return gameObject;
}

function getPlayers(){
    /* Helper function that returns an object 
       containing all player objects from both teams */
    const object = gameObject();
    let roster = {};
    for (let team in object){
        roster = {
            ...roster,
            ...object[team]['players']
        }
    }
    return roster;
}

function numPointsScored(playerName){
    const roster = getPlayers();
    return roster[playerName]['points'];
}

function shoeSize(playerName){
    const roster = getPlayers();
    return roster[playerName]['shoe'];
}

function teamColors(teamName){
    const object = gameObject();
    for (let team in object){
        if (team['teamName'] === teamName){
            return team['colors'];
        }
    }
}

function teamNames(){
    let teamNames = [];
    const object = gameObject();
    for (let team in object){
        teamNames.push(object[team]['teamName']);
    }
    return teamNames;
}

function playerNumbers(teamName){
    const roster = getPlayers();
    let nums = [];
    for (let player in roster){
        nums.push(roster[player]['number']);
    }
    return nums;
}

function playerStats(playerName){
    const roster = getPlayers();
    return roster[playerName];
}

function bigShoeRebounds() {
    const roster = getPlayers();
    let biggestShoes = roster[roster.keys[0]];
    for (let player in roster){
        if (shoeSize(player) > shoeSize(biggestShoes)){
            biggestShoes = player;
        }
    }
    return roster[biggestShoes]['rebounds'];
}

function playerWithLongestName(){
    const roster = getPlayers();
    let longestName = '';
    for (let player in roster){
        if (player.length > longestName.length){
            longestName = player;
        }
    }
    return longestName;
}

function doesLongNameStealATon(){
    const roster = getPlayers();
    const longestName = playerWithLongestName();
    let mostSteals = roster[roster.keys[0]]
    for (let player in roster){
        if (roster[player]['steals'] > roster[mostSteals]['steals']){
            mostSteals = player;
        }
    }
    return mostSteals === longestName;
}