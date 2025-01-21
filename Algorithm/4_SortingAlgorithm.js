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
// Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hand(right hand side)
// Take one sorted element and compare with remaining element if the SE > USE then move USE to right side SE. 
function insertionSort(arr1){
    for (let i = 1; i < arr1.length; i++) {
        let key = arr1[i]
        let j = i - 1
        while (j >= 0 && key < arr1[j]) {
            arr1[j + 1] = arr1[j] 
            j--
            }
            arr1[j + 1] = key
        }
            return arr1
    }
const arr1 = [-6, 2, -8, 4, 3]
console.log(insertionSort(arr1)) // [ -8 -6 2 3 4] BigO = O(n^2)

// Quick Sort
// we can take any element from the array like first, last, random.
// [ -6, 2, -8, 4, 3] taking last ele 3
// sort the less values left and greter values right
// [-6 -8] [3] [2 4]
// taking last -8 and placing -6 to right
// taking last 4 and placing 2 to left
// -8, -6, 3, 2, 4
// again it continues to last 4 
// -8 -6 2 3 4
function quickSort(qui){
    if(qui.length < 2){
        return qui
    }
    let pivot = qui[qui.length-1]
    let left=[]
    let right=[]
    for (let i=0; i<qui.length -1; i++){
        if(pivot>qui[i]){
            left.push(qui[i])
        }else{right.push(qui[i])}
    }
    return[...quickSort(left), pivot, ...quickSort(right)]
}
const qui = [-6, 2, -8, 4, 3]
console.log("quickSort",quickSort(qui)) // worst case O(n^2) avg case O(nlogn)

// Merge sort
function mergeSort(mer){
    if(mer.length < 2){
        return mer
    }
    const mid = Math.floor(mer.length /2)
    const left = mer.slice(0, mid)
    const right = mer.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left, right){
    const sortArr = []
    while(left.length && right.length){
        if (left[0] <= right[0]){
            sortArr.push(left.shift())
        } else{
            sortArr.push(right.shift())
        }
    } return[...sortArr, ...left, ...right]
}
const mer = [-6, 2, -8, 4, 3]
console.log("Merge Sort",mergeSort(mer))// O(nlogn)
