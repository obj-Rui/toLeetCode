// 给定一个  无重复元素 的 有序 整数数组 nums 。
// 返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表 。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。
// 列表中的每个区间范围 [a,b] 应该按如下格式输出：

const { extend } = require('lodash');

// "a->b" ，如果 a != b
// "a" ，如果 a == b

//
// 示例 1：
// csharp复制代码输入： nums = [0,1,2,4,5,7]
// 输出： ["0->2","4->5","7"]
// 解释： 区间范围是：
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"

// 示例 2：
// csharp复制代码输入： nums = [0,2,3,4,6,8,9]
// 输出： ["0","2->4","6","8->9"]
// 解释： 区间范围是：
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"

// ---------------------------代码-------------------------------------
function getInterval(nums) {
  const interval = [];
  let item = nums.slice(0, 1);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] == 1) {
      item.push(nums[i]);
    } else {
      interval.push(item);
      item = nums.slice(i, i + 1);
    }
  }
  if (item.length) {
    interval.push(item);
    item = [];
  }
  return interval.map((i) => {
    return (i = i.length === 1 ? `${i[0]}` : `${i[0]}->${i[i.length - 1]}`);
  });
}
// 测试
const numsList = [
  [0, 1, 2, 4, 5, 7],
  [0, 2, 3, 4, 6, 8, 9],
];
numsList.map((item) => {
  console.log(getInterval(item));
});
