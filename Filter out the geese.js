function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    return birds.filter(bird => !geese.includes(bird))
};

gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher","pi"])