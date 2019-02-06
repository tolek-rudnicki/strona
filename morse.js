const dict = {
    a: '._',    b: '_...',  c: '_._.',  d: '_..',   e: '.',     f: '.._.',
    g: '__.',   h: '....',  i: '..',    j: '.___',  k: '_._',   l: '._..',
    m: '__',    n: '_.',    o: '___',   p: '.__.',  q: '__._',  r: '._.',
    s: '...',   t: '_',     u: '.._',   v: '..._',  w: '.__',   x: '_.._',
    y: '_.__',  z: '__..',  0: '_____', 1: '.____', 2: '..___', 3: '...__',
    4: '...._', 5: '.....', 6: '_....', 7: '__...', 8: '___..', 9: '____.'
};

function toMorse(sentence) {
    var morse=[];
    for(var i=0; i<sentence.length; i=i+1) {
        var c=sentence[i].toLowerCase();
        morse.push(dict[c]);
    }

    return morse.join(" ");
}

function fromMorse(morse) {
    var sentence = [];
    const morseList = morse.split(' ');
    const chars = Object.keys(dict);
    for (var i = 0; i < morseList.length; i = i + 1) {
        var pos = dict.indexOf(morseList[i]);
        var symbol = chars[pos];
        sentence.push(symbol);
    }
    return sentence.join('');
}