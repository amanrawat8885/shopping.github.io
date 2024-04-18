

let cardItem;
onload();


// for better understandin 
function onload() {
  let cardItemStr = localStorage.getItem('data');

  // method 1 
  // cardItem = cardItemStr ? JSON.parse(cardItemStr) : [];
  // cardItem = cardItemStr agar ye dono equal hote he toh cardItemStr return kr do nahi to array ko [] khali rakho 

  // method 2 
  if (cardItemStr) {
    cardItem = JSON.parse(cardItemStr)
  } else {
    cardItem = [];
  }
  displayItem();
  addItemIcon(); 

  midCardItem()
}

// card product add to cart 
function addToCart(cardId) {
  cardItem.push(cardId);
  localStorage.setItem('data', JSON.stringify(cardItem))  // declear json.stringify bcoz in localstrong we dont save array 
  addItemIcon();
}

// cart icon count 
function addItemIcon() {
  let addItemCount = document.getElementById('addCount');
  if (cardItem.length > 0) {
    addItemCount.style.display = 'block';
    addItemCount.innerHTML = cardItem.length + '+';
  } else {
    addItemCount.style.display = 'none';
  }
}

//display the card in home page
function displayItem() {
  const cardContainer = document.getElementById('card-container');
  if (!cardContainer) {
    return;
  }
  let innerHTML2 = '';
  items.forEach(card => {
    innerHTML2 +=  ` <div class="col-lg-3 col-md-4 mb-4">
    <div class="card">
      <img src=${card.image}  class="card-img-top p-3" alt="...">
      <div class="d-flex mx-2">
        <p>${card.rating.star}⭐</p>
        <p class="mx-2">${card.rating.review}K</p>
      </div>
      
      <div class="card-body">
        <h5 class="card-title">${card.title}</h5>
        <p class="card-text">${card.description}</p>
        <div class="d-flex">
          <p>Rs.${card.price}</p>
          <p class="mx-2 text-decoration-line-through text-danger">Rs.${card.orignal_price}</p>
          <p>(${card.off}%off)</p>
        </div>
        <div class="d-flex justify-content-around my-1 mx-2">
          <a href="#" class="px-3 px-md-4 btn main-background text-white fw-bold">Buy</a>
          <a onclick="addToCart(${card.id})" href="#" class="px-3 px-md-4 btn main-background text-white fw-bold">Add</a>
        </div>
      </div>
    </div>
  </div>`;
  });
  
  cardContainer.innerHTML = innerHTML2;
  
}



// banner cut button 
const bannerCutIcon = document.getElementById('banner-cut-icon');
bannerCutIcon.addEventListener('click', () => {
  const backgroundContainer = document.getElementById('background-container');
  backgroundContainer.style.display = 'none';
})




// mid Item card 
function midCardItem() {
  const leftMidItem = document.getElementById('leftMidItem')
  let innerHTML = '';
  midItem.forEach(midCard => {
    innerHTML += `<div class="col-md-6 mt-3">
    <div class="card">
      <img src=${midCard.image} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${midCard.product}</h5>
        <h4 class="card-title">Men Shoes</h4>
      </div>
    </div>
  </div>`
  });
  leftMidItem.innerHTML = innerHTML;
}