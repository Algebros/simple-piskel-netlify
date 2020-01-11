export default function (size) {
  const removeToolChecked = document.querySelector('.tools__size .checked');
  if (removeToolChecked != null) removeToolChecked.classList.remove('checked');

  const curTool = document.querySelector(`.item[data-size="${size}"]`);
  curTool.classList.add('checked');
}
