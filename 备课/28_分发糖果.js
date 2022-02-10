
/**
 * 球球交流小组：194477865
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    //每个孩子先发一个
    let candy = new Array(ratings.length).fill(1)
    
    //满足左规则
    for (let i=1; i<ratings.length; i++) {
        if (ratings[i] > ratings[i-1]) {
            candy[i] = candy[i-1] + 1
        } 
    }

    //满足右规则
    for(let i=ratings.length-2; i>=0; i--) {
        if (ratings[i] > ratings[i+1] && candy[i]<=candy[i+1]) {
            candy[i] = candy[i+1] + 1
        }
    }

    let ret = 0
    for(let num of candy) {
        ret += num
    }
    return ret
};