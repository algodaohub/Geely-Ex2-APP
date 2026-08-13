const toc = document.querySelector('#toc-list');
const headings = document.querySelectorAll('.markdown-body h2');
headings.forEach((heading) => {
  if (!heading.id) heading.id = heading.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const link = document.createElement('a');
  link.href = `#${heading.id}`;
  link.textContent = heading.textContent;
  toc.appendChild(link);
});
if (!headings.length) document.querySelector('.toc').hidden = true;
