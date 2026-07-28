(() => {
  const includes = document.querySelectorAll("[data-include-html]");
  includes.forEach((node) => {
    const file = node.getAttribute("data-include-html");
    if (!file) return;

    const request = new XMLHttpRequest();
    request.open("GET", file, false);
    request.send(null);

    if (request.status >= 200 && request.status < 300) {
      node.outerHTML = request.responseText;
      return;
    }

    node.outerHTML = "";
    console.error("Failed to include HTML:", file, request.status);
  });
})();
