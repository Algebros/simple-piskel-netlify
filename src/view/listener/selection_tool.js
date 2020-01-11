import getTool from '../../controller/get_current_tool';

export default function selectionTool() {
  const tool = document.querySelector('.tools__list');
  tool.addEventListener('click', getTool);
}
