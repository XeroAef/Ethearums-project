const student4SpecialData = {
    id: 4,
    name: "Thal'Vyrn",
    note: "This page is dedicated to Thal'Vyrn's multiple spirit forms.",
    baseForm: {
        strength: 6,
        speed: 8,
        reliability: 8,
        karmaticpower: 8,
        endurance: 6,
        potential: 9
    },
    spiritForm: {
        strength: 10,
        speed: 7.5,
        reliability: 8,
        karmaticpower: 5,
        endurance: 9,
        potential: 9
    }
};

function clampToTen(value) {
    const n = Number(value);
    if (Number.isNaN(n)) {
        return 0;
    }
    return Math.max(0, Math.min(10, n));
}

function buildLegend(legendId, stats) {
    const legend = document.getElementById(legendId);
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

function drawBarChart(canvasId, stats) {
    const canvas = document.getElementById(canvasId);
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

    const margin = { top: 20, right: 16, bottom: 62, left: 45 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    const barGap = 10;
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
        context.font = "11px Courier New";
        context.fillText(String(i), 12, y + 4);
    }

    labels.forEach((label, index) => {
        const value = values[index];
        const x = margin.left + index * (barWidth + barGap);
        const barHeight = (value / 10) * chartHeight;
        const y = margin.top + chartHeight - barHeight;

        context.fillStyle = "rgba(204, 0, 0, 0.75)";
        context.fillRect(x, y, barWidth, barHeight);

        context.strokeStyle = "#ff8f8f";
        context.lineWidth = 1.5;
        context.strokeRect(x, y, barWidth, barHeight);

        context.fillStyle = "#f0d0d0";
        context.font = "bold 11px Courier New";
        context.textAlign = "center";
        context.fillText(value.toFixed(1), x + barWidth / 2, y - 6);

        context.fillStyle = "#bbbbbb";
        context.font = "10px Courier New";
        context.fillText(label.toUpperCase(), x + barWidth / 2, height - 24);
    });

    context.strokeStyle = "#cc0000";
    context.lineWidth = 1.5;
    context.strokeRect(margin.left, margin.top, chartWidth, chartHeight);
}

function loadStudent4SpecialPage() {
    const label = document.getElementById("specialStudentLabel");
    const note = document.getElementById("specialStudentNote");

    if (label) {
        label.textContent = `${student4SpecialData.name}'s spirit forms.`;
    }

    if (note) {
        note.textContent = student4SpecialData.note;
    }

    buildLegend("student4BaseLegend", student4SpecialData.baseForm);
    buildLegend("student4SpiritLegend", student4SpecialData.spiritForm);
    drawBarChart("student4BaseChart", student4SpecialData.baseForm);
    drawBarChart("student4SpiritChart", student4SpecialData.spiritForm);
}

loadStudent4SpecialPage();
