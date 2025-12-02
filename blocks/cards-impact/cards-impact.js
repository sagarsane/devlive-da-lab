export default function decorate(block) {
  // Get all list items (cards)
  const ul = block.querySelector('ul');
  if (!ul) return;

  ul.querySelectorAll(':scope > li').forEach((li) => {
    // Find the image
    const picture = li.querySelector('picture');
    if (picture) {
      const imageDiv = document.createElement('div');
      imageDiv.className = 'cards-impact-card-image';
      imageDiv.append(picture);
      li.prepend(imageDiv);
    }

    // Wrap remaining content in card body
    const content = li.querySelectorAll(':scope > *:not(.cards-impact-card-image)');
    if (content.length > 0) {
      const cardBody = document.createElement('div');
      cardBody.className = 'cards-impact-card-body';
      content.forEach((el) => cardBody.append(el));
      li.append(cardBody);
    }
  });
}
