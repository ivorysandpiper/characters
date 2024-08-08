document.addEventListener("DOMContentLoaded", () => {
  const detailsElements = document.querySelectorAll("details");
  detailsElements.forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (detail.open) {
        detailsElements.forEach((otherDetail) => {
          if (otherDetail !== detail) {
            otherDetail.removeAttribute("open");
          }
        });
      }
    });
  });
});
