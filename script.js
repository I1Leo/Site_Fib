"use strict"

//  ================= Header

let siteNavigationItems = document.querySelectorAll('.site-navigation__item');

let loginItem = document.querySelector('.user-navigation__item_login');
let loginBtn = document.querySelector('.login__btn');

let mobileNav = document.querySelector('.mobile-navigation');

let phoneNumber = document.querySelector('.calling__number');

let basket = document.querySelector('.basket__btn');

if (document.documentElement.clientWidth < 573) {

   loginBtn.classList.add('login__btn_mobile');

   [...siteNavigationItems].map(item => item.remove());
   [...siteNavigationItems].map(item => mobileNav.insertAdjacentHTML('beforeend', item.outerHTML));

   loginItem.remove();

   mobileNav.insertAdjacentHTML('beforeend', loginItem.outerHTML);

   phoneNumber.classList.add('calling__number_mobile');

   phoneNumber.remove();
   mobileNav.insertAdjacentHTML('beforeend', `<li>${phoneNumber.outerHTML}</li>`);

   basket.classList.add('basket__btn_mobile');

   basket.remove();
   mobileNav.insertAdjacentHTML('beforeend', `<li class="basket">${basket.outerHTML}</li>`);
}

else if (document.documentElement.clientWidth < 769) {
   loginBtn.classList.add('login__btn_mobile');

   [...siteNavigationItems].map(item => item.remove());
   [...siteNavigationItems].map(item => mobileNav.insertAdjacentHTML('beforeend', item.outerHTML));

   loginItem.remove();
   mobileNav.insertAdjacentHTML('beforeend', loginItem.outerHTML);
}

let burgerBtn = document.getElementsByClassName('burger__btn')[0];

let burgerIcon = document.getElementsByClassName('burger__icon')[0];

let isClicked = false;

burgerBtn.addEventListener('click', () => {
   if (!isClicked) {
      burgerIcon.setAttribute('src', '/img/cross__icon.svg');
      isClicked = true;
   } else {
      burgerIcon.setAttribute('src', '/img/burger__icon.svg');
      isClicked = false;
   }

   mobileNav.classList.toggle('mobile-navigation_active')
});


//  ================= Slider

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

const swiper = new Swiper('.page__swiper', {
   direction: 'horizontal',
   loop: true,
   slidesPerView: 2,
   navigation: {
      nextEl: '.swiper__button_next',
      prevEl: '.swiper__button_prev',
   },
});

let newProducts = new Swiper('.new-products__swiper', {
   direction: 'horizontal',
   loop: true,
   slidesPerView: 4,
});

if (document.documentElement.clientWidth < 694) {
   newProducts = new Swiper('.new-products__swiper', {
      slidesPerView: 2,
   });
}

//  ================= Basket

document.querySelector('.basket__btn').addEventListener('click', () => {
   const basketContainer = document.querySelector('.basket__container');
   basketContainer.classList.toggle('basket__container_active');

   if (document.documentElement.clientWidth < 573) {
      document.querySelector('.mobile-navigation').classList.remove('mobile-navigation_active');
      document.querySelector('.burger__icon').setAttribute('src', '/img/burger__icon.svg');
   }
});

document.querySelector('.basket__hide-btn').addEventListener('click', () => {
   const basketContainer = document.querySelector('.basket__container');
   basketContainer.classList.toggle('basket__container_active');
});

document.querySelector('.product-body').addEventListener('click', (event) => {
   const target = event.target;

   if (target.classList.contains('product-item__btn')) {
      const basketAmount = document.querySelector('.basket__value');

      const productImage = target.closest('.product-item').querySelector('.product-item__img-container img').getAttribute('src');
      const productName = target.getAttribute('data-product-name');
      const productPrice = target.getAttribute('data-product-price');


      const basketItem = document.querySelector(`[data-product="${productName}"]`);


      target.closest('.product-item__btn-container').classList.toggle('product-item__btn-container_red')

      if (!basketItem) {
         addToBasket(productImage, productName, productPrice);
         toggleProductButton(target);
         basketAmount.textContent = +basketAmount.textContent + 1;
      } else {
         const basketPrice = basketItem.querySelector('.basket__price').textContent.split(' ')[0];
         removeFromBasket(basketItem, basketPrice);
         toggleProductButton(target);
         basketAmount.textContent = +basketAmount.textContent - 1;
      }
   }
});

