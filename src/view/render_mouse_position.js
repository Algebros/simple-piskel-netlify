export default function render(coord) {
  const mousePosition = document.querySelector('.property .property__coord');
  mousePosition.textContent = `${coord.x}:${coord.y}`;
}
