window.addEventListener('DOMContentLoaded', () => {
    const btnRuEl = document.querySelector('.btn_ru');
    const btnEnEl = document.querySelector('.btn_en');

    document.querySelector('.lang_block').addEventListener('click', (evt) => {

        if (!evt.target.classList.contains('lang')) {
            return;
        }


        if (evt.target.classList.contains('active_lang')) {
            return;
        }

        if (evt.target.classList.contains('btn_ru')) {
            btnEnEl.classList.remove('active_lang');
            evt.target.classList.add('active_lang');
        } else {
            btnRuEl.classList.remove('active_lang');
            evt.target.classList.add('active_lang');
        }

    });

});