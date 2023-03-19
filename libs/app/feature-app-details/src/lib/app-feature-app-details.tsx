import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AppFeatureAppDetailsProps {}

const StyledAppFeatureAppDetails = styled.div`
  color: pink;
`;

export function AppFeatureAppDetails(props: AppFeatureAppDetailsProps) {
  return (
    <StyledAppFeatureAppDetails>
      <h1>Welcome to AppFeatureAppDetails!</h1>
    </StyledAppFeatureAppDetails>
  );
}

export default AppFeatureAppDetails;
