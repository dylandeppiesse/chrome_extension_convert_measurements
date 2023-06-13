// Listen for mouseover events
document.addEventListener('mouseover', convertOnHover);

// Function to convert imperial measurements to metric and show a tooltip
function convertOnHover(event) {
  const element = event.target;
  
  if (element.tagName === 'SPAN' || element.tagName === 'DIV') {
    const imperialValue = element.innerText.trim();
    const metricValue = convertToMetric(imperialValue);
    const tooltipContent = `${imperialValue} is approximately ${metricValue} in metric units.`;
    
    element.setAttribute('title', tooltipContent);
  }
}

// Function to convert imperial measurements to metric
// US Gallons per Minute -> Litres per Hour
// 1 US Gallon = 3.785411784 Litres
function convertToMetric(imperialValue) {
  imperialValue*3.785411784*60
}
