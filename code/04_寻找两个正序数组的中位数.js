/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length
    let n = nums2.length
    let k1 = parseInt((m+n+1)/2)
    let k2 = parseInt((m+n+2)/2)

    let a = findK(nums1, 0, m-1, nums2, 0, n-1, k1)
    let b = findK(nums1, 0, m-1, nums2, 0, n-1, k2)

    return (a+b)/2

};

var findK = function(nums1, start1, end1, nums2, start2, end2, k) {
    let len1 = end1 - start1 + 1
    let len2 = end2 - start2 + 1

    if (len1>len2) return findK(nums2, start2, end2, nums1, start1, end1, k)
    if (len1 <= 0) return nums2[start2+k-1]
    if (k==1) return Math.min(nums1[start1], nums2[start2])
    let p_2 = parseInt(k/2)
    
}