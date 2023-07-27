window.addEventListener('load', function () {
    var iframe = document.getElementById('functionly-iframe'); // replace with your iframe id
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Now we have access to the inner document
    var svg = innerDoc.querySelector('svg'); // replace with the actual svg element selector
    var viewBox = svg.getAttribute('viewBox').split(' ').map(Number);

    // Adjust the viewBox values to change the zoom and position
    viewBox[2] *= 0.8; // zoom out by 20%
    viewBox[3] *= 0.8; // zoom out by 20%
    viewBox[1] += 100; // move down by 100 units

    svg.setAttribute('viewBox', viewBox.join(' '));
});