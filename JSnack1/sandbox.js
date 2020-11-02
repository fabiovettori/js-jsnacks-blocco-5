$(document).ready(function(){
    // JSnack 1
    // Creare un array di oggetti: ogni oggetto descriverà una bici
    // da corsa con le seguenti proprietà: nome e peso.
    // Stampare a schermo la bici con peso minore.

    // step 1
    // creo un array con n oggetti aventi le sole proprietà di none e peso
    var bikes = [
        {
            name: 'Z102',
            weight: 30
        },
        {
            name: 'Hawk',
            weight: 25
        },
        {
            name: 'Hornett',
            weight: 36
        },
    ];
    // console.log(bikes);

    var weights = [];
    for (var i = 0; i < bikes.length; i++) {
        var itemList = bikes[i];

        weights.push(bikes[i]['weight']);
    }
    // console.log(weights);

    // console.log(weights);
    var sortWeight = weights.sort();
    // console.log(sortWeight);

    for (var i = 0; i < bikes.length; i++) {
        var itemList = bikes[i];

        if (itemList['weight'] == weights[0]) {
            console.log(itemList.name);
        }
    }
});
