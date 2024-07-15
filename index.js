const querySelectAll = (attr_name) => document.querySelectorAll(attr_name);
const querySelectOne = (attr_name) => document.querySelector(attr_name);

// humberger menu ==============================================================
const humberger_menu = querySelectOne(".hambergerMenu");
const nav_container = querySelectOne(".navigationContainer");

humberger_menu.addEventListener("click", () => {
  let hasToogleClass = nav_container.classList.contains("nav-toogle");

  hasToogleClass
    ? nav_container.classList.remove("nav-toogle")
    : nav_container.classList.add("nav-toogle");
});
// created a tags ============================================
let createdaTag = document.createElement("a");

// CV downlaod ========================================================================
const download_CV = querySelectAll(".downLoadCv");

download_CV.forEach(dl_button => {
  dl_button.addEventListener("click", () => {
    
    createdaTag.href = "./images/sample.jpg";
    createdaTag.download = "sample.jpg";
    createdaTag.click();
  });

})

// mail me ===============================================================================
const mail_Me = querySelectOne(".mail-btn");

mail_Me.addEventListener("click", () => {
  createdaTag.href="mailto:bacongcodaryl@gmail.com?subject=Hello%20there!";
  createdaTag.click();
})


// phone call ===========================================================================

const call_Phone = querySelectOne(".phone-btn")

call_Phone.addEventListener("click", () => {
  createdaTag.href = "tel:+639171234567";
  createdaTag.click();
})

// a atag actvive link ===============================================================

let aTags = querySelectAll("a");

// current page ===============================================================

const scrollPage = (attrName, elementName, className) => {
  const current_page_navLinks = Array.from(elementName).find(
    (as) => as.getAttribute("name") === attrName
  );
  
  if (current_page_navLinks) {
    querySelectOne("." + className)?.classList.remove(className);
    current_page_navLinks.classList.add(className);
  }
};

window.addEventListener("scroll", () => {
  let phoneHeight_Half = window.innerHeight / 2 - 100;
  let scrollFromTop = document.documentElement.scrollTop;
  
  const scrollCalc = (currentPage, nextPage) =>
    scrollFromTop >= phoneHeight_Half * currentPage &&
    scrollFromTop < phoneHeight_Half * nextPage;

  switch (true) {
    case scrollCalc(1, 3):
      scrollPage("About", aTags, "active");
      break;
    case scrollCalc(3, 5):
      scrollPage("Services", aTags, "active");
      break;
    case scrollCalc(5, 7):
      scrollPage("Portfolio", aTags, "active");
      break;
    case scrollCalc(7, 9):
      scrollPage("Contacts", aTags, "active");
      break;
    default:
      scrollPage("Home", aTags, "active");
  }

  console.log("scrollFromTop", scrollFromTop);
});


// alert(window.innerWidth) 
