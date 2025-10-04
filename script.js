function toggleFAQ(num) {
      const ans = document.getElementById("ans" + num);
      const icon = document.getElementById("icon" + num);
      if (ans.classList.contains("hidden")) {
        ans.classList.remove("hidden");
        icon.textContent = "-";
      } else {
        ans.classList.add("hidden");
        icon.textContent = "+";
      }
    }