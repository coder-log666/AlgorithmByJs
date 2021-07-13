let selectedSort = function(nums) {
    for(let end=nums.length-1; end>0; end --) {
        let maxIndex = 0
        for(let begin = 1; begin <= end; begin ++) {
            if(nums[begin] >= nums[begin-1]) {
                maxIndex = begin
            }
        }
        let tmp = nums[end]
        nums[end] = nums[maxIndex]
        nums[maxIndex] = tmp
    }
}

const nums = [4, 3, 1, 5];
selectedSort(nums);
console.log(nums);

