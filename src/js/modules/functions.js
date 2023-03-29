export function sliders() {
    const sliderNews = new Swiper('.news-slider', {
        speed: 400,
        spaceBetween: 44,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.news__next',
            prevEl: '.news__prev',
        },
        breakpoints: {
            // when window width is >= 320px
            1: {
                slidesPerView: 'auto',
                spaceBetween: 20,
            },
            577: {
                slidesPerView: 'auto',
                spaceBetween: 20
            },
            769: {
                slidesPerView: 'auto',
                spaceBetween: 44
            }
        }
    });

    const sliderReviews = new Swiper('.reviews__slider', {
        speed: 700,
        spaceBetween: 44,
        slidesPerView: 1,
        navigation: {
            nextEl: '.reviews__next',
            prevEl: '.reviews__prev',
        },
        breakpoints: {
            // when window width is >= 320px
            1: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            577: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            769: {
                slidesPerView: 1,
                spaceBetween: 44
            }
        }
    });
}

export const galleryHoverEffects = () => {
    const itemImg = document.querySelectorAll('.constructor-gallery__item')

    itemImg.forEach(el => {
        el.addEventListener('mouseover', () => {
            itemImg.forEach(element => {
                element.classList.add('small')
            });
            el.classList.add('big')
            el.classList.remove('small')
        })

        el.addEventListener('mouseout', () => {
            itemImg.forEach(element => {
                element.classList.remove('small')
            });
            el.classList.remove('big')

        })
    });
}


export function catalogSlider() {

    const tabBtn = document.querySelectorAll('.products__tab'),
        tabSliders = document.querySelectorAll('.products__row')

    tabBtn.forEach(el => {
        el.addEventListener('click', tabActive)
    });

    function tabActive() {
        tabBtn.forEach(el => { el.classList.remove('tab-active') })
        this.classList.add('tab-active');
        tabSliders.forEach(el => {
            el.classList.remove('slider-active')
            if (el.classList.contains(this.dataset.tab)) {
                el.classList.add('slider-active')
            }
        });
    }


    const sliderOne = new Swiper('.slider-1', {
        speed: 700,
        spaceBetween: 29,
        slidesPerView: 4,
        navigation: {
            nextEl: '.products__next',
            prevEl: '.products__prev',
        },
        breakpoints: {
            // when window width is >= 320px
            1: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            577: {
                slidesPerView: 'auto',
                spaceBetween: 20,
            },
            // 769: {
            //     slidesPerView: 2,
            //     spaceBetween: 20
            // }
        }
    });
    const sliderTwo = new Swiper('.slider-2', {
        speed: 700,
        spaceBetween: 29,
        slidesPerView: 4,
        navigation: {
            nextEl: '.products__next',
            prevEl: '.products__prev',
        },
        breakpoints: {
            // when window width is >= 320px
            1: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            577: {
                slidesPerView: 'auto',
                spaceBetween: 20,
            },
        }
    });

    const sliderThree = new Swiper('.slider-3', {
        speed: 700,
        spaceBetween: 29,
        slidesPerView: 4,
        navigation: {
            nextEl: '.products__next',
            prevEl: '.products__prev',
        },
        breakpoints: {
            // when window width is >= 320px
            1: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            577: {
                slidesPerView: 'auto',
                spaceBetween: 20,
            },
        }
    });

    const sliderFour = new Swiper('.slider-4', {
        speed: 700,
        spaceBetween: 29,
        slidesPerView: 4,
        navigation: {
            nextEl: '.products__next',
            prevEl: '.products__prev',
        },
        breakpoints: {
            // when window width is >= 320px
            1: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            577: {
                slidesPerView: 'auto',
                spaceBetween: 20,
            },
        }
    });
}


export function select() {
    const selectBtn = document.querySelector('.select__top'),
        selectBody = document.querySelector('.select')

    if (selectBtn) {
        selectBtn.addEventListener('click', () => {
            selectBody.classList.toggle('select-active')
        })

        selectBody.querySelectorAll('.select__item').forEach(el => {
            el.addEventListener('click', focused)
        })

        function focused() {
            selectBody.querySelectorAll('.select__item').forEach(el => {
                el.classList.remove('select-focused')
            })
            this.classList.add('select-focused')
            document.querySelector('.select__title').textContent = this.textContent
            document.querySelector('.select__value').value = this.textContent
        }
    }

}


export function counter() {
    const counter = document.querySelectorAll('.cart-left__counter')

    if (counter) {
        counter.forEach(el => {
            let minus = el.querySelector('.cart-left__minus'),
                plus = el.querySelector('.cart-left__plus'),
                number = el.querySelector('.cart-left__number')

            minus.addEventListener('click', () => {
                if (number.value > 1) {
                    number.value -= 1;
                }
            })

            plus.addEventListener('click', () => {
                number.value = +number.value + 1;
            })

        })
    }
}


export const cardPreviewSlider = () => {
    const sliderThumbs = new Swiper('.card-thumb', {

        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 8,
        breakpoints: {
            1: {
                direction: 'horizontal',
            },
            1241: {
                direction: 'vertical',
            },
        }

    });

    const sliderImages = new Swiper('.card-preview', {

        direction: 'vertical',
        speed: 900,
        slidesPerView: 1,
        grabCursor: true,
        thumbs: {
            swiper: sliderThumbs
        },
        breakpoints: {
            1: {
                direction: 'horizontal',
            },
            1241: {
                direction: 'vertical',
            },
        }
    });
}

export function spoilerSize() {
    const spoilerBtn = document.querySelector('.soiler-size'),
        spoilerBody = document.querySelector('.soiler-size__body')

    if (spoilerBtn) {
        spoilerBtn.addEventListener('click', () => {
            spoilerBody.classList.toggle('spoiler-open')
            spoilerBtn.classList.toggle('spoiler-active')
        })
    }

}
export function spoilerType() {
    const spoilerBtn = document.querySelectorAll('.spoiler-btn'),
        spoilerBody = document.querySelectorAll('.spoiler-body')

    for (let i = 0; i < spoilerBtn.length; i++) {
        spoilerBtn[i].addEventListener('click', () => {
            spoilerBody[i].classList.toggle('open')
            spoilerBtn[i].classList.toggle('active')
        })
    }

}


export function constructor(IDTypePrametrs) {


    const wrapper = document.querySelector(IDTypePrametrs)

    if (wrapper) {
        // Выбор цвет
        function colors() {

            const colors = wrapper.querySelectorAll('.constructor-colors__radio')

            colors.forEach(el => {
                el.addEventListener('click', () => {
                    let currentColor = el.value;
                    if (wrapper.id == 'constructor-top') {
                        document.querySelectorAll('.color').forEach(el => {
                            el.remove();
                        })
                        createElement(currentColor, 'color');
                    }
                    else {
                        document.querySelectorAll('.bottom-color').forEach(el => {
                            el.remove();
                        })
                        createElement(currentColor, 'bottom-color');
                    }
                })
            });
        }
        colors()

        // Выбор вариантов верха
        function options() {

            const option = wrapper.querySelectorAll('.option')

            for (let i = 0; i < option.length; i++) {
                let optionsItem = option[i].querySelectorAll('.constructor-left__item');
                let numberOptionType;
                if (wrapper.id == 'constructor-top') {
                    numberOptionType = 'option_' + i // формируем  навание параметров внутри их групп
                }
                else {
                    numberOptionType = 'bottom-option_' + i // формируем  навание параметров внутри их групп
                }
                selectedOption(optionsItem, numberOptionType);
            }

            function selectedOption(Item, number) {
                Item.forEach(el => {
                    el.addEventListener('click', selected)
                });

                function selected() {
                    Item.forEach(el => {
                        el.classList.remove('selected-option')
                    });
                    this.classList.add('selected-option')
                    let nameOtion = this.querySelector('.constructor-left__name').textContent.trim();

                    // Удаляем эелементы которые обновляются, т.е. 
                    // при выбре нового варианты из группы опций, 
                    // удаляем старое значение и создаем новое и так для каждой опции отдельно
                    if (wrapper.id == 'constructor-top') {
                        document.querySelectorAll(`.${number}`).forEach(el => {
                            el.remove();
                        })
                        createElement(nameOtion, number);
                    }
                    else {
                        document.querySelectorAll(`.${number}`).forEach(el => {
                            el.remove();
                        })
                        createElement(nameOtion, number);
                    }
                }
            }

        }
        options()

        // Выбор размера
        function size() {
            const sizes = wrapper.querySelectorAll('.soiler-size__item')

            sizes.forEach(el => {
                el.addEventListener('click', (e) => {

                    e.preventDefault();
                    el.querySelector('.soiler-size__radio').checked = true

                    let sizeNumber = 'Размер ' + el.querySelector('.soiler-size__number').textContent

                    if (wrapper.id == 'constructor-top') {
                        document.querySelectorAll('.size').forEach(el => {
                            el.remove();
                        })
                        createElement(sizeNumber, 'size');
                    }
                    else {
                        document.querySelectorAll('.bottom-size').forEach(el => {
                            el.remove();
                        })
                        createElement(sizeNumber, 'bottom-size');
                    }

                })
            });
        }
        size()

        // Создание элементов во фронте с выбранными опциями конструктора
        function createElement(parametr, type) {
            let inner;
            if (wrapper.id == 'constructor-top') {
                inner = document.querySelector('.constructor-form__top');
            }
            else {
                inner = document.querySelector('.constructor-form__down');
            }
            let spanElement = document.createElement('span')
            spanElement.className = 'constructor-form__parametr' + ' ' + type
            spanElement.innerText = parametr
            inner.append(spanElement)
        }
    }

}

export function openParametrs() {
    const btn = document.querySelectorAll('.constructor-btn'),
        body = document.querySelectorAll('.constructor-parametrs')

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', opened)
    }
    function opened() {
        for (let i = 0; i < btn.length; i++) {
            btn[i].classList.remove('active-btn')
            body[i].classList.remove('open-block')
        }
        this.classList.add('active-btn')
        console.log(this.dataset.type);
        body.forEach(element => {
            if (this.dataset.type == element.id) {
                document.getElementById(element.id).classList.add('open-block')

            }
        });
    }
}


export function burgerMenu() {
    const burgerBtn = document.querySelector('.header__burger'),
        burgerBody = document.querySelector('.mobile-menu')

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('mobile-menu--actve')
        burgerBody.classList.toggle('mobile-menu--open')
        document.body.classList.toggle('no-scroll')
    })

}