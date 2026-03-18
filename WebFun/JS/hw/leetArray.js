let nums = [1, 6, 4, 15];
let target = 16;
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }

        }
    }
     
}

console.log(twoSum(nums, target));
