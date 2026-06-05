export function assetUrl(path) {
  const base = import.meta.env.BASE_URL || '/';
  const cleaned = String(path || '').replace(/^\/+/, '');
  const encoded = cleaned
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
  return `${base}${encoded}`;
}

