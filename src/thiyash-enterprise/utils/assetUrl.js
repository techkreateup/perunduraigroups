export function assetUrl(path) {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  
  // Remove leading slashes and 'public/' if present
  const cleaned = path.replace(/^\/+/, '').replace(/^public\//, '');
  
  // Use Vite's BASE_URL (e.g. /perunduraisurgical/)
  const base = import.meta.env.BASE_URL || '/';
  
  // Ensure base ends with a slash and cleaned doesn't start with one
  const safeBase = base.endsWith('/') ? base : `${base}/`;
  
  return `${safeBase}${cleaned}`;
}
