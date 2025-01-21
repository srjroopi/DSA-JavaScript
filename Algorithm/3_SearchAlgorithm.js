// Search Algorithm

// Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
            }
        }
    return -1;
    }
    console.log(linearSearch([2,3,4], 3)) // 1, Big-O = O(n)
            
// Binary Search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
            } 
        else if (arr[mid] < target) {
                left = mid + 1;
            } 
        else { 
            right = mid - 1;
            }
        }
        return -1;
    }
console.log(binarySearch([-1,2,3,4,5,6,7,8],6)) // 5, Big-O = O(logn)

// if the array has elements, find the middle element of the array is equal to target return target index
// if target is less than middle element, binary search left half of the array
// if target is greater than middle element, binary search right half of the array

