document.addEventListener('DOMContentLoaded', function () {
  // Галерея слайдер
  const swiper = new Swiper('.gallery-container', {
    allowTouchMove: false,
    slidesPerColumnFill: 'row',
    slidesPerView: 3,
    slidesPerColumn: 2,
    slidesPerGroup: 6,
    spaceBetween: 50,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

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
    // document.querySelector('.events__button').classList.add('disactiv')

    document.querySelectorAll('.events__span').forEach(function (el) {
      el.classList.toggle('disactiv')
    })

    const span = document.querySelector('.events__span-one')

    if (span.classList.contains('disactiv')) {
      document.querySelectorAll('.events__item').forEach(function (li) {
        li.classList.add('events__item-activ')
      })
    } else {
      document.querySelectorAll('.events__item').forEach(function (li, num) {
        if (num > 2) {
          li.classList.remove('events__item-activ')
        }
      })
    }
  })

  // Издания слайдер
  const swiper2 = new Swiper('.editions-container', {
    allowTouchMove: false,
    slidesPerColumnFill: 'row',
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Проекты слайдер
  const swiper3 = new Swiper('.projects-container', {
    allowTouchMove: false,
    slidesPerColumnFill: 'row',
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },

    // Navigation arrows
    navigation: {
      nextEl: '.projects-button-next',
      prevEl: '.projects-button-prev',
    },
  });

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

    myMap.controls.remove('rulerControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('routeButton');
    // myMap.controls.remove('geolocationControl');
  }

})
