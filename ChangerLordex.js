setInterval(() => {
  const element = document.querySelector('h1.lOj1YV_f8ef53b912061d9');
  if (element && element.innerText.includes("lordex.lol")) {
    element.innerText = element.innerText.replace("lordex.lol", "LORDEX");
  }
}, 0); // Her 1000 milisaniyede (1 saniyede) bir çalışır
