const data = [
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
];

function fetchData() {
    let today = new Date();
    today = today.getDay() - 1;
    const barGraphs = document.querySelectorAll('.bar-graph');
    for (let i=0; i < data.length; i++) {
        barGraphs[i].style.height = (data[i].amount / 16) * 3 + "rem";
    }
    barGraphs[today].style.background = "hsl(186, 34%, 60%)";
}

fetchData();