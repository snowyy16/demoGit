var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  function getOptions(seltag) {
    var khoaHoc = seltag.options[seltag.selectedIndex].text;
    alert(khoaHoc);
  }

document.addEventListener("DOMContentLoaded", () => {
  const name = document.getElementById("txtName");
  const phone = document.getElementById("txtPhone");
  const email = document.getElementById("txtEmail");

  const kh = document.getElementById("idKhoaHoc");
  const khoaHoc = kh.options[kh.selectedIndex];


  const ngaySinh = document.getElementById("txtNgaySinh");
  const TP = $("#idKhoaHoc option:checked");
  const Quan = $("#idKhoaHoc option:checked");
  const coSo = $("#idKhoaHoc option:checked");
  const submit = document.getElementById("submit");

  submit.addEventListener("click", ()=> {
    console.log(name.value);
    console.log(phone.value);
    console.log(email.value);
    console.log(khoaHoc.value);
    console.log(ngaySinh.value);
  });
});