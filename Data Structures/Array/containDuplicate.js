/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let numSet = new Set(nums);

  let numArray = [...numSet];
  if (numArray.length === nums.length) {
    return false;
  } else {
    return true;
  }
};
