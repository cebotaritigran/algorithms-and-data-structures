let list = [9, 3, 7, 5, 6, 4, 8, 2]
let firstList = [2, 8, 15, 18];
let secondList = [5, 9, 12, 17];
let testList = []

function merge(firstList, secondList) {
    let i = 0, j = 0, k = 0;
    let mergedList = [];
    while (i <= firstList.length && j <= secondList.length - 1) {
        if (firstList[i] < secondList[j]) {
            mergedList[k] = firstList[i];
            i++;
            k++;
        } else {
            mergedList[k] = secondList[j];
            k++;
            j++;
        }
    }

    for (i; i < firstList.length; i++) {
        mergedList[k] = firstList[i];
        k++
    }

    for (j; j < secondList.length; j++) {
        mergedList[k] = secondList[j];
        k++
    }
    return mergedList;
}

function mergeSort(list) {
    if (list.length <= 1) {
        return list
    }
    let mid = Math.floor(list.length / 2);
    let leftList = mergeSort(list.slice(0, mid));
    let rightList = mergeSort(list.slice(mid));
    return merge(leftList, rightList)

}

console.log(mergeSort(list));


