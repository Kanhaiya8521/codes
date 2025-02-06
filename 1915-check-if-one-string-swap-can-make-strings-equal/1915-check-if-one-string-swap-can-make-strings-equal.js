/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if (s1 === s2) return true;

    let s1FrequencyMap = new Array(26).fill(0);
    let s2FrequencyMap = new Array(26).fill(0);
    let numDiffs = 0;

    for (let i = 0; i < s1.length; i++) {
        let s1Char = s1[i];
        let s2Char = s2[i];

        if (s1Char !== s2Char) {
            numDiffs++;
            if (numDiffs > 2) return false; 
        }
        // Increment frequency counts
        s1FrequencyMap[s1Char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        s2FrequencyMap[s2Char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    console.log(s1FrequencyMap)

    // Check if frequency counts match
    for (let i = 0; i < 26; i++) {
        if (s1FrequencyMap[i] !== s2FrequencyMap[i]) return false;
    }

    return true;
    
};

