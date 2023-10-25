import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTab: string;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={classNames({
              'is-active': tab.id === selectedTab,
            })}
            key={tab.id}
          >
            <Link
              to={`/${tab.id}`}
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
