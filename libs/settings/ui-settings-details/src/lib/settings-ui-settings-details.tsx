import { getSettings } from '@folder-structure-example-by-domain/settings/data-access-settings';
import { routes } from '@folder-structure-example-by-domain/shared/utils/routes';
import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SettingsUiSettingsDetailsProps {}

const StyledSettingsUiSettingsDetails = styled.div`
  color: pink;
`;

export function SettingsUiSettingsDetails() {
  const { id } = useParams<{ id: string }>();
  const data = useMemo(
    () => getSettings().find((settings) => settings.id === id),
    [id]
  );

  if (!data) {
    return (
      <StyledSettingsUiSettingsDetails>
        <h1>No setting exists</h1>
      </StyledSettingsUiSettingsDetails>
    );
  }

  return (
    <StyledSettingsUiSettingsDetails>
      <Link to={routes.settings.url()}>Go Back</Link>

      <h1>Welcome to SettingsUiSettingsDetails!</h1>

      <h3>{data.name}</h3>
    </StyledSettingsUiSettingsDetails>
  );
}

export default SettingsUiSettingsDetails;
