const container = document.querySelector('.container');
        const numbers = [8, 5, 3, 9, 2, 1, 7, 4, 6, 10];

        function render() {
            container.innerHTML = '';
            numbers.forEach((num) => {
                const bar = document.createElement('div');
                bar.className = 'bar';
                bar.style.height = `${num * 20}px`;
                container.appendChild(bar);
            });
        }

        async function swap(i, j) {
            const bars = document.querySelectorAll('.bar');
            const temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;

            bars[i].classList.add('highlight');
            bars[j].classList.add('highlight');

            await new Promise(resolve => setTimeout(resolve, 500));

            render();

            bars[i].classList.remove('highlight');
            bars[j].classList.remove('highlight');
        }

        async function bubbleSort() {
            for (let i = 0; i < numbers.length - 1; i++) {
                for (let j = 0; j < numbers.length - i - 1; j++) {
                    if (numbers[j] > numbers[j + 1]) {
                        await swap(j, j + 1);
                    }
                }
            }
        }

        render();