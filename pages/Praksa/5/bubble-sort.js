// create an array of random numbers
const array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));

// create bar elements for each number in the array
const barsContainer = document.querySelector('.bars');
array.forEach((num) => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = `${num}px`;
    barsContainer.appendChild(bar);
});

// define bubble sort function
async function bubbleSort() {
    const bars = document.querySelectorAll('.bar');
    const n = bars.length;
    let i, j, temp;

    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            // highlight the two bars being compared
            bars[j].classList.add('current');
            bars[j + 1].classList.add('current');
            await sleep(50);

            // compare the two bars
            if (Number(bars[j].style.height.slice(0, -2)) > Number(bars[j + 1].style.height.slice(0, -2))) {
                // swap the two bars
                temp = bars[j].style.height;
                bars[j].style.height = bars[j + 1].style.height;
                bars[j + 1].style.height = temp;

                // add delay to visualize the swap
                await sleep(50);
            }

            // remove the highlight from the two bars
            bars[j].classList.remove('current');
            bars[j + 1].classList.remove('current');
        }
    }
}

// sleep function to add delay between steps
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// add event listener to sort button
const sortBtn = document.querySelector('#sort-btn');
sortBtn.addEventListener('click', bubbleSort);