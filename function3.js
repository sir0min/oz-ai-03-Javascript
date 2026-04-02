function getAverage(scores) {
    if (scores.length === 0) {
        return 0;
    };

    let sum = 0;

    for (const score of scores) {
        sum += score
    };

    return sum / scores.length;
};

const scores = [80, 85, 92, 97];
const average = getAverage(scores)
console.log(average);