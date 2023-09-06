import Toastify from "toastify-js";

export const deleteSuccessfully = () => {
  Toastify({
    text: "Delete item from cart successfully!",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background:
        "linear-gradient(240deg, rgba(221,19,214,1) 0%, rgba(212,11,16,0.9682466736694678) 35%, rgba(0,212,255,1) 100%)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};
