import { fill } from '../data/company';

interface MdNode {
  type: string;
  value?: string;
  url?: string;
  title?: string | null;
  children?: MdNode[];
}

function walk(node: MdNode): void {
  if (typeof node.value === 'string' && (node.type === 'text' || node.type === 'inlineCode')) {
    node.value = fill(node.value);
  }
  if (typeof node.url === 'string') node.url = fill(node.url);
  if (typeof node.title === 'string') node.title = fill(node.title);
  node.children?.forEach(walk);
}

export default function remarkFacts() {
  return (tree: MdNode) => {
    walk(tree);
  };
}
