/*function convertCelciustoFahrenheit(a){
    var counter = Math.round(a*9/5 + 32);
    return ('Dzis jest ' + a +' stopi Celsjusza, czyli ' + counter.toString() +
        ' stopni Farenhajta')
}
console.log(convertCelciustoFahrenheit(20));


var randomArray = (Math.round(Math.random()*10)*4)+1;
console.log(randomArray)
var loopedRandomArray = [];
for(var i = 0; i < randomArray; i++){
    loopedRandomArray[i] = 'Object ' + i;
}
var halfArray = (loopedRandomArray.length)/2;
var result = loopedRandomArray.slice(halfArray-2, halfArray+3);
console.log(result);


var firstTeamScore = 2;
var secondTeamScore = 2;

var gameResult = firstTeamScore > secondTeamScore ?
    'First team wins!'
    :
    firstTeamScore < secondTeamScore ?
        'Second team wins!'
        :
        'Draw!';
console.log(gameResult);



var a = -5;
var b = 6;
var c = -2;


    var ddelta = b*b - 4*a*c
console.log(ddelta);
var typeOfDdelta = ddelta > 0 ?
    'wiekszy od 0'
    :
    ddelta === 0 ?
        'rowny 0'
        :
        'mniejszy od zera';
console.log(typeOfDdelta);
var numberOfEquals = ddelta > 0 ?
    'posiada 2 rozwiazania'
    :
    ddelta === 0 ?
        'posiada jedno rozwiazanie'
        :
        'nie posiada rozwiazan';
console.log(numberOfEquals);
/*
var zeroPlaces = delta > 0 ?
    [((-b + Math.sqrt(delta))/(a * 2)), ((-b - Math.sqrt(delta))/(a * 2))]
    :
    delta === 0 ?
        [(-b/(a * 2))]
        :
        'brak miejsc zerowych';
console.log(zeroPlaces);

console.log('Poniewaz wyroznik trojmianu kwadratowego jest ' + typeOfDelta + ', funkcja ' + numberOfEquals +
 ', czyli ' + zeroPlaces).
/*
var a = 1;
var b = 6;
var c = 0;


var delta = b * b - 4 * a * c
console.log(delta);
var typeOfDelta = delta > 0 ?
    'wiekszy od 0'
    :
    delta === 0 ?
        'rowny 0'
        :
        'mniejszy od zera';
console.log(typeOfDelta);
var numberOfEquals = delta > 0 ?
    'posiada 2 rozwiazania'
    :
    delta === 0 ?
        'posiada jedno rozwiazanie'
        :
        'nie posiada rozwiazan';
console.log(numberOfEquals);

var zeroPlaces = function (i) {
    var i = delta > 0 ?
        [((-b + Math.sqrt(delta)) / (a * 2)), ((-b - Math.sqrt(delta)) / (a * 2))]
        :
        delta === 0 ?
            [(-b / (a * 2))]
            :
            'brak miejsc zerowych';
    return i;
    console.log(i);
}
zeroPlaces(1)


function sampleFunction(a, b, c) {
    var delta = b*b - 4 * a * c
    var typeOfDelta = delta > 0 ? ['wiekszy od 0', 'posiada 2 rozwiazania',
            [((-b + Math.sqrt(delta)) / (a * 2))+' ', ((-b - Math.sqrt(delta)) / (a * 2))]]
        :
        delta === 0 ?
            ['rowny 0', 'posiada jedno rozwiazanie', (-b / (a * 2))]
            :
            ['mniejszy', 'nie posiada rozwiazan', 'nie jest styczna do osi odciętych'];
    return 'Ponieważ wyroznik trojmianu kwadratowego jest ' + typeOfDelta[0] + ', funkcja ' + typeOfDelta[1] +
        ' czyli ' + typeOfDelta[2] + '.';

}
console.log(sampleFunction(-1, 3, 4))
console.log(sampleFunction(2, -4, 2))
console.log(sampleFunction(-5, 6, -2))


function confitmation() {

    if ((confirm('would you like to answer my question?')) == '') {
        alert('Come back!')
    } else {
        while ((prompt('What is your name?')) === '') {
            alert('Please type your name')
        }
    }
}

confitmation();

*/