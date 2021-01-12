/*
Create a function that returns the most common
letter in a sentence and accounts for spaces and
letter case.
*/

function commonIntQues(sentence) {
    let sentenceSpaced = sentence.split(' ').join('')
    let sentenceNoSpc = Array.from(sentenceSpaced.toLowerCase())
    letterDic = {},
        max = 0,
        result = [];

    sentenceNoSpc.forEach(function (letter) {
        letterDic[letter] = (letterDic[letter] || 0) + 1;
        if (letterDic[letter] > max) {
            max = letterDic[letter];
            result = [letter];
            return;
        }
    });
    console.log('The most common letter is ' + result);
}

commonIntQues("Feckless frogs frolic freely. Flipping and flapping in the fine forest.")