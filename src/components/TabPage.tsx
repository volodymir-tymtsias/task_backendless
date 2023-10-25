import React from 'react';
import { useParams } from 'react-router-dom';
import tabs from '../api/tabs.json';
import { Loader } from './Loader';
import { Tabs } from './Tabs';
import { NoMatch } from './NoMatch';

const LazyTabs = tabs.map(tab => React.lazy(() => import(`../${tab.path}`)));

export const TabPage = () => {
  const { tabId } = useParams();
  const defaultTab = tabs.find(tab => tab.order === 0) || tabs[0];
  const orderTabs = [...tabs].sort((tabA, tabB) => tabA.order - tabB.order);
  const selectedTab = tabId || defaultTab.id;
  const index = tabs.findIndex(tab => tab.id === selectedTab);
  const CurrentTab = LazyTabs[index];

  return (
    <>
      {(index >= 0) 
        ? (
          <>
            <header className="is-light is-fixed-top has-shadow mt-3">
              <Tabs tabs={orderTabs} selectedTab={selectedTab} />
            </header>
            <main className="section">
              <React.Suspense fallback={<Loader />}>
                <CurrentTab />
              </React.Suspense>
            </main>
          </>
        )
        : (<NoMatch />)
      }
    </>
  );
};
