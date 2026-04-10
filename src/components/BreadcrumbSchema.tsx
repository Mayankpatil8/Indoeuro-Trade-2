import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://indoeuro-trade-2.vercel.app';

const PAGE_LABELS: Record<string, string> = {
  '/': 'Home',
  '/electronics': 'Electronics',
  '/mechanical': 'Mechanical',
  '/food': 'Food Ingredients',
  '/digital': 'Digital Marketing',
  '/about': 'About Us',
  '/blog': 'Blog',
  '/contact': 'Contact',
};

export function BreadcrumbSchema() {
  const location = useLocation();

  useEffect(() => {
    // Remove existing breadcrumb schema
    const existing = document.getElementById('breadcrumb-schema');
    if (existing) existing.remove();

    // Don't inject on home — no breadcrumb needed
    if (location.pathname === '/') return;

    const label = PAGE_LABELS[location.pathname];
    if (!label) return;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: BASE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: label,
          item: `${BASE_URL}${location.pathname}`,
        },
      ],
    };

    const script = document.createElement('script');
    script.id = 'breadcrumb-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('breadcrumb-schema');
      if (el) el.remove();
    };
  }, [location.pathname]);

  return null;
}
