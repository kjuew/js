setInterval(() => {
  const element = document.querySelector('.p3WVzB_599d5ef2ae28184 span');
  if (element && element.textContent.includes("0")) {
    element.textContent = "1,965";  // Sayıyı 1,965 ile değiştir
  }
}, 100); // Her 100 milisaniyede bir çalışır
