const fs = require('fs');
// fs.readFile('compers\\list.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     // mergeSort(data.split('\n'));
//     const dac = data.split('\n');
//     console.log(quickSort(dac), compers);
    
//     // function test(data, count){
//     //     if(count<=0) return data;
//     //     else return test(mergeSort(data), count--);

// // fs.writeFile('JavaScript\\compers\\res.txt', quickSort(dac).join('\n'), 'utf8', (error) => {
// //     if (error) {
// //         console.error(error);
// //         return;
// //     }
// //     console.log('File written successfully', compers);
// // });
// });
// var compers = 0;
// function quickSort(arr) {
//     if (arr.length <= 1) return arr;
//     // returns the lowest recution
//     compers += arr.length - 1;
//     // const pivot = Math.floor(Math.random() * arr.length);
//     var pivot2 = Math.floor(arr.length / 2);
//     var pivot3 = arr.length - 1;
//     var pivot1 = 0;
//     let temppivot = [pivot1, pivot2, pivot3];
//     temppivot = temppivot.sort()
//     const pivot = temppivot[1];
//     // randomized pivot
//     const left = [];
//     const right = [];
//     // left for all values smaller then the pivot
//     // right for all values larger then the pivot
//     for(let i = 0; i < arr.length; i++){
//         if(i === pivot) continue;
//         // for index on pivot

//         if(parseInt(arr[i]) > parseInt(arr[pivot])){
//             // pushs the smaller values to left
//             left.push(arr[i]);
//         }else{
//             // if the value is larger or equal to pivot
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left), arr[pivot], ...quickSort(right)];
// }
// #########################3#############333333333####33##########
function quickSort1(arr){
    let temp1 = 0;
    let temp2 = 0;
    let i = 1;
    let j = 1;
    let p = 0;
    while(j < arr.length){
        if(parseInt(arr[j]) > parseInt(arr[p])){

        }
    }
}

function swap(arr, a, b) {
    const temp = arr[b];
    arr[b] = arr[a];
    arr[a] = temp;
}
function firstMedian(arr, l){
    return l;
}
function findMedian(arr, l, r) {
    const n = r - l + 1;
    let pos = 0;
    if (n % 2 === 0) {
        pos = Math.floor(n / 2) - 1 + l;
    } else {
        pos = Math.floor(n / 2) + l;
    }
    const a = arr[l];
    const b = arr[pos];
    const c = arr[r];
    const maxi = Math.max(a, b, c);
    const mini = Math.min(a, b, c);
    if (a !== maxi && a !== mini) return l;
    else if (b !== maxi && b !== mini) return pos;
    else return r;
}

function partition(arr, l, r, pi) {
    if (pi !== 0) swap(arr, l, pi);
    const pivot = arr[l];
    let i = l + 1;
    for (let j = l + 1; j <= r; j++) {
        if (arr[j] < pivot) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, l, i - 1);
    return i - 1;
}

function quickSort(arr, l, r) {
    if (r <= l) return 0;
    const position = partition(arr, l, r , findMedian(arr, l, r));// or findMedian
    const left = quickSort(arr, l, position - 1);
    const right = quickSort(arr, position + 1, r);
    return left + right + (r - l);
}

// Read file and perform quicksort
fs.readFile('compers\\list.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    const arr = data.split('\n').map(Number);
    console.log(quickSort(arr, 0, arr.length - 1));
});
