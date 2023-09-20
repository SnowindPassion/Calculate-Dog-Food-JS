const {
  calculateDogFood,
  calculateDogFoodForMosaic,
  InvalidInputErrorTypes,
} = require('./calculateDogFood');

describe('calculateDogFoodForMosaic function should return correct results', () => {

  it('should return 0 when there are no dogs and no food remaining', () => {
    const result = calculateDogFoodForMosaic();
    expect(result).toBe(0);
  });

  it('should return the correct amount of food remaining when there are only small dogs and enough food remaining', () => {
    const result = calculateDogFoodForMosaic(2);
    expect(result).toBe(24);
  });

  it('should return the correct amount of food remaining when there are only medium dogs and enough food remaining', () => {
    const result = calculateDogFoodForMosaic(0, 3);
    expect(result).toBe(72);
  });

  it('should throw an error when the input is invalid', () => {
    expect(() => calculateDogFoodForMosaic(-1)).toThrow(InvalidInputErrorTypes.NumDogsArgumentInvalidError);
  });

  it('should return the correct amount of dog food when there are all types of dogs', () => {
    const numSmallDogs = 3;
    const numMediumDogs = 1;
    const numLargeDogs = 4;
    const foodRemaining = 15;

    const result = calculateDogFoodForMosaic(numSmallDogs, numMediumDogs, numLargeDogs, foodRemaining);

    expect(result).toBe(186);
  });

  it('should return 0 when there are no dogs and no food remaining', () => {
    const result = calculateDogFoodForMosaic();
    expect(result).toBe(0);
  });
});

describe('calculateDogFood function should return correct results for valid arguments', () => {
  it('should calculate total food required correctly when given valid arguments', () => {
    const dogs = [
      { foodRequiredPerMonth: 10, numDogs: 3 },
      { foodRequiredPerMonth: 20, numDogs: 1 },
      { foodRequiredPerMonth: 30, numDogs: 4 }
    ];
    const foodRemaining = 15;
    const additionalFoodPercentage = 20;

    const result = calculateDogFood(dogs, foodRemaining, additionalFoodPercentage);

    expect(result).toBe(186);
  });

  it('should return the minimum integer greater than or equal to the actual calculated value', () => {
    const dogs = [
      { foodRequiredPerMonth: 10, numDogs: 3 },
      { foodRequiredPerMonth: 20, numDogs: 1 },
      { foodRequiredPerMonth: 29, numDogs: 4 }
    ];
    const foodRemaining = 15;
    const additionalFoodPercentage = 20;

    const result = calculateDogFood(dogs, foodRemaining, additionalFoodPercentage);

    expect(result).toBe(182);
  });

  it('should return the minimum total food required ', () => {
    const dogs = [
      { foodRequiredPerMonth: 10, numDogs: 3 },
      { foodRequiredPerMonth: 20, numDogs: 1 },
      { foodRequiredPerMonth: 30, numDogs: 4 }
    ];
    const foodRemaining = 15;
    const additionalFoodPercentage = 20;

    const result = calculateDogFood(dogs, foodRemaining, additionalFoodPercentage);

    expect(result).toBe(186);
  });

  it('should return 0 when food remaining is greater than or equal to total food required', () => {
    const dogs = [
      { foodRequiredPerMonth: 2, numDogs: 3 },
      { foodRequiredPerMonth: 1, numDogs: 2 },
      { foodRequiredPerMonth: 3, numDogs: 1 }
    ];
    const foodRemaining = 15;
    const additionalFoodPercentage = 20;

    const result = calculateDogFood(dogs, foodRemaining, additionalFoodPercentage);

    expect(result).toBe(0);
  });

  it('should calculate additional food required correctly when given valid arguments', () => {
    const dogs = [
      { foodRequiredPerMonth: 2, numDogs: 3 },
      { foodRequiredPerMonth: 1, numDogs: 2 },
      { foodRequiredPerMonth: 3, numDogs: 1 }
    ];
    const foodRemaining = 10;
    const additionalFoodPercentage = 20;

    const result = calculateDogFood(dogs, foodRemaining, additionalFoodPercentage);

    expect(result).toBe(2);
  });
});

describe('calculateDogFood function should throw appropriate errors for invalid arguments', () => {
  it('should throw DogsArgumentInvalidError when dogs argument is not an array', () => {
    const dogs = "not an array";
    const foodRemaining = 0;
    const additionalFoodPercentage = 20;

    expect(() => calculateDogFood(dogs, foodRemaining, additionalFoodPercentage)).toThrow(InvalidInputErrorTypes.DogsArgumentInvalidError);
  });

  it('should throw FoodAmountRemainingArgumentInvalidError when foodRemaining argument is not a positive integer', () => {
    const dogs = [
      { foodRequiredPerMonth: 2, numDogs: 3 },
      { foodRequiredPerMonth: 1, numDogs: 2 },
      { foodRequiredPerMonth: 3, numDogs: 1 }
    ];
    const foodRemaining = -5;
    const additionalFoodPercentage = 20;

    expect(() => calculateDogFood(dogs, foodRemaining, additionalFoodPercentage)).toThrow(InvalidInputErrorTypes.FoodAmountRemainingArgumentInvalidError);
  });

  it('should throw AdditionalFoodPercentageNumberArgumentInvalidError when additionalFoodPercentage argument is not a positive integer', () => {
    const dogs = [
      { foodRequiredPerMonth: 2, numDogs: 3 },
      { foodRequiredPerMonth: 1, numDogs: 2 },
      { foodRequiredPerMonth: 3, numDogs: 1 }
    ];
    const foodRemaining = 0;
    const additionalFoodPercentage = -10;

    expect(() => calculateDogFood(dogs, foodRemaining, additionalFoodPercentage)).toThrow(InvalidInputErrorTypes.AdditionalFoodPercentageNumberArgumentInvalidError);
  });

  it('should throw FoodAmountArgumentNotSpecified when foodRequiredPerMonth is not specified for a dog', () => {
    const dogs = [
      { numDogs: 3 },
      { foodRequiredPerMonth: 1, numDogs: 2 },
      { foodRequiredPerMonth: 3, numDogs: 1 }
    ];
    const foodRemaining = 0;
    const additionalFoodPercentage = 20;

    expect(() => calculateDogFood(dogs, foodRemaining, additionalFoodPercentage)).toThrow(InvalidInputErrorTypes.FoodAmountArgumentNotSpecified);
  });

  it('should throw FoodAmountArgumentInvalidError when foodRequiredPerMonth is not a positive integer for a dog', () => {
    const dogs = [
      { foodRequiredPerMonth: -2, numDogs: 3 },
      { foodRequiredPerMonth: 1, numDogs: 2 },
      { foodRequiredPerMonth: 3, numDogs: 1 }
    ];
    const foodRemaining = 0;
    const additionalFoodPercentage = 20;

    expect(() => calculateDogFood(dogs, foodRemaining, additionalFoodPercentage)).toThrow(InvalidInputErrorTypes.FoodAmountArgumentInvalidError);
  });

  it('should throw NumDogsArgumentNotSpecified when numDogs is not specified for a dog', () => {
    const dogs = [
      { foodRequiredPerMonth: 2 },
      { foodRequiredPerMonth: 1, numDogs: 2 },
      { foodRequiredPerMonth: 3, numDogs: 1 }
    ];
    const foodRemaining = 0;
    const additionalFoodPercentage = 20;

    expect(() => calculateDogFood(dogs, foodRemaining, additionalFoodPercentage)).toThrow(InvalidInputErrorTypes.NumDogsArgumentNotSpecified);
  });

  it('should throw NumDogsArgumentInvalidError when numDogs is not a positive integer for a dog', () => {
    const dogs = [
      { foodRequiredPerMonth: 2, numDogs: 3 },
      { foodRequiredPerMonth: 1, numDogs: -2 },
      { foodRequiredPerMonth: 3, numDogs: 1 }
    ];
    const foodRemaining = 0;
    const additionalFoodPercentage = 20;

    expect(() => calculateDogFood(dogs, foodRemaining, additionalFoodPercentage)).toThrow(InvalidInputErrorTypes.NumDogsArgumentInvalidError);
  });
});