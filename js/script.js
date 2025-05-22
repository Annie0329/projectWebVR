AFRAME.registerComponent('set-sky-on-click', {
    init: function () {
        const sky = document.querySelector('#image-360');
        const textPlane = document.querySelector('#textPlane');
        const fadePlane = document.querySelector('#fade-plane');

        this.el.addEventListener('click', () => {
            const src = this.el.getAttribute('data-src');
            const rotation = this.el.getAttribute('data-rotation') || '0 0 0';
            const textPic = this.el.getAttribute('data-text');

            // 1. Trigger fade-in (black overlay becomes opaque)
            fadePlane.emit('fadein')

            fadePlane.addEventListener('animationcomplete__fadein', function handler() {
                fadePlane.removeEventListener('animationcomplete__fadein', handler);

                // Step 3: Update sky AFTER fade to black
                sky.setAttribute('material', 'src', src);
                sky.setAttribute('rotation', rotation);
                textPlane.setAttribute('src', textPic);

                // Step 4: Fade back to clear
                // fadePlane.emit('fadeout');
            });
            setTimeout(function () {
                fadePlane.emit('fadeout')
            }, 550)

        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('a-scene');
    scene.addEventListener('loaded', () => {
        document.querySelectorAll('.link').forEach(link => {
            link.setAttribute('set-sky-on-click', '');
        });
    });
});