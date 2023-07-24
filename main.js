window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader-wrapper").style.display = "none";
    document.querySelector(".page").style.display = "block";
    document.querySelector(".backdrop").style.display = "block";
  }, 0);
  const header = document.querySelector("header");
  const dropdownList = document.querySelectorAll(".dropdown-content");
  window.onscroll = () => {
    if (
      document.body.scrollBy >= 100 ||
      document.documentElement.scrollTop >= 100
    ) {
      header.classList.add("header-sticky");
      dropdownList.forEach((dropdown) => {
        dropdown.classList.add("navbar-sticky-dropdown");
      });
    } else {
      header.classList.remove("header-sticky");
      dropdownList.forEach((dropdown) => {
        dropdown.classList.remove("navbar-sticky-dropdown");
      });
    }
  };
});

function openNav() {
  document.querySelector(".mobile-navbar").style.width = "250px";
}

function closeNav() {
  document.querySelector(".mobile-navbar").style.width = "0";
}
