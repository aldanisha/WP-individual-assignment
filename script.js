function togglePopup() {
  const popup = document.getElementById('hamburgerPopup');
  if (popup.style.display === 'none' || popup.style.display === '') {
    popup.style.display = 'flex';
  } else {
    popup.style.display = 'none';
  }
}
