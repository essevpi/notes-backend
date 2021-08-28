const palindrome = require('../utils/for_testing').palindrome;

describe('palindrome of', () => {
    test('of a', () => {
        expect(palindrome('a')).toBe('a');
    });

    test('of react', () => {
        expect(palindrome('react')).toBe('tcaer');
    });

    test('of releveler', () => {
        expect(palindrome('releveler')).toBe('releveler');
    });
});