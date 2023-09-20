const { calculateDogFoodForMosaic } = require('./calculateDogFood');

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
});
