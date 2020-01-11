import getToolSize from '../../controller/get_current_tool_size';

export default function selectionSize() {
  const toolSize = document.querySelector('.tools__size');
  toolSize.addEventListener('click', getToolSize);
}
