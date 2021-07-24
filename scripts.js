document.addEventListener('DOMContentLoaded', function () {
  // Шапка ссылки плавный переход
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  };

  // Шапка дропдаун
  document.querySelectorAll('.head__select').forEach(function (el) {
    const element = el

    const choices = new Choices(element, {
      searchEnabled: false,
      shouldSort: false,
    });
  });

  // Шапка кастомный скроллбар
  new SimpleBar(document.querySelector('.choices__list.choices__list--dropdown .choices__list'), {
    autoHide: false,
    scrollbarMaxSize: 28,
  });

  document.querySelector('.choices__list.choices__list--dropdown .choices__list').setAttribute('data-simplebar', true)

  // Главный баннер слайдер
  const swiper4 = new Swiper('.banner__swiper', {
    autoHeight: true,
    loop: true,
    slidesPerColumnFill: 'row',
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
  });

  // Галерея дропдаун
  const element = document.querySelector('.gallery__select');
  const ch = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
  });

  // Галерея слайдер
  const swiper = new Swiper('.gallery-container', {
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
      nextEl: '.btn-next-1',
      prevEl: '.btn-prev-1',
    },
  });

  // Каталог Выбор языка/страны
  document.querySelectorAll('.catalog__country').forEach(function (btnActive) {
    btnActive.addEventListener('click', function (event) {
      document.querySelectorAll('.catalog__country').forEach(function (btn) {
        btn.classList.remove('country-activ')
        btnActive.classList.add('country-activ')
      })
    })
  });

  // Каталог аккордеон
  $( function() {
    $( ".catalog__accordion" ).accordion({
      collapsible: true,
      icons: false,
      heightStyle: "content",
    });
  } );

  // Активировать выделение художника с помощью tab
  document.querySelectorAll('.accordion__pointer').forEach(function (el) {
    el.setAttribute('tabindex', 1)
  });

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
  });

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
  });

  // Активировать выделение Категории в разделе Издания
  document.querySelectorAll('.editions__input').forEach(function (el) {
    el.setAttribute('tabindex', 1)
  });

  // Издания слайдер
  const swiper2 = new Swiper('.editions-container', {
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
      nextEl: '.btn-next-2',
      prevEl: '.btn-prev-2',
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
      nextEl: '.btn-next-3',
      prevEl: '.btn-prev-3',
    },
  });

  // Активировать выделение Партнеров на слайде Проекты
  document.querySelectorAll('.swiper-slide').forEach(function (el) {
    el.setAttribute('tabindex', 1)
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
    }});

  // Контакты. CSS input
  document.querySelectorAll('.contacts__input').forEach(function (el) {
    el.onfocus = function () {
      el.classList.add('contacts__input-onfocus')
    }
    el.onblur = function () {
      el.classList.remove('contacts__input-onfocus')
    }
  });

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
  };

})
