const chartDataByStudent = {
    1: {
        name: "Ornir Iofurbiorn Skorargeirr",
        stats: {
            strength: 8,
            speed: 6.5,
            reliability: 8,
            karmaticpower: 8,
            endurance: 6.5,
            potential: 9
        }
    },
    2: {
        name: "Seth Trigi",
        stats: {
            strength: 6.5,
            speed: 9,
            reliability: 7,
            karmaticpower: 6.5,
            endurance: 5.5,
            potential: 9
        }
    },
    3: {
        name: "Saerian Entai",
        stats: {
            strength: 7,
            speed: 7,
            reliability: 8,
            karmaticpower: 8.5,
            endurance: 7,
            potential: 9
        }
    },
    4: {
        name: "Thal'Vyrn",
        stats: {
            strength: 6,
            speed: 7,
            reliability: 8,
            karmaticpower: 6,
            endurance: 7,
            potential: 9
        }
    },
    5: {
        name: "Asuka Rui",
        stats: {
            strength: 8,
            speed: 8.5,
            reliability: 7,
            karmaticpower: 7,
            endurance: 7.5,
            potential: 9
        }
    },
    6: {
        name: "Kioka Ryomen",
        stats:  {
            strength: 8.5,
            speed: 7,
            reliability: 2,
            karmaticpower: 6,
            endurance: 8,
            potential: 10
        }
    },
    7: {
        name: "Keo Mavena",
        stats: {
            strength: 5,
            speed: 7,
            reliability: 7,
            karmaticpower: 6.5,
            endurance: 6,
            potential: 9
        }
    },
    8: {
        name: "Akagi Kirada",
        stats: {
            strength: 8,
            speed: 8.5,
            reliability: 7,
            karmaticpower: 6,
            endurance: 7.5,
            potential: 9
        }
    },
    9: {
        name: "Loretta Corbet",
        stats: {
            strength: 8,
            speed: 7,
            reliability: 4,
            karmaticpower: 7.5,
            endurance: 7.5,
            potential: 9
        }
    },
    10: {
        name: "Midra Izuhana",
        stats: {
            strength: 9,
            speed: 7.5,
            reliability: 8,
            karmaticpower: 8.5,
            endurance: 8,
            potential: 9
        }
    },
    11: {
        name: "Lysander Stalwart",
        stats: {
            strength: 8,
            speed: 7.5,
            reliability: 6,
            karmaticpower: 6,
            endurance: 7,
            potential: 9
        }
    },
    12: {
        name: "Rakna Pyrachne",
        stats: {
            strength: 8.5,
            speed: 8,
            reliability: 8,
            karmaticpower: 5,
            enudrance: 9,
            potential: 9
        }
    },
    13: {
        name: "Exodeus Ryui",
        stats: {
            strength: 5,
            speed: 4.5,
            reliability: 9,
            karmaticpower: 9.5,
            endurance: 5.5,
            potential: 9
        }
    },
    14: {
        name: "Vale N'll Rellis",
        stats: {
            strength: 7,
            speed: 8.5,
            reliability: 8,
            karmaticpower: 8,
            endurance: 9,
            potential: 9
        }
    },
    15: {
        name: "Isdis Hymir",
        stats: {
            strength: 7,
            speed: 7.5,
            reliability: 8,
            karmaticpower: 0.5,
            endurance: 8,
            potential: 9
        }
    }
};

const defaultChartData = {
    name: "Unknown Student",
    stats: {
        strength: 5,
        speed: 5,
        reliability: 5,
        control: 5,
        endurance: 5,
        potential: 5
    }
};

function getStudentId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

function clampToTen(value) {
    const n = Number(value);
    if (Number.isNaN(n)) {
        return 0;
    }
    return Math.max(0, Math.min(10, n));
}

function buildLegend(stats) {
    const legend = document.getElementById("chartLegend");
    if (!legend) {
        return;
    }

    legend.innerHTML = "";

    Object.entries(stats).forEach(([label, value]) => {
        const row = document.createElement("div");
        row.className = "legend-item";

        const name = document.createElement("span");
        name.className = "legend-label";
        name.textContent = label.toUpperCase();

        const score = document.createElement("span");
        score.className = "legend-value";
        score.textContent = `${clampToTen(value).toFixed(1)} / 10`;

        row.appendChild(name);
        row.appendChild(score);
        legend.appendChild(row);
    });
}

function drawBarChart(stats) {
    const canvas = document.getElementById("studentChart");
    if (!canvas) {
        return;
    }

    const context = canvas.getContext("2d");
    const labels = Object.keys(stats);
    const values = Object.values(stats).map(clampToTen);

    const width = canvas.width;
    const height = canvas.height;

    context.clearRect(0, 0, width, height);

    context.fillStyle = "#101010";
    context.fillRect(0, 0, width, height);

    const margin = { top: 25, right: 25, bottom: 70, left: 55 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    const barGap = 16;
    const barWidth = (chartWidth - barGap * (labels.length - 1)) / labels.length;

    context.strokeStyle = "rgba(255, 110, 110, 0.25)";
    context.lineWidth = 1;

    for (let i = 0; i <= 10; i += 2) {
        const y = margin.top + chartHeight - (i / 10) * chartHeight;
        context.beginPath();
        context.moveTo(margin.left, y);
        context.lineTo(width - margin.right, y);
        context.stroke();

        context.fillStyle = "#888888";
        context.font = "12px Courier New";
        context.fillText(String(i), 18, y + 4);
    }

    labels.forEach((label, index) => {
        const value = values[index];
        const x = margin.left + index * (barWidth + barGap);
        const barHeight = (value / 10) * chartHeight;
        const y = margin.top + chartHeight - barHeight;

        context.fillStyle = "rgba(204, 0, 0, 0.75)";
        context.fillRect(x, y, barWidth, barHeight);

        context.strokeStyle = "#ff8f8f";
        context.lineWidth = 2;
        context.strokeRect(x, y, barWidth, barHeight);

        context.fillStyle = "#f0d0d0";
        context.font = "bold 13px Courier New";
        context.textAlign = "center";
        context.fillText(value.toFixed(1), x + barWidth / 2, y - 8);

        context.fillStyle = "#bbbbbb";
        context.font = "12px Courier New";
        context.fillText(label.toUpperCase(), x + barWidth / 2, height - 30);
    });

    context.strokeStyle = "#cc0000";
    context.lineWidth = 2;
    context.strokeRect(margin.left, margin.top, chartWidth, chartHeight);
}

function loadStudentChart() {
    const studentId = getStudentId();
    const selectedData = chartDataByStudent[studentId] || defaultChartData;

    const studentIdNode = document.getElementById("chartStudentId");
    const studentLabelNode = document.getElementById("chartStudentLabel");
    const backToProfileNode = document.getElementById("backToProfile");

    if (studentIdNode) {
        studentIdNode.textContent = studentId || "-";
    }

    if (studentLabelNode) {
        studentLabelNode.textContent = `${selectedData.name}'s Stats`;
    }

    if (backToProfileNode && studentId) {
        backToProfileNode.href = `student-profile.html?id=${encodeURIComponent(studentId)}`;
    }

    buildLegend(selectedData.stats);
    drawBarChart(selectedData.stats);
}

loadStudentChart();
