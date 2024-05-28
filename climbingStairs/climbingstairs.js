// Climbing Stairs

//You are climbing a staircase. It takes n steps to reach the top.

//Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function climbingStairs(n){
    let temp = 1
    let temp2 = 2
    let sum = 0
    if(n<3 && n>0){
        return 2
    }
    if(n<2 && n>0){
        return 1
    }
    if(n<1){
        return console.log("please input a positive number")
    }
    for(i=n; i<=0; i--){
        sum = temp + temp2
        temp = temp2
        temp2 = sum
    }
    return temp2
}
