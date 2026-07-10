import { useCallback, useEffect, useState } from 'react';

function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(Boolean(url));
  const [error, setError] = useState('');
  const [reloadIndex, setReloadIndex] = useState(0);

  const refetch = useCallback(() => {
    setReloadIndex((value) => value + 1);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        setError('');

        if (!url) {
          throw new Error('API URL is required.');
        }

        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message || 'Unable to load data. Please try again.');
          setData([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url, reloadIndex]);

  return { data, loading, error, refetch };
}

export default useFetchData;
