console.log("carpentry.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready");

  // ----------------------------
  // 1. Update SEO meta data
  // ----------------------------
  const updateMeta = () => {
    const metaDescription =
      document.querySelector('meta[name="Description"]') ||
      document.querySelector('meta[name="description"]');

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const author = document.querySelector('meta[name="author"]');

    if (!metaDescription) {
      const desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      desc.setAttribute(
        "content",
        "Golden Touch Carpentry offers custom carpentry, bespoke furniture, renovations, kitchens, wardrobes, and home décor across Gauteng."
      );
      document.head.appendChild(desc);
    } else {
      metaDescription.setAttribute(
        "content",
        "Golden Touch Carpentry offers custom carpentry, bespoke furniture, renovations, kitchens, wardrobes, and home décor across Gauteng."
      );
    }

    if (!metaKeywords) {
      const keys = document.createElement("meta");
      keys.setAttribute("name", "keywords");
      keys.setAttribute(
        "content",
        "Golden Touch Carpentry, custom carpentry, kitchen cabinets, fitted wardrobes, renovations, Gauteng, woodwork, custom furniture"
      );
      document.head.appendChild(keys);
    } else {
      metaKeywords.setAttribute(
        "content",
        "Golden Touch Carpentry, custom carpentry, kitchen cabinets, fitted wardrobes, renovations, Gauteng, woodwork, custom furniture"
      );
    }

    if (!author) {
      const auth = document.createElement("meta");
      auth.setAttribute("name", "author");
      auth.setAttribute("content", "Tankiso Moyo");
      document.head.appendChild(auth);
    }

    const pageTitle = document.title || "Golden Touch Carpentry";
    const newTitle = pageTitle.includes("Golden Touch")
      ? pageTitle
      : `${pageTitle} | Golden Touch Carpentry`;
    document.title = newTitle;
  };

  updateMeta();

  // ----------------------------
  // 2. Update footer year
  // ----------------------------
  const copyright = document.querySelector(".copyright");
  if (copyright) {
    const currentYear = new Date().getFullYear();
    copyright.innerHTML = `&copy; ST10542227# Golden Touch Carpentry. All rights reserved. ${currentYear}.`;
  }

  // ----------------------------
  // 3. Form validation
  // ----------------------------
  const forms = document.querySelectorAll("form");
  if (forms.length > 0) {
    console.log("Forms found:", forms.length);

    forms.forEach((form) => {
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        const allValid = validateForm(form);

        if (!allValid) {
          console.log("Form invalid");
          return;
        }

        const fileInput = form.querySelector('input[type="file"]');
        if (fileInput && fileInput.files.length > 0) {
          const file = fileInput.files[0];
          const maxSize = 5 * 1024 * 1024;

          if (file.size > maxSize) {
            showMessage(
              form,
              "File is too large. Please upload a file under 5MB.",
              "error"
            );
            return;
          }
        }

        showMessage(form, "Your enquiry has been submitted successfully.", "success");
        form.reset();
      });
    });
  }

  function validateForm(form) {
    let valid = true;

    const fields = form.querySelectorAll("input, textarea, select");

    fields.forEach((field) => {
      const value = field.value.trim();
      const isRequired = field.hasAttribute("required");

      if (isRequired && value === "") {
        markFieldError(field, "This field is required.");
        valid = false;
        return;
      }

      if (field.type === "email" && value !== "") {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          markFieldError(field, "Please enter a valid email address.");
          valid = false;
          return;
        }
      }

      if (
        (field.type === "tel" || field.name === "phone" || field.id === "enquiry-phone") &&
        value !== ""
      ) {
        const phonePattern = /^[0-9+\s()-]{7,20}$/;
        if (!phonePattern.test(value)) {
          markFieldError(field, "Please enter a valid phone number.");
          valid = false;
          return;
        }
      }

      if (field.minLength && value.length < field.minLength) {
        markFieldError(field, `Minimum length is ${field.minLength} characters.`);
        valid = false;
        return;
      }

      if (field.maxLength && value.length > field.maxLength) {
        markFieldError(field, `Maximum length is ${field.maxLength} characters.`);
        valid = false;
        return;
      }

      clearFieldError(field);
    });

    return valid;
  }

  function markFieldError(field, message) {
    clearFieldError(field);

    field.style.border = "2px solid #d93025";
    field.style.background = "#fff5f5";

    const err = document.createElement("div");
    err.className = "form-error";
    err.textContent = message;
    err.style.color = "#d93025";
    err.style.fontSize = "0.8rem";
    err.style.marginTop = "5px";

    if (field.parentElement) {
      field.parentElement.appendChild(err);
    }
  }

  function clearFieldError(field) {
    field.style.border = "";
    field.style.background = "";

    const parent = field.parentElement;
    if (parent) {
      const oldError = parent.querySelector(".form-error");
      if (oldError) oldError.remove();
    }
  }

  function showMessage(form, message, type) {
    const oldMessage = form.querySelector(".success-message, .error-message");
    if (oldMessage) oldMessage.remove();

    const msg = document.createElement("div");
    msg.className = type === "success" ? "success-message" : "error-message";
    msg.textContent = message;
    msg.style.marginTop = "12px";
    msg.style.padding = "12px 14px";
    msg.style.borderRadius = "8px";
    msg.style.fontWeight = "700";

    if (type === "success") {
      msg.style.background = "#eafaf1";
      msg.style.color = "#186a3b";
      msg.style.border = "1px solid #7ad9a0";
    } else {
      msg.style.background = "#fff1f1";
      msg.style.color = "#b42318";
      msg.style.border = "1px solid #f4b5b5";
    }

    form.appendChild(msg);
  }

  // ----------------------------
  // 4. Smooth scrolling
  // ----------------------------
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  if (anchorLinks.length > 0) {
    anchorLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  // ----------------------------
  // 5. Reveal images on scroll
  // ----------------------------
  const revealItems = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
  if (revealItems.length > 0) {
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15
      });

      revealItems.forEach((item) => {
        revealObserver.observe(item);
      });
    } else {
      revealItems.forEach((item) => item.classList.add("visible"));
    }
  }
});