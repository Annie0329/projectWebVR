AFRAME.registerComponent('set-sky-on-click', {
    init: function () {
        const sky = document.querySelector('#image-360');
        const textPlane = document.querySelector('#textPlane');
        this.el.addEventListener('click', () => {
            const src = this.el.getAttribute('data-src');
            const rotation = this.el.getAttribute('data-rotation') || '0 0 0';
            const textPic = this.el.getAttribute('data-text');
            // Set image and rotation on sky
            sky.setAttribute('material', 'src', src);
            sky.setAttribute('rotation', rotation);
            textPlane.setAttribute('src', textPic);
            console.log(src)
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