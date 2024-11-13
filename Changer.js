const element = document.querySelector('.p3WVzB_599d5ef2ae28184 span');
if (element) {
  // Sayısal kısmı izole et ve sadece onu değiştir
  const textNode = element.lastChild; // Son çocuk öğesi, burada "0"
  if (textNode && textNode.nodeType === 3) {  // Text node olup olmadığını kontrol et
    textNode.textContent = "1,987";  // Sayıyı 1987 ile değiştir
  }
}
/*LORDEX.LOL*/
