import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import { blogPosts } from "../../data/blogPosts";

const Blog: React.FC = () => {
  return (
    <SectionWrapper id="blog" title="Technical Blog">
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card card"
          >
            <div className="blog-date">{post.date}</div>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            {post.tags && (
              <div className="blog-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <span className="blog-read-more">Read Article →</span>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Blog;
