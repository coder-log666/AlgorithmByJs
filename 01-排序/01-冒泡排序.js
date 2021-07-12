var bubbleSort = function (nums) {
  //比较的趟数
  for (let i = nums.length - 1; i > 0; i--) {
    //每次都是从头开始比较
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        let tmp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
      }
    }
  }
};

//优化1， 判断是否已经有序
var bubbleSort2 = function (nums) {
  //比较的趟数
  for (let i = nums.length - 1; i > 0; i--) {
    //每次都是从头开始比较
    let sorted = true; //表示当前的序列已经有序了
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        sorted = false;
        let tmp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
      }
    }
    if (sorted) {
      //一旦有序就不用比较了
      break;
    }
  }
};

//优化2，找到已经有序的下标
var bubbleSort3 = function (nums) {
  //比较的趟数
  for (let i = nums.length - 1; i > 0; i--) {
    let sortedIndex = 1;
    //每次都是从头开始比较
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        let tmp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
        sortedIndex = j + 1;
      }
    }
    i = sortedIndex;
  }
};

const nums = [4, 3, 1, 5];
bubbleSort(nums);
console.log(nums);
