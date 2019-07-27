var deleteB = document.getElementsByClassName("deleteB");
var colorButton = document.getElementsByClassName("info");
Array.from(colorButton).forEach(function(element) {
      element.addEventListener('click', function(){
      console.log("You Clicked Button Color Change")
        const name = this.parentNode.childNodes[1].innerText
        const message = this.parentNode.childNodes[3].innerText
        const buttonCo = this.parentNode.childNodes[7].innerText
        console.log(buttonCo,message,name);
        fetch('buttonColor', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': message,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

Array.from(deleteB).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const message = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': message
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
