/**
 * charts
 */

import Chartist from 'chartist';
import EasyPieChart from 'easy-pie-chart';

function renderLineChart(selector) {
    // selector = '#headline-chart', '#visits-trends-chart', '#demo-line-chart', '#demo-bar-chart', '#demo-area-chart', '#multiple-chart'
    selector && new Chartist.Line(selector, this.data, this.options);
}

function renderBarChart(selector) {
    // selector = '#visits-chart'
    selector && new Chartist.Bar(selector, this.data, this.options);
}

function initializeEasyPieChart(selector) {
    // selector = '#system-load
    return selector && new EasyPieChart(selector, this);
}

export const headLineCharts = {
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: [
            [23, 29, 24, 40, 25, 24, 35],
            [14, 25, 18, 34, 29, 38, 44],
        ]
    },
    options: {
        height: 300,
        showArea: true,
        showLine: false,
        showPoint: false,
        fullWidth: true,
        axisX: {
            showGrid: false
        },
        lineSmooth: false,
    },
    draw: renderLineChart
};

export const visitsTrendsChart = {
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [{
            name: 'series-real',
            data: [200, 380, 350, 320, 410, 450, 570, 400, 555, 620, 750, 900],
        }, {
            name: 'series-projection',
            data: [240, 350, 360, 380, 400, 450, 480, 523, 555, 600, 700, 800],
        }]
    },
    options: {
        fullWidth: true,
        lineSmooth: false,
        height: "270px",
        low: 0,
        high: 'auto',
        series: {
            'series-projection': {
                showArea: true,
                showPoint: false,
                showLine: false
            },
        },
        axisX: {
            showGrid: false,
        },
        axisY: {
            showGrid: false,
            onlyInteger: true,
            offset: 0,
        },
        chartPadding: {
            left: 20,
            right: 20
        }
    },
    draw: renderLineChart
};

export const visitsChart = {
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: [
            [6384, 6342, 5437, 2764, 3958, 5068, 7654]
        ]
    },
    options: {
        height: 300,
        axisX: {
            showGrid: false
        },
    },
    draw: renderBarChart
};

export const systemLoadChart = {
    size: 130,
    barColor: function (percent) {
        return "rgb(" + Math.round(200 * percent / 100) + ", " + Math.round(200 * (1.1 - percent / 100)) + ", 0)";
    },
    trackColor: 'rgba(245, 245, 245, 0.8)',
    scaleColor: false,
    lineWidth: 5,
    lineCap: "square",
    animate: 800,
    init: initializeEasyPieChart
};

const demoChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
        [200, 380, 350, 320, 410, 450, 570, 400, 555, 620, 750, 900],
    ]
}

export const demoLineChart = {
    data: demoChartData,
    options: {
        height: "300px",
        showPoint: true,
        axisX: {
            showGrid: false
        },
        lineSmooth: false,
    },
    draw: renderLineChart
};

export const demoBarChart = {
    data: demoChartData,
    options : {
        height: "300px",
        axisX: {
            showGrid: false
        },
    },
    draw: renderBarChart
};

export const demoAreaChart = {
    data: demoChartData,
    options: {
        height: "270px",
        showArea: true,
        showLine: false,
        showPoint: false,
        axisX: {
            showGrid: false
        },
        lineSmooth: false,
    },
    draw: renderLineChart
};

export const multipleChart = {
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [{
            name: 'series-real',
            data: [200, 380, 350, 320, 410, 450, 570, 400, 555, 620, 750, 900],
        }, {
            name: 'series-projection',
            data: [240, 350, 360, 380, 400, 450, 480, 523, 555, 600, 700, 800],
        }]
    },
    options : {
        fullWidth: true,
        lineSmooth: false,
        height: "270px",
        low: 0,
        high: 'auto',
        series: {
            'series-projection': {
                showArea: true,
                showPoint: false,
                showLine: false
            },
        },
        axisX: {
            showGrid: false,
        },
        axisY: {
            showGrid: false,
            onlyInteger: true,
            offset: 0,
        },
        chartPadding: {
            left: 20,
            right: 20
        }
    },
    draw: renderLineChart
};