function addToBasket(img, name, price) {
   const basketList = document.querySelector('.basket__list');
   const newBasketItem = document.createElement('li');
   newBasketItem.classList.add('basket__item', 'basket-item');
   newBasketItem.setAttribute('data-product', name);

   newBasketItem.innerHTML = `
     <div class="product-item__img-container product-item__img-container_basket">
       <img src="${img}" alt="">
     </div>
     <div class="basket-item__body">
       <div class="basket-item__header">
       <h3 class="product-item__name" data-product-name = "${name}">${name}</h3>
         <button type="button" class="basket__close-btn">
           <img class="basket__close-icon" src="/img/close.svg" alt="">
         </button>
       </div>
       <div class="basket-item__footer">
         <div class="basket__amount amount">
           <button type="button" class="amount__btn amount__btn_minus">-</button>
           <p class="amount__value">1</p>
           <button type="button" class="amount__btn amount__btn_plus">+</button>
         </div>
         <p class="basket__price" data-product-price = "${price}">${price} ₽</p>   
       </div>
     </div>
   `;

   basketList.appendChild(newBasketItem);

   const results = document.querySelector('.results__value');
   const currentTotal = parseFloat(results.textContent);
   const newTotal = currentTotal + parseFloat(price);
   results.textContent = `${newTotal} ₽`;

}

function removeFromBasket(basketItem, price) {
   basketItem.remove();

   const results = document.querySelector('.results__value');
   const currentTotal = parseFloat(results.textContent);
   const newTotal = currentTotal - parseFloat(price);
   results.textContent = `${newTotal} ₽`;
}

function toggleProductButton(target) {
   const productButton = target.closest('.product-item__btn');
   if (productButton) {
      if (productButton.textContent === 'В корзину') {
         productButton.textContent = 'Убрать';
      } else {
         productButton.textContent = 'В корзину';
      }
   }
}

document.querySelector('.basket__list').addEventListener('click', (event) => {
   const target = event.target;
   const basketItem = target.closest('.basket__item');

   if (basketItem) {
      if (target.classList.contains('basket__close-icon')) {
         const productName = basketItem.getAttribute('data-product');
         const basketPrice = basketItem.querySelector('.basket__price').textContent;

         const basketAmount = document.querySelector('.basket__value');
         basketAmount.textContent = +basketAmount.textContent - 1;

         basketItem.remove();
         const results = document.querySelector('.results__value');
         const currentTotal = parseFloat(results.textContent);
         const newTotal = currentTotal - +basketPrice.split(' ')[0];;
         results.textContent = `${newTotal} ₽`;

         const productButton = document.querySelector(`.product-item__btn[data-product-name="${productName}"]`);
         if (productButton) {
            productButton.textContent = 'В корзину';
            productButton.closest('.product-item__btn-container').classList.remove('product-item__btn-container_red');
         }
      }

      if (target.classList.contains('amount__btn_plus')) {
         const basketValue = basketItem.querySelector('.amount__value');
         basketValue.textContent = `${+basketValue.textContent + 1}`;

         const productButton = document.querySelector('.product-item__btn');
         const productPrice = +productButton.getAttribute('data-product-price');

         const basketPrice = basketItem.querySelector('.basket__price');
         basketPrice.textContent = `${+basketPrice.textContent.split(' ')[0] + productPrice} ₽`;

         const results = document.querySelector('.results__value');
         const currentTotal = parseFloat(results.textContent);
         const newTotal = currentTotal + productPrice;
         results.textContent = `${newTotal} ₽`;
      }

      if (target.classList.contains('amount__btn_minus')) {
         const basketValue = basketItem.querySelector('.amount__value');

         if (+basketValue.textContent < 2) {
            const productName = basketItem.getAttribute('data-product');
            const basketPrice = basketItem.querySelector('.basket__price').textContent;

            const results = document.querySelector('.results__value');
            const currentTotal = parseFloat(results.textContent);
            const newTotal = currentTotal - +basketPrice.split(' ')[0];
            results.textContent = `${newTotal} ₽`;

            const basketAmount = document.querySelector('.basket__value');
            basketAmount.textContent = +basketAmount.textContent - 1;

            basketItem.remove();

            const productButton = document.querySelector(`.product-item__btn[data-product-name="${productName}"]`);
            if (productButton) {
               productButton.textContent = 'В корзину';
               productButton.closest('.product-item__btn-container').classList.remove('product-item__btn-container_red');
            }
         } else {
            const productButton = document.querySelector('.product-item__btn');
            const productPrice = +productButton.getAttribute('data-product-price');

            const basketPrice = basketItem.querySelector('.basket__price');
            basketPrice.textContent = `${+basketPrice.textContent.split(' ')[0] - productPrice} ₽`;

            const results = document.querySelector('.results__value');
            const currentTotal = parseFloat(results.textContent);
            const newTotal = currentTotal - productPrice;
            results.textContent = `${newTotal} ₽`;
         }

         basketValue.textContent = `${+basketValue.textContent - 1}`;
      }
   }
});













