const pointer = document.querySelector('.pointer');

const onPointerMove = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
    pointer.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

const onMouseClick = () => {
    pointer.classList.add('pointer-clicked')
    setTimeout(() => {
        pointer.classList.remove('pointer-clicked')
    }, 150)
}

window.addEventListener("mousemove", onPointerMove);
window.addEventListener("mousedown", onMouseClick);