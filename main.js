const verb = ['run', 'roll', 'fly', 'sing', 'speak', 'toss', 'transport', 'drive', 'gallop', 'crawl', 'land', 'fling', 'meander', 'slip', 'slide'];
const noun = ['stick', 'cat', 'bird', 'song', 'toad', 'dream', 'sandbox', 'food', 'dog', 'exercise', 'ice cream', 'lion', 'nap', 'position'];
const adverb = ['enthusiastically', 'slowly', 'angrily', 'excitedly', 'happily', 'sadly', 'hungrily', 'calmly', 'intentionally', 'sloppily', 'longingly'];
const adjective = ['cushy', 'springy', 'solid', 'hardy','rocky', 'cloudy', 'happy', 'silly', 'dirty', 'crazy', 'mangy', 'snuggly'];

// random verb
const returnRandVerb = () => {
    //const verb = ['run', 'roll', 'fly', 'sing', 'speak', 'toss', 'transport', 'drive', 'gallop', 'crawl', 'land', 'fling', 'meander', 'slip', 'slide'];
    return verb[Math.floor(Math.random() * 15)];
};

// random noun
const returnRandNoun = () => {
    return noun[Math.floor(Math.random() * 14)];
};

// random adverb
const returnRandAdv = () => {
    return adverb[Math.floor(Math.random() * 11)];
};

// random adjective
const returnRandAdj = () => {
    return adjective[Math.floor(Math.random() * 12)];
};

// Ellie mad lib
const ellie = () => {
    let elVerb = returnRandVerb();
    let elNoun = returnRandNoun();
    let elAdv = returnRandAdv();
    console.log(`Ellie, the Rat Terrier, loves to ${elVerb} around outside. She ${elAdv} attacks any ${elNoun} that comes into her backyard. She particularly likes to chase and eat bugs.`);
};

// Samson mad lib
const samson = () => {
    let samVerb = returnRandVerb();
    let samNoun = returnRandNoun();
    let samAdj = returnRandAdj();
    console.log(`Samson, the Pomeranian, loves to sleep. His main goal in life is to ${samVerb} onto his back and point his legs in the air. His favorite ${samNoun} is walking from his pillow in the living room to his ${samAdj}, comfy bed in the bedroom.`);
};
ellie();
console.log();
samson();