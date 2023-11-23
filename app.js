document.addEventListener("DOMContentLoaded", function () {
    const companySelect = document.querySelector("#validation4");
    const subjectSelect = document.querySelector("#validationCustom06");

    // Fetch data from the API using the fetch function
    fetch("https://run.mocky.io/v3/86d25790-6d17-4a00-93ee-13d3f2dd99a9")
      .then((response) => response.json()) // convert the response to JSON
      .then((data) => {
        // Add company data
        data.companies.forEach((company) => {
          const option = document.createElement("option");
          option.value = company;
          option.textContent = company;
          companySelect.appendChild(option);
        });

        // Add subject data
        data.subjects.forEach((subject) => {
          const option = document.createElement("option");
          option.value = subject;
          option.textContent = subject;
          subjectSelect.appendChild(option);
        });
      })
      .catch((error) => console.error("Error fetching data: ", error));

    const form = document.querySelector(".needs-validation");
    const phoneInput = document.querySelector("#validationCustomPhone");

    // Validate Turkish phone number
    const turkishPhoneRegex = /^(\+90|0)?5\d{9}$/;

    phoneInput.addEventListener("input", function () {
        const isValidTurkishPhone = turkishPhoneRegex.test(phoneInput.value);
        if (isValidTurkishPhone) {
            phoneInput.setCustomValidity("");
        } else {
            phoneInput.setCustomValidity("Please enter a valid Turkish phone number.");
        }
    });

    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
});
