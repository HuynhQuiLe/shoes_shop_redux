import Toastify from "toastify-js";

export const addSuccessfully = () => {
  Toastify({
    text: "Add item to cart successfully!",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background:
        "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};
