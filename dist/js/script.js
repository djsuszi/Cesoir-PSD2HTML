function navigationMenu(){var t=document.querySelector(".navigation-button"),e=document.querySelector(".navigation-menu");document.querySelector("body");t.addEventListener("click",function(){this.classList.toggle("active"),e.classList.toggle("active"),t.classList.contains("active")?this.setAttribute("aria-expanded","true"):this.setAttribute("aria-expanded","false")})}navigationMenu();