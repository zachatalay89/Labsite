function copyText() {
    const text = document.getElementById("bibtex").innerText;
    const new_input = document.createElement('input');
    new_input.value = text
    document.body.appendChild(new_input)
    // select value of new_input
    new_input.select();
    // exec copy command
    document.execCommand("copy");
    document.body.removeChild(new_input);

    // alert("copy success");
}

function matchRimiHeight() {
    const brown = document.getElementById('brown-logo');
    const rimi = document.getElementById('rimi-logo');
    if (brown && rimi) {
      rimi.style.height = brown.clientHeight + 'px';
      rimi.style.width = 'auto';
    }
  }

  // Run after images load
  window.addEventListener('load', matchRimiHeight);
  window.addEventListener('resize', matchRimiHeight);