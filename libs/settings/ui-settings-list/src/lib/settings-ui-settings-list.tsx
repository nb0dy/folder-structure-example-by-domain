import { getSettings } from '@folder-structure-example-by-domain/settings/data-access-settings';
import { routes } from '@folder-structure-example-by-domain/shared/utils/routes';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSettingsUiSettingsList = styled.div`
  color: pink;
`;

const MenuList = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-evenly;
`;

export function SettingsUiSettingsList() {
  const settingsList = useMemo(() => getSettings(), []);

  return (
    <StyledSettingsUiSettingsList>
      <Link to={routes.dashboard.url()}>Go Back</Link>

      <h1>Welcome to SettingsUiSettingsList!</h1>

      <MenuList>
        {settingsList.map((settings) => (
          <Link key={settings.name} to={settings.link}>
            {settings.name}
          </Link>
        ))}
      </MenuList>
    </StyledSettingsUiSettingsList>
  );
}

export default SettingsUiSettingsList;
