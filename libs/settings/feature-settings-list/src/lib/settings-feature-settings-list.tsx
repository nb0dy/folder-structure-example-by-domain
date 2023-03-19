import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SettingsFeatureSettingsListProps {}

const StyledSettingsFeatureSettingsList = styled.div`
  color: pink;
`;

export function SettingsFeatureSettingsList(
  props: SettingsFeatureSettingsListProps
) {
  return (
    <StyledSettingsFeatureSettingsList>
      <h1>Welcome to SettingsFeatureSettingsList!</h1>
    </StyledSettingsFeatureSettingsList>
  );
}

export default SettingsFeatureSettingsList;
