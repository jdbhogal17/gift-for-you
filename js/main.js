
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Oye Motti! Hamesha smile karti reh. I am always there ').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 200); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};