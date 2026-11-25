import type { Element, Root } from 'hast';
import { visit } from 'unist-util-visit';

const SITE_HOST = 'sdfltd.com';

/**
 * Opens links that leave the site in a new tab, without passing the opener or referrer,
 * and adds a visually hidden note for screen reader users.
 */
export default function rehypeExternalLinks() {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element) => {
      if (node.tagName !== 'a') return;
      const href = String(node.properties?.href ?? '');
      if (!/^https?:\/\//i.test(href) || new URL(href).hostname.endsWith(SITE_HOST)) return;
      node.properties = { ...node.properties, target: '_blank', rel: ['noopener', 'noreferrer'] };
      node.children.push({
        type: 'element',
        tagName: 'span',
        properties: { className: ['visually-hidden'] },
        children: [{ type: 'text', value: ' (opens in a new tab)' }],
      });
    });
  };
}
