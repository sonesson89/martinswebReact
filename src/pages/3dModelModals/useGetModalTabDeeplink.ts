import { useParams } from 'react-router-dom';

export const useGetModalTabDeeplink = (tabs: any) => {
  const { modelId, tabId } = useParams();

  const tabEntries = Object.entries(tabs).map(([key, value]) => [
    key,
    value,
    (value as string).toLowerCase().replace(' ', '-'),
  ]);

  let preselectedTab: any = null;

  if (tabId && tabEntries.find((x) => x[2] === tabId.toLowerCase())) {
    const entry = tabEntries.find((x) => x[2] === tabId.toLowerCase());
    preselectedTab = entry ? tabs.find((x: any) => x === entry[1]) || null : null;
  }

  return {
    preselectedTab,
    modelId,
    tabId,
  };
};
