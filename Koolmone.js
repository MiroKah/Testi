const ctx = document.getElementById('functionChart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Function Plot',
            data: [],
            borderColor: 'blue',
            borderWidth: 2,
            fill: false,
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'x'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'f(x)'
                }
            }
        }
    }
});

function calculateAndPlot() {
    const functionInput = document.getElementById('functionInput').value;
    const startX = parseFloat(document.getElementById('startX').value);
    const endX = parseFloat(document.getElementById('endX').value);
    const stepX = parseFloat(document.getElementById('stepX').value);
    const scaleY = parseFloat(document.getElementById('scaleY').value);

    const outputList = document.getElementById('outputList');
    outputList.innerHTML = '';

    const labels = [];
    const data = [];

    try {
        with (Math) {
            for (let x = startX; x <= endX; x += stepX) {
                const y = eval(functionInput) * scaleY;
                labels.push(x.toFixed(2));
                data.push(y);
                const listItem = document.createElement('li');
                listItem.textContent = `f(${x.toFixed(2)}) = ${y.toFixed(2)}`;
                outputList.appendChild(listItem);
            }
        }

        chart.data.labels = labels;
        chart.data.datasets[0].data = data;
        chart.update();
    } catch (error) {
        alert('Error in function evaluation. Please check your input.');
    }
}
