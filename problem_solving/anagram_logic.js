//Anagram - two different words with same letters
const word1 = "Listen";
const word2 = "Silent";

const isAnagram = (w1, w2) => {
    let word1 = w1.toLowerCase();
    let word2 = w2.toLowerCase();
     word1 = word1.split("").sort().join("");
     word2 = word2.split("").sort().join("");
    return word1 === word2;

}
console.log(isAnagram("emit", "time"));

