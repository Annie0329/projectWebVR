AFRAME.registerComponent('set-sky-on-click', {
    init: function () {
        const sky = document.querySelector('#image-360');
        const textPlane = document.querySelector('#textPlane');
        const fadePlane = document.querySelector('#fadePlane');
        this.el.addEventListener('click', () => {
            fadePlane.emit('fade')
            const src = this.el.getAttribute('data-src');
            const rotation = this.el.getAttribute('data-rotation');
            const textPic = this.el.getAttribute('data-text');

            setTimeout(function () {
                textPlane.setAttribute('material', 'src', textPic);
                sky.setAttribute('material', 'src', src);
                sky.setAttribute('rotation', rotation);
            }, 600)
            setTimeout(function () {fadePlane.emit('fadeback')}, 700)
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