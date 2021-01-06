function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsSync() {
    let headsCount = 0; 
    let attempts = 0; 
    while (headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }

    return `It took ${attempts} tries to flip five "heads"`;
}

// console.log( fiveHeadsSync() ); 
// console.log( "This is run after the fiveHeadsSync function completes" ); 

function fiveHeads() {
    let headsCount = 0; 
    let attempts = 0; 
    while (headsCount < 5) {
        attempts++; 
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if (result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }

    return new Promise((resolve, reject) => {
        if (headsCount === 5 && attempts < 100) {
            resolve(`It took ${attempts} tries to flip five "heads"`);
        } else {
            reject("Took too many tries! I give up.")
        }
    });
}; 

fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) ); 
    console.log( "When does this run now? ");