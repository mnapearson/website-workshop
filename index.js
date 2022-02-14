(function () {
  // https://dashboard.emailjs.com/admin/integration
  emailjs.init("user_8eJ8USh7YSsxqiuwIdDgL");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("contact_service", "contact_form", this).then(
        function () {
          console.log("SUCCESS!");
          document.getElementById("contact-form").reset();
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
