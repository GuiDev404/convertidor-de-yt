const removeClass = (ele, ...cls) => ele.classList.remove(cls);
const insertClass = (ele, ...cls) => ele.classList.add(cls);

export {
  removeClass,
  insertClass
}