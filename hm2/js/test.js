let number= +prompt("введите последнее число диапазона" );

if (number<5)
{
    console.log('Sorry, no numbers');
}
else {
    for (let i = 0; i <= number; i++) {
        let k = i % 5;
        if (k === 0) {
            console.log(i)
        }

    }
}