import { anagramCheck } from "./index";

test('expect return true for valid matches', () => {
    expect(anagramCheck('angel', 'glean')).toBe(true);
});

test('expect return false for invalid matches', () => {
    expect(anagramCheck('orange', 'apple')).toBe(false);
    expect(anagramCheck('ANGEL', 'glean')).toBe(false);
    expect(anagramCheck('angel ', 'glean')).toBe(false);
})

test('expect it to throw error if invalid type used', () => {
    expect(() => anagramCheck('angel ', 16)).toThrow();
})