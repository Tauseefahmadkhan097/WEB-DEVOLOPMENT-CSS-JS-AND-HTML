alert("hii")
// let a="harry"
// console.log(a[0])
let a,e,i,o,u;

function CheckVowel(str1) {
// let a=1,e=1,i=1,o=1,u=1;
sum=0;
    for(let j=0;j<=str1.length;j++){
        if(str1[j]=== a || str1[j]===e || str1[j] ===i  || str1[j]===o || str1[j]===u){
            str1[j]=1;
            // console.log(str1[j])
            sum+=str1[j];
        }
    }

return sum
}

CheckVowel("hello")
console.log(sum)
