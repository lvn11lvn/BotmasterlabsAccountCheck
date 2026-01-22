const rsa = require('./lpass.js');
function au(a, u, login, password, d1) {
    let  n = '#i' + a
    let L = login
    let P = password
    let t = (new Date()).getTime();
    // let t = 1748036974761
    const randm = parseInt(u.replace(/[^0-56-9&]/g, '').split('&', 2)[0])
    const sec =  parseInt(u.replace(/[^0-56-9&]/g, '').split('&', 2)[1])
    const d = {
        l: t,
        s: t - (randm - n.charCodeAt(2) - sec),
        d: d1.split('').reverse().join(''),
        p: rsa.rsa.encrypt(L + '|' + t % 1000 + '|' + P)
    };
    return d
}

module.exports = {
  au: au,
};

// var res = au("c",
//     "/sg.php?randm=73&sec=30001",
//     "seokey88",
//     "qyQky1-bimrym-gyzcev!",
//     "紘猲㘊磧㎞䂉瀮㚨塪枂簐")
// console.log(res)