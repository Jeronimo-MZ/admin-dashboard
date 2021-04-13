import React from "react";
import { Line } from "@reactchartjs/react-chart.js";
import styles from "./../../styles/components/Chart.module.css";

function Chart() {
    const data = {
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
        ],
        datasets: [
            {
                label: "Today",
                data: [
                    12,
                    20,
                    28,
                    30,
                    25,
                    26,
                    31,
                    40,
                    50,
                    37,
                    27,
                    20,
                    18,
                    24,
                    38,
                    45,
                    47,
                    44,
                    38,
                ],
                fill: false,
                backgroundColor: "#3751FF",
                borderColor: "#3751FF",
            },
            {
                label: "Yesterday",
                data: [
                    32,
                    34,
                    28,
                    24,
                    22,
                    27,
                    33,
                    37,
                    39,
                    35,
                    25,
                    17,
                    15,
                    24,
                    38,
                    30,
                    26,
                    28,
                    32,
                ],
                fill: false,
                backgroundColor: "#DFE0EB",
                borderColor: "#DFE0EB",
            },
        ],
    };
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
        // maintainAspectRatio: false,
        responsive: true,
    };
    return (
        <div className={styles.container}>
            <Line type={"line"} data={data} options={options} />
        </div>
    );
}

export default Chart;
