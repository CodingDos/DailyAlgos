//283. Move Zeroes



function mzero(nums) {
    let temp = 0
    for(i=0;i<=nums.length-1;i++) {
        if(nums[i] !== 0) {
            if(i !== 0) {
                nums[temp] = nums[i]
                nums[i] = 0
            }
            temp++
        }
    }
    return nums
}