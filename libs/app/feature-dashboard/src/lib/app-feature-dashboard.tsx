import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AppFeatureDashboardProps {}

const StyledAppFeatureDashboard = styled.div`
  color: pink;
`;

export function AppFeatureDashboard(props: AppFeatureDashboardProps) {
  return (
    <StyledAppFeatureDashboard>
      <h1>Welcome to AppFeatureDashboard!</h1>
    </StyledAppFeatureDashboard>
  );
}

export default AppFeatureDashboard;
