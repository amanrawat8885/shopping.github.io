let cartItemObjects;
onload()
function onload() {
  loadCartItemObject()
  displayCartItem();
}


function loadCartItemObject() {
  console.log(cardItem)
  cartItemObjects = cardItem.map(itemId => {
    for (let i = 0; i < items.length; i++){
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  })

  console.log(cartItemObjects)
}


function displayCartItem() {
  let addCartContainer = document.querySelector('.add-card-container');
  let innerHTML = '';
  cartItemObjects.forEach(cardItem => {
    innerHTML += genrateItem(cardItem)
  });
  addCartContainer.innerHTML = innerHTML;
}

function genrateItem(item) {
  return `<div class="row bg-light my-1 border rounded">
  <div class="col-lg-3 col-12">
    <a href=""><img src=${item.image} width="120px" alt="aayega aayega"></a>
  </div>
  <div class="col-lg-8 col-12 overflow- mt-3">
    <p class="fw-bold">${item.title}</p>
    <p class="">${item.description}</p>
    <div class="d-flex">
          <p>Rs.${item.price}</p>
          <p class="mx-2 text-decoration-line-through text-danger">Rs.${item.orignal_price}</p>
          <p>(${item.off}%off)</p>
    </div>
    <p class=""><span class="fw-bold">${item.return}days</span> return available</p>
  </div>
</div>`
}

