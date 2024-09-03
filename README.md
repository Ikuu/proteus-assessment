# Proteus Assessment - Alexander Anderson
## Running
```
npm install
npm test
```
## Solution and Limitations

I've tried to keep the solution as simple as possible. Solution called for using JavaScript so have added the type checking manually to ensure that it rejects anything other than two strings.

Felt the easiest solution was to turn the strings into arrays of characters, sort them, re-join them and then compare them to see if the contain the same characters.

### Limitations

Currently is case sensitive as the requirements said same characters, could easily change this to be insensitive by adding `toLowerCase()` when de-structuring the string.

Currently it takes into account punctation and special characters, might want to remove these or have the option to and only compare the letters.