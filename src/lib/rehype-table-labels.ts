import type { Element, ElementContent, Root } from 'hast';
import { toText } from 'hast-util-to-text';
import { visit } from 'unist-util-visit';

const isElement = (node: ElementContent | undefined, tag?: string): node is Element =>
  node?.type === 'element' && (tag === undefined || node.tagName === tag);

const rowsOf = (section: Element | undefined): Element[] => (section ? section.children.filter((n): n is Element => isElement(n, 'tr')) : []);

const cellsOf = (row: Element): Element[] => row.children.filter((n): n is Element => isElement(n, 'th') || isElement(n, 'td'));

/**
 * Wraps every Markdown table in a scroll-safe region and gives each body cell a data-label
 * taken from its column heading. Tables with three or more columns get the table--stack class,
 * so the CSS can show them as stacked cards on narrow screens instead of scrolling sideways.
 */
export default function rehypeTableLabels() {
  return (tree: Root) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'table' || !parent || index === undefined) return;
      const thead = node.children.find((n): n is Element => isElement(n, 'thead'));
      const tbody = node.children.find((n): n is Element => isElement(n, 'tbody'));
      const headings = rowsOf(thead)[0] ? cellsOf(rowsOf(thead)[0]).map((cell) => toText(cell).trim()) : [];

      for (const row of rowsOf(tbody)) {
        cellsOf(row).forEach((cell, i) => {
          if (headings[i]) cell.properties = { ...cell.properties, dataLabel: headings[i] };
        });
      }

      const classes = headings.length >= 3 ? ['table--stack'] : [];
      node.properties = { ...node.properties, className: classes };
      parent.children[index] = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['table-wrap'], role: 'region', tabIndex: 0, ariaLabel: headings.length ? `Table: ${headings.join(', ')}` : 'Table' },
        children: [node],
      };
    });
  };
}
