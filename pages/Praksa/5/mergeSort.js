var array = [];

// Populate the array with random numbers
for (var i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
}

// Display the array elements as bars
var arrayContainer = document.getElementById("array-container");
for (var i = 0; i < array.length; i++) {
    var arrayElement = document.createElement("div");
    arrayElement.classList.add("array-bar");
    arrayElement.style.height = `${array[i]}px`;
    arrayContainer.appendChild(arrayElement);
}

// Merge sort function
async function mergeSort() {
    array = await mergeSortHelper(array);
    console.log(array);
}

async function mergeSortHelper(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const leftSorted = await mergeSortHelper(left);
    const rightSorted = await mergeSortHelper(right);

    return await merge(leftSorted, rightSorted);
}

async function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }

        // Animate the comparison and swapping of elements
        await animate(left, right, resultArray);
    }

    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

async function animate(left, right, result) {
    // Get all the array bars
    var arrayBars = document.querySelectorAll(".array-bar");

    // Animate the comparison of elements
    arrayBars[left.length + right.length - 1].style.backgroundColor = "orange";
    await new Promise(resolve => setTimeout(resolve, 500));

    // Animate the swapping of elements
    for (var i = 0; i < result.length; i++) {
        arrayBars[i].style.height = `${result[i]}px`;
        arrayBars[i].style.backgroundColor = "green";
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Reset the color of the array bars
    for (var i = 0; i < arrayBars.length; i++) {
        arrayBars[i].style.backgroundColor = "#ddd";
    }
}
