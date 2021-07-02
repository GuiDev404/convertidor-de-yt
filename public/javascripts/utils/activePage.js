import { allListInNav, allAnchorsInNav } from '../config/htmlElements';
import { insertClass, removeClass } from './handleClass'
import { CURRENT_PATH } from '../config/const'

export default function activePage() {
  const setActiveBorder = (anchor)=> {
    allListInNav.forEach(anchor =>  removeClass(anchor, 'active'));
    insertClass(anchor, 'active');
  }

  allAnchorsInNav.forEach(anchor=> {
    (CURRENT_PATH === anchor.getAttribute('href')) && setActiveBorder(anchor);
  })
}
