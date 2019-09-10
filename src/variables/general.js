export const Metrics = [{
    metrics: '1,252',
    title: 'Downloads',
    icon: 'download'
}, {
    metrics: '203',
    title: 'Sales',
    icon: 'shopping-bag'
}, {
    metrics: '274,678',
    title: 'Visits',
    icon: 'eye'
}, {
    metrics: '35%',
    title: 'Conversions',
    icon: 'bar-chart'
}];

export const PurchaseList = [{
    orderNo: 763648,
    name: 'Steve',
    amount: '$122',
    dateTime: 'Oct 21, 2016',
    status: 'COMPLETED'
}, {
    orderNo: 763649,
    name: 'Amber',
    amount: '$62',
    dateTime: 'Oct 21, 2016',
    status: 'PENDING'
}, {
    orderNo: 763650,
    name: 'Michael',
    amount: '$34',
    dateTime: 'Oct 18, 2016',
    status: 'FAILED'
}, {
    orderNo: 763651,
    name: 'Roger',
    amount: '$186',
    dateTime: 'Oct 17, 2016',
    status: 'SUCCESS'
}, {
    orderNo: 763652,
    name: 'Smith',
    amount: '$362',
    dateTime: 'Oct 16, 2016',
    status: 'SUCCESS'
}];

export const TodoList = [{
    title: 'Restart Server',
    description: 'Dynamically integrate client-centric technologies without cooperative resources.',
    date: 'Oct 9, 2016',
    checkbox: true
}, {
    title: 'Retest Upload Scenario',
    description: 'Compellingly implement clicks-and-mortar relationships without highly efficient metrics.',
    date: 'Oct 23, 2016',
    checkbox: true
}, {
    title: 'Functional Spec Meeting',
    description: 'Monotonectally formulate client-focused core competencies after parallel web-readiness.',
    date: 'Oct 11, 2016',
    checkbox: true
}];

export const TaskProgressList = [{
    subject: 'Updating Users Settings',
    percent: 23
}, {
    subject: 'Load & Stress Test',
    percent: 80
}, {
    subject: 'Data Duplication Check',
    percent: 100
}, {
    subject: 'Server Check',
    percent: 45
}, {
    subject: 'Mobile App Development',
    percent: 10
}];

export const projectListForProfile = [{
    title: 'Spot Media',
    progressInPrcnt: 60,
    leader: {
        image: 'user1.png',
        name: 'Michael',
    },
    status: 'ACTIVE'
}, {
    title: 'E-Commerce Site',
    progressInPrcnt: 33,
    leader: {
        image: 'user2.png',
        name: 'Antonius',
    },
    status: 'PENDING'
}, {
    title: 'Project 123GO',
    progressInPrcnt: 68,
    leader: {
        image: 'user3.png',
        name: 'Antonius',
    },
    status: 'ACTIVE'
}, {
    title: 'Wordpress Theme',
    progressInPrcnt: 75,
    leader: {
        image: 'user4.png',
        name: 'Michael',
    },
    status: 'ACTIVE'
}, {
    title: 'Project 123GO',
    progressInPrcnt: 100,
    leader: {
        image: 'user3.png',
        name: 'Antonius',
    },
    status: 'CLOSED'
}, {
    title: 'Redesign Landing Page',
    progressInPrcnt: 100,
    leader: {
        image: 'user5.png',
        name: 'Jason',
    },
    status: 'CLOSED'
}];

export const demoDataForTable = [{
    id: 1,
    firstname: 'Steve',
    lastname: 'Jobs',
    username: '@steve'
}, {
    id: 2,
    firstname: 'Simon',
    lastname: 'Philips',
    username: '@simon'
}, {
    id: 3,
    firstname: 'Jane',
    lastname: 'Doe',
    username: '@jane'
}];

export function handlePanelToggle(iconRef) {
    this.panelRef.current.getElementsByClassName('panel-body')[0].classList.toggle('hidden')
    iconRef && iconRef.classList.toggle('lnr-chevron-down');
}

export function removePanel() {
    this.panelRef.current.remove();
}