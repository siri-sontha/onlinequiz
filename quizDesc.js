// Sri Krishna

let buttons = ['save', 'like', 'dislike', 'share', 'cmt'];

buttons.forEach(btnClick => {
  let button = document.querySelector(`.${btnClick}`);
  button.addEventListener('click', () => {
    const currentColor = getComputedStyle(button).backgroundColor.trim();

    if (currentColor === 'rgba(255, 255, 255, 0.79)') {
      button.style.backgroundColor = '#fcd24f';
    } else {
      button.style.backgroundColor = 'rgba(255, 255, 255, 0.79)';
    }
  });
});

// Sri Krishna
