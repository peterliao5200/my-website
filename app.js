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

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!bookingForm.checkValidity()) {
    bookingForm.reportValidity();
    return;
  }

  const formData = new FormData(bookingForm);
  const name = String(formData.get("name")).trim();
  const course = String(formData.get("course")).trim();

  formStatus.textContent = `${name} 你好，已收到你對「${course}」的預約資訊。工坊將於人工確認後與你聯絡，謝謝。`;
  formStatus.classList.add("is-visible");
  bookingForm.reset();
});
