document.addEventListener('DOMContentLoaded', function () {
    const presentOrderBtn = document.querySelector('.present__order-btn');
    const pageOverlayModal = document.querySelector('.page__overlay_modal');
    const modalClose = document.querySelector('.modal__close');


    // const animateModal = (sk) => {
    //     const speed = {
    //         slow: 10,
    //         medium: 5,
    //         fast: 1,
    //         default: 3,
    //     };
    //     if (opacity <= 0) {
    //         const timer = setInterval(() => {
    //                 opacity += 0.02;
    //                 modal.style.opacity = opacity;
    //                 if (opacity >= 1) clearInterval(timer);
    //             }, speed[sk]);
            
    //     } else {
    //         const timer = setInterval(() => {
    //             opacity -= 0.02;
    //             modal.style.opacity = opacity;
    //             if (opacity <= 0) {
    //                 clearInterval(timer);
    //                 modal.classList.remove('page__overlay_modal_open');
    //             }
    //         }, speed[sk]);
    //     }
    // }
    
    const hendlerModal = function (openBtn, modal, openSelector, closeTrigger, sk = "medium") {
        let opacity = 0;
        const speed = {
            slow: 10,
            medium: 5,
            fast: 1,
            default: 3,
        };

        openBtn.addEventListener('click', ()=> {
            modal.style.opacity = opacity;
            modal.classList.add(openSelector);
            const timer = setInterval(() => {
                opacity += 0.02;
                modal.style.opacity = opacity;
                if (opacity >= 1) clearInterval(timer);
            }, speed[sk] ? speed[sk] : speed.default);
        });
        
        closeTrigger.addEventListener('click', () => {
            const timer = setInterval(() => {
                opacity -= 0.02;
                modal.style.opacity = opacity;
                if (opacity <= 0) {
                    clearInterval(timer);
                    modal.classList.remove('page__overlay_modal_open');
                }
            }, speed[sk] ? speed[sk] : speed.default);
        });
        pageOverlayModal.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains("page__overlay_modal")) {
                const timer = setInterval(() => {
                opacity -= 0.02;
                modal.style.opacity = opacity;
                if (opacity <= 0) {
                    clearInterval(timer);
                    modal.classList.remove('page__overlay_modal_open');
                }
            }, speed[sk] ? speed[sk] : speed.default);
            }
        });
    };

    hendlerModal(presentOrderBtn, pageOverlayModal, 'page__overlay_modal_open', modalClose, 'medium');
});