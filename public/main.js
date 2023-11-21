
const deleteButton = document.getElementsByClassName("deleteButton");
const editButton = document.getElementsByClassName("editButton")
const qr = document.getElementsByClassName("qr")

//code below deletes but only after hitting corresponding barcode image at the front of the list. clicking the barcode is what changes the quantity to an actual number and not a string in MondoDB.
Array.from(deleteButton).forEach(function (element) {
  element.addEventListener('click', function () {
    const image = this.closest('li').childNodes[1]
    const product = this.closest('li').childNodes[3].innerText//text of each product
    const quantity = (this.closest('li').querySelector('#quantity').value)
    const description = this.closest('li').childNodes[5].innerText
    const threshold = parseFloat(this.closest('li').querySelector('#threshold').value)
    console.log(image)
    console.log(product)
    console.log(description)
    console.log(quantity)
    console.log(threshold)
    fetch('/messages', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'product': product,
        'quantity': quantity,
        'description': description,
        'threshold': threshold,
        'image': image
      }),
    })
      .then(function (response) {
        window.location.reload()
      })
  });
});




Array.from(editButton).forEach(function (element) {
  element.addEventListener('click', function () {
    const quantity = parseInt(this.closest('li').querySelector('#quantity').value)
    const id = this.closest('li').dataset.id
    console.log(id)
    console.log(quantity)
    console.log(threshold)
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


Array.from(editButton).forEach(function (element) {
  element.addEventListener('click', function () {
    const threshold = parseInt(this.closest('li').querySelector('#threshold').value)
    const id = this.closest('li').dataset.id
    console.log(id)
    console.log(threshold)
    fetch('/messagesupdatethreshold', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'threshold': threshold,
        'id': id

      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});

Array.from(qr).forEach(function (element) {
  element.addEventListener('click', function () {
    const quantity = parseInt(this.closest('li').querySelector('#quantity').value)
    const id = this.closest('li').dataset.id
    console.log(id)
    console.log(quantity)
    fetch('/messagesdecrementquantity', {
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




// document.querySelector('#submitButton').addEventListener('click', createInventoryItem)

// function createInventoryItem() {
//   const userInput = document.querySelector('.forminput1').value
//   fetch('/inventoryitem', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       'userInput': userInput
//     })
//   })
//     .then(data => {
//       window.location.reload()
//     })
//     .catch(err => {
//       console.log(`err ${err} `)
//     })

// }

//need to create fileName as field in database so that I reference that image from my ejs templates like messages[i].fileName or something like that.



























