const currentPath = window.location.pathname;
const urlParams = new URLSearchParams(window.location.search);
const propertyType = urlParams.get('property'); 

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function updateMetaTag(selector, content) {
    let tag = document.querySelector(selector);
    if (tag) {
        tag.setAttribute('content', content);
    } else {
        tag = document.createElement('meta');
        tag.setAttribute('name', selector.substring(selector.indexOf('=') + 2, selector.indexOf(']'))); // For 'name' tags
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
    }
}

// A specific function for Open Graph properties (which use 'property' attribute)
function updateOgTag(property, content) {
    let tag = document.querySelector(`meta[property='${property}']`);
    if (tag) {
        tag.setAttribute('content', content);
    } else {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
    }
}

window.onload = function() {
    const currentPath = window.location.pathname;
    
    if (currentPath.includes('?product-a')) {
        updateMetaTag('meta[name="description"]', 'Description for Product A.');
        updateOgTag('og:title', 'Product A Title');
        updateOgTag('og:description', 'Description for Product A for social media.');
    } else if (currentPath.includes('?product-b')) {
        updateMetaTag('meta[name="description"]', 'Description for Product B.');
        updateOgTag('og:title', 'Product B Title');
        updateOgTag('og:description', 'Description for Product B for social media.');
    } else {
        // Default meta tags
        updateMetaTag('meta[name="description"]', 'This is to explain what DID is to others, and to explain my system to others.');
        updateOgTag('og:title', 'KenzCo\'s D.I.D.');
        updateOgTag('og:description', 'This is to explain what DID is to others, and to explain my system to others.');
    }
};
