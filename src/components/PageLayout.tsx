import type { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/PageLayout.css';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export const PageLayout = ({ children, className = '' }: PageLayoutProps) => {
  return (
    <div className="page-layout">
      <Container fluid className={`page-content ${className}`}>
        <div className="content-card">
          {children}
        </div>
      </Container>
    </div>
  );
};

export default PageLayout;
