
const RepeatedString = require("./RepeatedString");


 

test('test 0', () => {

    // Given
    let repeatedString = new RepeatedString();
    let pattern = "aba";
    let length = 10;

    // When
    let actual = repeatedString.calculateNumOfA(pattern, length)
    
    // Then 
    let expected = 7;
    expect(actual).toEqual(expected);

});

test('test 1', () => {

    // Given
    let repeatedString = new RepeatedString();
    let pattern = "a";
    let length = 1000000000000;

    // When
    let actual = repeatedString.calculateNumOfA(pattern, length)
    
    // Then 
    let expected = 1000000000000;
    expect(actual).toEqual(expected);

});

test('test 2', () => {

    // Given
    let repeatedString = new RepeatedString();
    let pattern = "abca";
    let length = 15;

    // When
    let actual = repeatedString.calculateNumOfA(pattern, length)
    
    // Then 
    let expected = 7;
    expect(actual).toEqual(expected);

});

test('test 3', () => {

    // Given
    let repeatedString = new RepeatedString();
    let pattern = "abcaaaa";
    let length = 350;

    // When
    let actual = repeatedString.calculateNumOfA(pattern, length)
    
    // Then 
    let expected = 250;
    expect(actual).toEqual(expected);

});

test('test 4', () => {

    // Given
    let repeatedString = new RepeatedString();
    let pattern = "fhgyt";
    let length = 20;

    // When
    let actual = repeatedString.calculateNumOfA(pattern, length)
    
    // Then 
    let expected = 0;
    expect(actual).toEqual(expected);

});