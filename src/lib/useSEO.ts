import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

const BASE_URL = 'https://indoeuro-trade-2.vercel.app';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

function upsertMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name';
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useSEO({ title, description, keywords, ogImage, ogType = 'website' }: SEOConfig) {
  const location = useLocation();
  const canonicalUrl = `${BASE_URL}${location.pathname}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  useEffect(() => {
    // Title
    document.title = title;

    // Standard meta
    upsertMeta('description', description);
    if (keywords) upsertMeta('keywords', keywords);
    upsertMeta('robots', 'index, follow');
    upsertMeta('author', 'IndoEuro Trade Hub');

    // Canonical
    upsertLink('canonical', canonicalUrl);

    // Open Graph
    upsertMeta('og:type', ogType, true);
    upsertMeta('og:title', title, true);
    upsertMeta('og:description', description, true);
    upsertMeta('og:url', canonicalUrl, true);
    upsertMeta('og:image', image, true);
    upsertMeta('og:site_name', 'IndoEuro Trade Hub', true);
    upsertMeta('og:locale', 'en_US', true);

    // Twitter / X Card
    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', title);
    upsertMeta('twitter:description', description);
    upsertMeta('twitter:image', image);
    upsertMeta('twitter:site', '@IndoEuroHub');
  }, [title, description, keywords, ogImage, ogType, canonicalUrl, image]);
}
