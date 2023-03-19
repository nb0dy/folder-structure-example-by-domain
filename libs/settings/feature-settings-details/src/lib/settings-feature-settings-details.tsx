import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SettingsFeatureSettingsDetailsProps {}

const StyledSettingsFeatureSettingsDetails = styled.div`
  color: pink;
`;

export function SettingsFeatureSettingsDetails(
  props: SettingsFeatureSettingsDetailsProps
) {
  return (
    <StyledSettingsFeatureSettingsDetails>
      <h1>Welcome to SettingsFeatureSettingsDetails!</h1>
    </StyledSettingsFeatureSettingsDetails>
  );
}

export default SettingsFeatureSettingsDetails;
