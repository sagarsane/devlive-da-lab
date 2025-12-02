function decorateCover(col) {
  const children = [...col.children];
  if (children.length === 1 && children[0].nodeName === 'PICTURE') {
    col.classList.add('cover-image');
    col.parentElement.classList.add('cover-row');
  } else {
    col.classList.add('cover-content');
  }
}

async function decorateCols(el, cols) {
  const hasCover = el.classList.contains('image-cover');
  for (const [idx, col] of cols.entries()) {
    col.classList.add('col', `col-${idx + 1}`);
    if (hasCover) decorateCover(col);

    // Load nested blocks (cards, carousels, etc.)
    const nestedBlocks = col.querySelectorAll(':scope > div[class]');
    for (const block of nestedBlocks) {
      const blockName = block.classList[0];
      if (blockName && !block.dataset.blockLoaded) {
        block.dataset.blockLoaded = 'true';
        try {
          const blockPath = `/blocks/${blockName}/${blockName}`;
          const module = await import(`${blockPath}.js`);
          if (module.default) await module.default(block);
        } catch (ex) {
          console.error(`Failed to load nested block: ${blockName}`, ex);
        }
      }
    }
  }
}

async function decorateRows(el, rows) {
  for (const [idx, row] of rows.entries()) {
    row.classList.add('row', `row-${idx + 1}`);
    const cols = [...row.children];
    row.style = `--child-count: ${cols.length}`;
    await decorateCols(el, cols);
  }
}

export default async function init(el) {
  const rows = [...el.children];
  await decorateRows(el, rows);
}
