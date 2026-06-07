const bookingForm = document.querySelector("#bookingForm");
const formStatus = document.querySelector("#formStatus");

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId.length <= 1) {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

if (bookingForm && formStatus) {
  bookingForm.addEventListener("submit", () => {
    const formData = new FormData(bookingForm);
    const name = String(formData.get("name") || "").trim();

    formStatus.textContent = name
      ? `${name}，表單正在送出，請稍候。`
      : "表單正在送出，請稍候。";
    formStatus.classList.add("is-visible");
  });
}
