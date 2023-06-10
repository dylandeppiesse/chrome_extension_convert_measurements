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
function convertToMetric(imperialValue) {
  // Perform the necessary conversion calculations here
  // For example, you can convert inches to centimeters, pounds to kilograms, etc.
  // Return the converted metric value
}
