interface Attributes {
  [key: string]: string | number | null | undefined;
}

const createElement = (
  tag: string | ((props: any, children: any[]) => JSX.Element),
  props: Attributes | null,
  ...children: (Node | string)[][]
) => {
  if (typeof tag === 'function') {
    return tag({ ... props }, children);
  }

  const el = document.createElement(tag);

  if (props) {
    Object.entries(props).forEach(([key, val]) => {
      if (key === 'className') {
        el.classList.add(...(val as string || '').trim().split(' '));
        return;
      }

      (el as any)[key as keyof HTMLElement] = val;
    });
  }

  children.forEach((child) => {
    el.append(...child);
  });

  return el;
};

export const h = (type: string, props: Attributes | null, ...children: any) => {
  return createElement(type, props, children);
};

export const Fragment = () => {
  return null;
};
