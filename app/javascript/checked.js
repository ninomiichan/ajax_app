require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("../checked")
require("../memo")

function check() {
  const posts = document.querySelectorAll(".post");
  posts.forEach(function (post) { 
    posts.forEach(function (post) { 
      const postId = post.getAttribute("data-id");
      const XHR = new XMLHttpRequest();
      XHR.open("GET", `/posts/${postId}`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;          
        }
        const item = XHR.response.post;
        if (item.checked === true) {
          post.setAttribute("data-check", "true");
        } else if (item.checked === false) {
          post.removeAttribute("data-check");
        }
      };
    });
  });
}
setInterval(check, 1000);