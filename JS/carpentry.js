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
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      const isValid = validateForm(form);

      if (!isValid) {
        showMessage(form, "Please correct the highlighted fields.", "error");
        return;
      }

      try {
        const formData = new FormData(form);

        const response = await fetch(form.action || window.location.href, {
          method: form.method || "POST",
          body: formData
        });

        if (!response.ok) {
          throw new Error("Form submission failed");
        }

        showMessage(form, "Your enquiry has been submitted successfully.", "success");
        form.reset();

      } catch (error) {
        showMessage(form, "There was a problem submitting the form. Please try again.", "error");
      }
    });
  });

  function validateForm(form) {
    let valid = true;

    const fields = form.querySelectorAll("input, textarea, select");

    fields.forEach((field) => {
      const value = field.value.trim();

      if (field.hasAttribute("required") && value === "") {
        markFieldError(field, "This field is required.");
        valid = false;
        return;
      }

      if (field.type === "email" && value !== "") {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          markFieldError(field, "Please enter a valid email address.");
          valid = false;
        }
      }

      if ((field.type === "tel" || field.name === "phone") && value !== "") {
        const phonePattern = /^[0-9+\s()-]{7,20}$/;
        if (!phonePattern.test(value)) {
          markFieldError(field, "Please enter a valid phone number.");
          valid = false;
        }
      }

      if (field.hasAttribute("minlength") && value.length < Number(field.getAttribute("minlength"))) {
        markFieldError(field, `Minimum length is ${field.getAttribute("minlength")} characters.`);
        valid = false;
      }

      if (field.hasAttribute("maxlength") && value.length > Number(field.getAttribute("maxlength"))) {
        markFieldError(field, `Maximum length is ${field.getAttribute("maxlength")} characters.`);
        valid = false;
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
    err.style.color = "#d93025";
    err.style.fontSize = "0.8rem";
    err.style.marginTop = "5px";
    err.textContent = message;

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
    msg.style.padding = "10px 12px";
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
});
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

// =========================================================
// MAP SECTION
// Purpose: render the business map only on pages that have #map
// =========================================================
const mapContainer = document.getElementById("map");

if (mapContainer) {
  if (window.L) {
    const map = L.map("map").setView([-26.1449, 28.0422], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([-26.1449, 28.0422])
      .addTo(map)
      .bindPopup("Golden Touch Carpentry<br>Rosebank Rd, Rosebank, Johannesburg")
      .openPopup();
  } else {
    console.warn("Leaflet library not loaded. Map cannot be displayed.");
  }
}