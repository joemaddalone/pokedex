export default function (target, key, descriptor) {
  const fn = descriptor.value;
  if (typeof fn !== 'function') {
    throw new Error(
      `@a11yClickEvent decorator can only be applied to methods not: ${typeof fn}`,
    );
  }
  descriptor.value = function actionHandler(event) {
    if (
      !event ||
      event.type === 'click' ||
      (['keydown', 'keypress'].indexOf(event.type) > -1 &&
        ['Enter', ' '].indexOf(event.key) > -1)
    ) {
      fn.call(this, event);
    }
  };
  return descriptor;
}
