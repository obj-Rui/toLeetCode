// 有一些球形气球贴在一堵用 XY 平面表示的墙面上。墙面上的气球记录在整数数组 points ，其中points[i] = [xstart, xend] 表示水平直径在 xstart 和 xend之间的气球。你不知道气球的确切 y 坐标。
// 一支弓箭可以沿着 x 轴从不同点 完全垂直 地射出。在坐标 x 处射出一支箭，若有一个气球的直径的开始和结束坐标为 x``start，x``end， 且满足  xstart ≤ x ≤ x``end，则该气球会被 引爆 。可以射出的弓箭的数量 没有限制 。 弓箭一旦被射出之后，可以无限地前进。
// 给你一个数组 points ，返回引爆所有气球所必须射出的 最小 弓箭数 。

// 示例 1：
// less复制代码输入： points = [[10,16],[2,8],[1,6],[7,12]]
// 输出： 2
// 解释： 气球可以用2支箭来爆破:
// -在x = 6处射出箭，击破气球[2,8]和[1,6]。
// -在x = 11处发射箭，击破气球[10,16]和[7,12]。

// 示例 2：

// 输入： points = [[1,2],[3,4],[5,6],[7,8]]
// 输出： 4
// 解释： 每个气球需要射出一支箭，总共需要4支箭。

// 示例 3：
// less复制代码输入： points = [[1,2],[2,3],[3,4],[4,5]]
// 输出： 2
// 解释：气球可以用2支箭来爆破:
// - 在x = 2处发射箭，击破气球[1,2]和[2,3]。
// - 在x = 4处射出箭，击破气球[3,4]和[4,5]。

// ---------------------------解题-------------------------------------
// 函数findMInimumArrowShots()用于计算用最少的箭头打中气球的最小箭头数
function findMInimumArrowShots(points) {
  // 对气球按照右端点排序
  points.sort((a, b) => a[1] - b[1]);
  // 初始化endPos为第一个气球的右端点
  let endPos = points[0][1];
  // 初始化count为1
  let count = 1;
  // 遍历气球
  for (let [start, end] of points) {
    // 如果endPos小于等于end或者大于等于start，则跳过
    if (endPos <= end && endPos >= start) {
      continue;
    } else {
      // 否则，箭头数加1，endPos更新为end
      count += 1;
      endPos = end;
    }
  }
  // 返回箭头数
  return count;
}
let pointslist = [
  [
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ],
  [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ],
  [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ],
];
pointslist.map((item) => findMInimumArrowShots(item));

// _------------------------------最快解法----------------------------------
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => {
    return b[0] - a[0];
  });
  let count = 0;
  let [x, y] = points.pop();
  while (points.length > 0) {
    let [dx, dy] = points[points.length - 1];
    if (dx <= y) {
      x = Math.min(x, dx);
      y = Math.min(y, dy);
      points.pop();
    } else {
      [x, y] = points.pop();
      count++;
    }
  }
  count++;
  return count;
};
