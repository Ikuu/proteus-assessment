export function anagramCheck(firstWord, secondWord) {
    const invalidTypeProvide = typeof firstWord !== "string" || typeof secondWord !== "string";

    if (invalidTypeProvide) {
        throw new Error("Must supply two strings");
    }

    const firstWordParsed = [...firstWord].sort().join('');
    const secondWordParsed = [...secondWord].sort().join('');

    return firstWordParsed === secondWordParsed;
}
