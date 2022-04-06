type Tag = string | ((props: any, children: any[]) => JSX.Element);
type Props = Record<string, string | number | null | undefined> | null;
type Children = (Node | string)[];

export const h = (tag: Tag, props: Props, ...children: Children) => {
  // If the tag is a function component, pass props and children inside it
  if (typeof tag === 'function') {
    return tag({ ... props }, children);
  }

  // Create the element and add attributes to it
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

  // Append all children to the element
  children.forEach((child) => {
    el.append(child);
  });

  return el;
};

export const Fragment = () => {
  return null;
};
