


let ordinal_numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < ordinal_numbers.length; i++) {
    let number = ordinal_numbers[i];
    let suffix: string;

    if (number === 1) {
        suffix = 'st';
    } else if (number === 2) {
        suffix = 'nd';
    } else if (number === 3) {
        suffix = 'rd';
    } else {
        suffix = 'th';
    }

    console.log(`${number}${suffix}`);
}
