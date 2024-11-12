function calculateTax(amount) {
    const taxValue = amount * .10;
    return taxValue;
}

function convertToUpperCase(text) {
    const stringUpperCase = text.toUpperCase();
    return stringUpperCase;
}

function findMaximum(num1, num2) {
    if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    if(word === reversedWord) {
        return true;
    } else {
        return false;
    }
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountedPrice = originalPrice - (originalPrice * (discountPercentage/100));
    return discountedPrice;
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };