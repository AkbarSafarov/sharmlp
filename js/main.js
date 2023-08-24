

$(function(){

    $('.swiper-sldier-block').each(function(){
		const sliderId = $(this).data('id');
		const sliderClass = '.' + sliderId;
		const arrow = $(this).data('arrow');		

		const newProductsSwiper = new Swiper(sliderClass, {
	        loop: false,
	        slidesPerView: "auto",
	        loopedSlides: 1,
	        spaceBetween: 30,
	        slidesPerView: 3,
		    breakpoints: {
			    0: {
			      	spaceBetween: 8,
			      	slidesPerView: 1
			    },
			    768: {
			    	slidesPerView: 2,
			      	spaceBetween: 20
			    },
			    1020: {
			      	spaceBetween: 30,
			      	slidesPerView: 3
			    }
			},
			navigation: {
	          nextEl: '.swiper-' + arrow + '-next',
	          prevEl: '.swiper-' + arrow + '-prev',
	        },
	        pagination: {
		      	el: '.swiper-prem-pagination',
	        	clickable: true,
		    },
			lazy: true
		});
	})

	
	var $body = $(document.body),
      	$html = $(document.documentElement);

 //  function formPopup($btn,$wrap){

 //    var closeForm = $('.formExtraWrapper .close-form'),
 //        formWrap = $($wrap),
 //        formBtn = $($btn),
 //        formOpened = 'opened',
 //        overflowHidden = 'oveflowHidden';

 //    closeForm.on('click', function() {
 //        formWrap.removeClass(formOpened);
 //        $html.removeClass(overflowHidden);
 //    });
 //    formBtn.on('click', function(event) {
 //        formWrap.addClass(formOpened);
 //        $html.toggleClass(overflowHidden);
 //        event.preventDefault();
 //    });

 //    $html.on('keyup', function(event) {
 //        if (formWrap.hasClass(formOpened) && event.keyCode == 27) {
 //            formWrap.removeClass(formOpened);
 //            $html.removeClass(overflowHidden);
 //        }
 //    });
 //    $body.on('click touchstart', function(a) {
 //        if ($(a.target).closest('.formExtraWrapper').length || $(a.target).closest(formBtn).length) return;
 //        if (formWrap.hasClass(formOpened)) {
 //            formWrap.removeClass(formOpened);
 //            $html.removeClass(overflowHidden);
 //        }
 //    });
 //  }

	// formPopup('.contacts_btn','.contacts_popup');
})

document.addEventListener('DOMContentLoaded', function() {

	let mySwiper = document.querySelector('.mySwiper_thumb');

    if (mySwiper) {
        const swiperThumb = new Swiper(".mySwiper_thumb", {
            spaceBetween: 16,
            slidesPerView: 5,
            watchSlidesProgress: true,
            breakpoints: {
                0: {
                    spaceBetween: 10,
                },
                768: {
                    spaceBetween: 16,
                    direction: "vertical",
                }
            },
        });

        const swiperMain = new Swiper(".mySwiper_main", {
            spaceBetween: 10,
            effect: "fade",
            thumbs: {
                swiper: swiperThumb,
            },
        });

        let lightGalleryOptions = {
            selector: 'a',
            thumbnail: false,
            fullScreen: false,
            download: false,
            autoplay: false,
            autoplayControls: false,
            actualSize: false
        };

        lightGallery(document.querySelector('.mySwiper_main'), lightGalleryOptions);
    }

    let swatchVariant = document.querySelectorAll('.xt_woovs-swatches .swatch');

	if (swatchVariant) {
	    swatchVariant.forEach(btn => {
	        btn.addEventListener('click', function(e) {
	            e.preventDefault();

	            // Удаляем класс 'xt_woovs-selected' у всех соседних элементов
	            let siblings = Array.from(this.parentNode.children);
	            siblings.forEach(sibling => {
	                if (sibling !== this) {
	                    sibling.classList.remove('xt_woovs-selected');
	                }
	            });

	            // Добавляем класс 'xt_woovs-selected' текущему элементу
	            this.classList.add('xt_woovs-selected');
	        });
	    });
	}


	const html = document.documentElement;

    function blockPopup(btn, wrap) {
        let formWrap = document.querySelector(wrap);
        let closeForm = formWrap.querySelector('.close_btn');
        let formBtn = document.querySelectorAll(btn);
        let formOpened = 'opened';
        let overflowHidden = 'overflowHidden';
        let wrapMain = document.querySelectorAll('.block_popop_modal');

        closeForm.addEventListener('click', function() {
            formWrap.classList.remove(formOpened);
            formBtn.forEach(function(btn) {
                btn.classList.remove(formOpened);
            });
            html.classList.remove(overflowHidden);
        });

        formBtn.forEach(btn => {
            btn.addEventListener('click', function(event) {
                document.querySelectorAll('.btn_action').forEach(function(btn) {
                    btn.classList.remove(formOpened);
                });
                wrapMain.forEach(function(wrap) {
                    wrap.classList.remove(formOpened);
                });
                this.classList.add(formOpened);
                formWrap.classList.add(formOpened);
                html.classList.add(overflowHidden);
                event.preventDefault();
            });
        })

        html.addEventListener('keyup', function(event) {
            if (formWrap.classList.contains(formOpened) && event.keyCode == 27) {
                formWrap.classList.remove(formOpened);
                html.classList.remove(overflowHidden);
                formBtn.forEach(function(btn) {
                    btn.classList.remove(formOpened);
                });
            }
        });
    }

    const tableWr = document.querySelector('.table_block_fixed');

    if (tableWr) {
        blockPopup('.table_size', '.table_block_fixed');
    }

    const cartMiniBtn = document.querySelector('.cart_mini');

    if (cartMiniBtn) {
        blockPopup('.cart_mini', '.cart_modal');
    }


})


