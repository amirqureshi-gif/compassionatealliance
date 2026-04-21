import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { API_BASE_URL } from '../config';
import { fetchPublicSite } from '../api/fetchSite';

const SiteContentContext = createContext({
  sections: null,
  keys: [],
  loading: false,
  error: '',
  reload: async () => {},
});

export function SiteContentProvider({ children }) {
  const [sections, setSections] = useState(null);
  const [keys, setKeys] = useState([]);
  const [loading, setLoading] = useState(Boolean(API_BASE_URL));
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    if (!API_BASE_URL) {
      setSections(null);
      setKeys([]);
      setLoading(false);
      setError('');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const payload = await fetchPublicSite();
      setSections(payload && payload.sections ? payload.sections : null);
      setKeys(Array.isArray(payload && payload.keys) ? payload.keys : []);
    } catch (e) {
      setError(e && e.message ? e.message : 'Failed to load site content');
      setSections(null);
      setKeys([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const value = useMemo(
    () => ({
      sections,
      keys,
      loading,
      error,
      reload: load,
    }),
    [sections, keys, loading, error, load]
  );

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  return useContext(SiteContentContext);
}

export function useSiteSection(sectionKey) {
  const { sections } = useSiteContent();
  return sections && sections[sectionKey] ? sections[sectionKey] : null;
}
