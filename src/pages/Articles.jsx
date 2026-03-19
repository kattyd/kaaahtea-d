// src/pages/Article.jsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import '../styles/blog.css';

const Article = () => {
  // 1. Grab the slug from the URL
  const { slug } = useParams();
  
  // 2. Find the matching post in our database
  const post = blogPosts.find((p) => p.slug === slug);

  // 3. Force the page to scroll to the top when it loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // 4. If someone types a bad URL, show a 404 error
  if (!post) {
    return (
      <div className="page-padding" style={{ textAlign: 'center' }}>
        <h1 className="font-sans-heavy text-huge">404</h1>
        <p className="font-typewriter" style={{ marginBottom: '2rem' }}>FILE NOT FOUND IN ARCHIVE.</p>
        <Link to="/blog" className="send-btn font-sans-heavy" style={{ textDecoration: 'none' }}>
          ← RETURN TO DESK
        </Link>
      </div>
    );
  }

  // 5. If we found the post, render the article!
  return (
    <div className="article-container page-padding">
      <Link to="/blog" className="back-link font-typewriter">
        ← Back to Archive
      </Link>
      
      <article className="editorial-article">
        <header className="article-header">
          <p className="blog-date font-typewriter">{post.date}</p>
          <h1 className="article-title font-sans-heavy">{post.title}</h1>
          
          <div className="blog-tags">
            {post.tags.map(tag => (
              <span key={tag} className="tech-sticker">{tag}</span>
            ))}
          </div>
        </header>

        <div className="article-divider"></div>

        <div className="article-body font-typewriter">
          {/* We are reusing that huge drop-cap from your Dossier bio! */}
          <span className="drop-cap">{post.content.charAt(0)}</span>
          {post.content.substring(1)}
        </div>
      </article>
    </div>
  );
};

export default Article;