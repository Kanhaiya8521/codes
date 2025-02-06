/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let count = 0 ;
    if(s1.length !== s2.length)return false;

    let str1 = "", str2 = "", str3= "", str4="";
    for(let i = 0 ; i < s1.length; i++) {
        if(s1[i] !== s2[i]) {
            str1=s1[i];
            str2=s2[i];
            count++;
        }
        if(count === 1) {
            str3 = str1;
            str4 = str2;
        }
        if(count > 2) return false;
    }

    let str5 = str1;
    str1 = str2;
    str2 = str5;
    console.log(str1 ,str2 , str3 ,str4)

    if(str1 === str3 && str2 === str4) return true;
    
    return false;
    
};