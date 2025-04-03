export function convertMarkdownToHtml(markdown) {
  // Ensure the marked library is available
  if (typeof window.marked === 'undefined') {
    console.error('Marked library is not properly loaded');
    return markdown;
  }

  try {
    // Set options only once if not already set
    if (!window.markedOptionsSet) {
      window.marked.setOptions({
        gfm: true,
        breaks: true,
        sanitize: true
      });
      window.markedOptionsSet = true;
    }

    // Use the correct API based on what's available
    return typeof window.marked.parse === 'function' 
      ? window.marked.parse(markdown) 
      : window.marked(markdown);
  } catch (error) {
    console.error('Error converting markdown:', error);
    return markdown;
  }
}

export function updateOutputWithMarkdown(element, markdown) {
  element.innerHTML = convertMarkdownToHtml(markdown);
}