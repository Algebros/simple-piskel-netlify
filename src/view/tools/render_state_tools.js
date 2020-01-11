import './tools.scss';

export default function (tool) {
  const removeToolChecked = document.querySelector('.tools__list .checked');
  if (removeToolChecked != null) removeToolChecked.classList.remove('checked');

  const curTool = document.querySelector(`.tools__list .${tool}`);
  curTool.classList.add('checked');
}
