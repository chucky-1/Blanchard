document.addEventListener('DOMContentLoaded', function () {
  // Галерея слайдер нумерация
  // Левая кнопка
  document.querySelector('.gallery .carousel-control-prev').addEventListener('click', function (event) {
    document.querySelectorAll('.gallery .carousel-item').forEach(function (el, numItem) {
      if(el.classList.contains('active')) {
        document.querySelectorAll('.gallery__number').forEach(function (str, numStr) {
          str.classList.remove('gallery__number-activ')

          if(numItem === numStr) {
            str.classList.add('gallery__number-activ')
          }
        })
      }
    })
  })
  // Правая кнопка
  document.querySelector('.gallery .carousel-control-next').addEventListener('click', function (event) {
    document.querySelectorAll('.gallery .carousel-item').forEach(function (el, numItem) {

      if(el.classList.contains('active')) {
        document.querySelectorAll('.gallery__number').forEach(function (str, numStr) {
          str.classList.remove('gallery__number-activ')

          if(numItem === numStr) {
            str.classList.add('gallery__number-activ')
          }
        })
      }
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

  // Контакты. Валидация и маскирование формы
  var selector = document.querySelector("input[type='tel']");

  var im = new Inputmask("+7(999) 999-99-99");
  im.mask(selector);

  new JustValidate('.contacts__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
      },
      tel: {
        required: true,
        function: (name, value) => {
          const ph = selector.inputmask.unmaskedvalue()

          return Number(ph) && ph.length === 10
        }
      },
    }})

  // Карта
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.7593103497515,37.64209791847732],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 14
    });

    var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/Map_dot.png',
      iconImageSize: [20, 20],
    });
    myMap.geoObjects.add(myPlacemark)
  }

})
