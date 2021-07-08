document.addEventListener('DOMContentLoaded', function () {
  // Галерея слайдер
  // Левая кнопка
  document.querySelectorAll('.gallery__click-left').forEach(function (arrow) {
    arrow.addEventListener('click', function (event) {

      const g_path = event.currentTarget.dataset.path

      document.querySelectorAll('.gallery__img-block').forEach(function (block) {
        block.classList.remove('is-activ')
      })

      document.querySelectorAll('.gallery__click-center').forEach(function (span) {
        span.classList.remove('is-activ')
      })

      document.querySelectorAll(`[data-target="${g_path}"]`).forEach(function (tar) {
        tar.classList.add('is-activ')
      })
    })
  })
  // Правая кнопка
  document.querySelectorAll('.gallery__click-right').forEach(function (arrow) {
    arrow.addEventListener('click', function (event) {

      const g_path = event.currentTarget.dataset.path

      document.querySelectorAll('.gallery__img-block').forEach(function (block) {
        block.classList.remove('is-activ')
      })

      document.querySelectorAll('.gallery__click-center').forEach(function (span) {
        span.classList.remove('is-activ')
      })

      document.querySelectorAll(`[data-target="${g_path}"]`).forEach(function (tar) {
        tar.classList.add('is-activ')
      })
    })
  })

  // Выбор языка/страны
  document.querySelectorAll('.catalog__country').forEach(function (btnActive) {
    btnActive.addEventListener('click', function (event) {
      document.querySelectorAll('.catalog__country').forEach(function (btn) {
        btn.classList.remove('country-activ')
        btnActive.classList.add('country-activ')
      })
    })
  })

  // Выбор художника
  document.querySelectorAll('.accordion__pointer').forEach(function (el) {
    el.addEventListener('click', function (event) {
      document.querySelectorAll('.accordion__pointer').forEach(function (pointer) {
        pointer.classList.remove('accordion__pointer-activ')
      })

      el.classList.add('accordion__pointer-activ')

      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__left').forEach(function (el2) {
        el2.classList.remove('catalog__left-activ')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__left-activ')
    })
  })

  // Кнопка все события
  document.querySelector('.events__button').addEventListener('click', function (event) {
    document.querySelector('.events__button').classList.add('disactiv')

    document.querySelectorAll('.events__item').forEach(function (li) {
      li.classList.add('events__item-activ')
    })
  })

  // Маска для формы блока Издания


})
