import { getApp } from '@folder-structure-example-by-domain/app/data-access-app';
import { routes } from '@folder-structure-example-by-domain/shared/utils/routes';
import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledAppUiAppDetails = styled.div`
  color: pink;
`;

const getBoBackUrl = (type: 'game' | 'multimedia'): string => {
  switch (type) {
    case 'game': {
      return routes.game.url();
    }

    case 'multimedia': {
      return routes.multimedia.url();
    }

    default: {
      return routes.dashboard.url();
    }
  }
};

export function AppUiAppDetails() {
  const { id } = useParams<{ id: string }>();
  const data = useMemo(() => getApp(id), [id]);

  if (!data) {
    return (
      <StyledAppUiAppDetails>
        <h1>No App</h1>
      </StyledAppUiAppDetails>
    );
  }

  return (
    <StyledAppUiAppDetails>
      <Link to={getBoBackUrl(data.type)}>Go Back</Link>

      <h1>Welcome to AppUiAppDetails!</h1>

      <h3>{data.name}</h3>
    </StyledAppUiAppDetails>
  );
}

export default AppUiAppDetails;
