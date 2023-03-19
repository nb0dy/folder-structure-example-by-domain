import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface SharedUiLinkProps {
  to: string;
}

const StyledSharedUiLink = styled.div`
  color: pink;
`;

export function SharedUiLink({
  to,
  children,
}: PropsWithChildren<SharedUiLinkProps>) {
  return (
    <StyledSharedUiLink>
      <Link to={to}>{children}</Link>
    </StyledSharedUiLink>
  );
}

export default SharedUiLink;
