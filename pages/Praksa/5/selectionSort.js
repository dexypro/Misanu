const containerSort = document.querySelector('.containerSort');

const createBars = (array) => {
    containerSort.innerHTML = '';
    array.forEach((num) => {
        const bar = document.createElement('div');
        bar.className = 'barSort';
        bar.style.height = `${num}px`;
        containerSort.appendChild(bar);
    });
}

const selectionSort = async () => {
    const bars = document.querySelectorAll('.barSort');
    const n = bars.length;

    for (let i = 0; i < n; i++) {
        let minIndex = i;

        // highlight the current bar
        bars[i].classList.add('currentSort');

        for (let j = i + 1; j < n; j++) {
            // highlight the comparison bar
            bars[j].classList.add('currentSort');

            // add delay to visualize the comparison
            await sleep(100);

            if (Number(bars[j].style.height.slice(0, -2)) < Number(bars[minIndex].style.height.slice(0, -2))) {
                // update the min index
                minIndex = j;
            }

            // remove the highlight from the comparison bar
            bars[j].classList.remove('currentSort');
        }

        // swap the two bars
        let temp = bars[i].style.height;
        bars[i].style.height = bars[minIndex].style.height;
        bars[minIndex].style.height = temp;

        // add delay to visualize the swap
        await sleep(100);

        // remove the highlight from the current bar
        bars[i].classList.remove('currentSort');
    }
}

// sleep function to add delay between steps
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// create an array of random numbers and display the bars
const array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
createBars(array);