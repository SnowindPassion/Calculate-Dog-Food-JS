const InvalidInputErrorTypes = {
    DogsArgumentInvalidError: new Error('Dogs argument is not an array'),
    NumDogsArgumentNotSpecified: new Error('numDogs argument is not specified for a dog'),
    NumDogsArgumentInvalidError: new Error('numDogs argument is not a positive integer'),
    FoodAmountArgumentNotSpecified: new Error('foodRequiredPerMonth argument is not specified for a dog'),
    FoodAmountArgumentInvalidError: new Error('foodRequiredPerMonth argument is not a positive integer'),
    FoodAmountRemainingArgumentInvalidError: new Error('foodRemaining argument is not a positive integer'),
    AdditionalFoodPercentageNumberArgumentInvalidError: new Error('additionalFoodPercentage argument is not a positive integer'),
}

const validateCalculateDogFoodFunctionArguments = (dogs, foodRemaining, additionalFoodPercentage) => {
    if (!Array.isArray(dogs)) throw InvalidInputErrorTypes.DogsArgumentInvalidError;
    if (!Number.isInteger(foodRemaining) || foodRemaining < 0) throw InvalidInputErrorTypes.FoodAmountRemainingArgumentInvalidError;
    if (!Number.isInteger(additionalFoodPercentage) || additionalFoodPercentage < 0) throw InvalidInputErrorTypes.AdditionalFoodPercentageNumberArgumentInvalidError;

    for (let i = 0; i < dogs.length; i++) {
        const { foodRequiredPerMonth, numDogs } = dogs[i];
        if (foodRequiredPerMonth === undefined) throw InvalidInputErrorTypes.FoodAmountArgumentNotSpecified;
        if (!Number.isInteger(foodRequiredPerMonth) || foodRequiredPerMonth < 0) throw InvalidInputErrorTypes.FoodAmountArgumentInvalidError;

        if (numDogs === undefined) throw InvalidInputErrorTypes.NumDogsArgumentNotSpecified;
        if (!Number.isInteger(numDogs) || numDogs < 0) throw InvalidInputErrorTypes.NumDogsArgumentInvalidError;
    }
}

const calculateDogFood = (dogs, foodRemaining = 0, additionalFoodPercentage = 20) => {
    validateCalculateDogFoodFunctionArguments(dogs, foodRemaining, additionalFoodPercentage);

    const totalFood = dogs.reduce((acc, { foodRequiredPerMonth, numDogs }) => acc + foodRequiredPerMonth * numDogs, 0);

    if (foodRemaining >= totalFood) return 0;

    const additionalFoodRequired = Math.ceil((totalFood - foodRemaining) * (additionalFoodPercentage / 100.0));

    return totalFood - foodRemaining + additionalFoodRequired;
}

const calculateDogFoodForMosaic = (numSmallDogs = 0, numMediumDogs = 0, numLargeDogs = 0, foodRemaining = 0) => {
    const dogs = [
        { foodRequiredPerMonth: 10, numDogs: numSmallDogs },
        { foodRequiredPerMonth: 20, numDogs: numMediumDogs },
        { foodRequiredPerMonth: 30, numDogs: numLargeDogs },
    ];

    return calculateDogFood(dogs, foodRemaining);
}

module.exports = {
    calculateDogFood,
    calculateDogFoodForMosaic,
    InvalidInputErrorTypes
}