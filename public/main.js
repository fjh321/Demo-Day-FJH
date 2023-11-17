
const deleteButton = document.getElementsByClassName("deleteButton");
const editButton = document.getElementsByClassName("editButton")


Array.from(deleteButton).forEach(function (element) {
  element.addEventListener('click', function () {
    const product = this.closest('li').childNodes[1].innerText//text of each product
    // const calories = this.closest('li').childNodes[3].innerText
    const quantity = (this.closest('li').querySelector('input').value)
    // const downArrow = parseFloat(this.closest('li').childNodes[5].innerText)
    // const upArrow = parseFloat(this.closest('li').childNodes[5].innerText)
    console.log(product)
    console.log(quantity)

    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'product': product,
        'quantity': quantity

      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});



Array.from(editButton).forEach(function (element) {
  element.addEventListener('click', function () {
    const quantity = (this.closest('li').querySelector('input').value)
    const id = this.closest('li').dataset.id
    console.log(id)
    console.log(quantity)

    fetch('/messagesupdatequantity', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'quantity': quantity,
        'id': id

      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});




document.querySelector('#submitButton').addEventListener('click', createInventoryItem)

function createInventoryItem() {
  const userInput = document.querySelector('.forminput1').value
  fetch('/inventoryitem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'userInput': userInput
    })
  })
    .then(data => {
      window.location.reload()
    })
    .catch(err => {
      console.log(`err ${err} `)
    })

}

//need to create fileName as field in database so that I reference that image from my ejs templates like messages[i].fileName or something like that.




























// var thumbUp = document.getElementsByClassName("fa-thumbs-up");
// var thumbDown = document.getElementsByClassName("fa-thumbs-down");
// var trash = document.getElementsByClassName("fa-trash");

// Array.from(thumbUp).forEach(function (element) {
//   element.addEventListener('click', function () {
//     const name = this.parentNode.parentNode.childNodes[1].innerText
//     const msg = this.parentNode.parentNode.childNodes[3].innerText
//     const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//     fetch('messages', {
//       method: 'put',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg,
//         'thumbUp': thumbUp
//       })
//     })
//       .then(response => {
//         if (response.ok) return response.json()
//       })
//       .then(data => {
//         console.log(data)
//         window.location.reload(true)
//       })
//   });
// });

// Array.from(thumbDown).forEach(function (element) {
//   element.addEventListener('click', function () {
//     const name = this.parentNode.parentNode.childNodes[1].innerText
//     const msg = this.parentNode.parentNode.childNodes[3].innerText
//     const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//     fetch('messages', {
//       method: 'put',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg,
//         'thumbDown': thumbDown
//       })//connected with the app.put, which in turn dives into the db collection and parses through messages.
//     })
//       .then(response => {
//         if (response.ok) return response.json()
//       })
//       .then(data => {
//         console.log(data)
//         window.location.reload(true) //reloads the page which triggers our app.get
//       })
//   });
// });

// Array.from(trash).forEach(function (element) {
//   element.addEventListener('click', function () {
//     const name = this.parentNode.parentNode.childNodes[1].innerText
//     const msg = this.parentNode.parentNode.childNodes[3].innerText
//     fetch('messages', {
//       method: 'delete',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg
//       })
//     }).then(function (response) {
//       window.location.reload()
//     })
//   });
// });
