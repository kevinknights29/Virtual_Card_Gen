import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from './Button';
import ProptTypes from 'prop-types';

/**
 * Renders a section component with a title, content, and an edit button.
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the section.
 * @param {ReactNode} props.children - The content of the section.
 * @param {string} props.url - The URL to navigate to when the edit button is
 *  clicked.
 * @return {JSX.Element} The rendered section component.
 */
export const Section = ({title, children, url}) => {
  const navigate = useNavigate();
  return (
    <div className="section mb-4">
      <div className="title-row mb-4">
        <h4>{title}</h4>
        <Button type="button" variant="secondary" onClick={() => navigate(url)}>
                    Edit
        </Button>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

Section.propTypes = {
  title: ProptTypes.string.isRequired,
  children: ProptTypes.node.isRequired,
  url: ProptTypes.string.isRequired,
};

/**
 * Renders a section row component.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child elements to render within the
 *  section row.
 * @return {ReactElement} The rendered section row component.
 */
export const SectionRow = ({children}) => {
  return <div className="section-row">{children}</div>;
};

SectionRow.propTypes = {
  children: ProptTypes.node.isRequired,
};
