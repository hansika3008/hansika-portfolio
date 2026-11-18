const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Replace YOUR_EMAIL@example.com in index.html with your real professional email.
document.getElementById("copyEmail").addEventListener("click", async () => {
  const email = document.getElementById("emailLink").textContent.replace(" ↗", "").trim();
  try {
    await navigator.clipboard.writeText(email);
    document.getElementById("copyEmail").innerHTML = "Copied! ✓";
  } catch {
    window.location.href = `mailto:${email}`;
  }
});
