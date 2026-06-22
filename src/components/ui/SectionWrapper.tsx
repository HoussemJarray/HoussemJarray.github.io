import React from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  title,
  subtitle,
  children,
  className = "",
}) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        {/* Centered heading block */}
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          {subtitle && (
            <p className="section-subtitle">{subtitle}</p>
          )}
        </div>

        {/* Section content */}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;