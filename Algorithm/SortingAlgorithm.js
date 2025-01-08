// Sorting Algorithm

// Bubble sort
// Insertion sort
// Selection sort
// Merge sort
// Quick sort

// Bubble sort
// Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity are quite high.
function bubbleSort(arr){
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                swapped = true
                }
            }
        } while (swapped)
    return arr
    }
const arr = [-56, -83, 23, 24]
console.log(bubbleSort(arr)) // [ -83, -56, 23, 24 ] ,Big-O = O(n^2)
// [-56, -83, 23, 24]
// [-56, -83, 23, 24] -- check bw -83 and -56
// [-83, -56, 23, 24] -- check bw -56 and 23
// [-83, -56, 23, 24] -- check bw 23 and 24
// [-83, -56, 23, 24] -- sorted

// Insertion sort
// Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hand
function insertionSort(arr1){
    for (let i = 1; i < arr1.length; i++) {
        let key = arr[i]
        let j = i - 1
        while (j >= 0 && key < arr[j]) {
            arr1[j + 1] = arr1[j] 
            j--
            }
            arr1[j + 1] = key
        }
            return arr1
    }
const arr1 = [-56, -83, 24, 23]
console.log(insertionSort(arr1)) // [ -83, -56, 23, 24]
