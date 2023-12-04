// The first human year corresponds to 15 cat years.
// The second human year corresponds to 9 cat years.
// Every subsequent human year corresponds to 4 cat years.

function catAge(age) {
    let catsAge = 0

    for (let start = 1; start <= age; start += 1) {
        switch (start) {
            case 1:
                catsAge += 15;
                break;
            case 2:
                catsAge += 9;
                break;
            default:
                catsAge += 4;
                break;
        }
    }
    console.log(catsAge);
}

catAge(2);