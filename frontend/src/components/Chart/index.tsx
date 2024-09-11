'use client';

import React, { useState } from 'react';

import './index.css';
import PerformanceChart from './performanceChart';
import RewardsChart from './rewardsChart';

export default function ValidatorGraph() {
  const [currentTab, setCurrentTab] = useState('performance');

  return (
    <>
      <div className="tabs">
        <button
          className={`${currentTab === 'performance' ? 'active-tab' : ''} tab`}
          onClick={() => {
            setCurrentTab('performance');
          }}
        >
          Network Performance
        </button>
        <button
          className={`${currentTab === 'rewards' ? 'active-tab' : ''} tab`}
          onClick={() => {
            setCurrentTab('rewards');
          }}
        >
          Node Performance
        </button>
      </div>

      {currentTab === 'performance' ? (
        <div className="chart">
          <PerformanceChart />
        </div>
      ) : null}
      {currentTab === 'rewards' ? (
        <div className="chart">
          <RewardsChart />
        </div>
      ) : null}
    </>
  );
}
