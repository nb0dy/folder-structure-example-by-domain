import { getApps } from '@folder-structure-example-by-domain/app/data-access-app';
import { useMemo } from 'react';
import styled from 'styled-components';

import ApplicationList from './components/application-list';

export interface AppUiDashboardProps {
  type?: 'game' | 'multimedia';
}

const StyledAppUiDashboard = styled.div`
  color: pink;
`;

export function AppUiDashboard({ type }: AppUiDashboardProps) {
  const data = useMemo(() => getApps(type), [type]);

  return (
    <StyledAppUiDashboard>
      <h1>Welcome to AppUiDashboard!</h1>

      <ApplicationList apps={data} />
    </StyledAppUiDashboard>
  );
}

export default AppUiDashboard;
