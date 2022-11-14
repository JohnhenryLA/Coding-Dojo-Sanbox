// var a = 25;
// a = a - 13;
// // console.log(a/2);
// // console.log(a);

// a = "hello";


// for(var i = 0; i <10; i++){
//     console.log(i)
//     i = i + 3;
// }
// console.log('outside the loop'+ i);


function gettotal(arrayofnumbers){
    var sum = arrayofnumbers[0];

    for(var i = 0; i < arrayofnumbers.length; i++){
        sum += arrayofnumbers[i];
        console.log(`the current sum is:""{sum}`)

    }
    console.log("the total is: " + sum)
    }
    gettotal([1,3,5])
