// src/pages/Article.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Talking to Firebase!
import ReactMarkdown from 'react-markdown'; // Rendering Markdown!
import '../styles/blog.css';

const Article = () => {
  const { slug } = useParams(); 
  
  // State for Firebase
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchSinglePost = async () => {
      try {
        const q = query(collection(db, "posts"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          setPost(querySnapshot.docs[0].data());
        } else {
          setError(true); // 404 trigger
        }
      } catch (err) {
        console.error("Error fetching article:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchSinglePost();
  }, [slug]);

  // --- RENDERING STATES ---

  if (loading) {
    return (
      <div className="page-padding" style={{ textAlign: 'center', marginTop: '5rem' }}>
        <p className="font-typewriter text-large">DEVELOPING...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="page-padding" style={{ textAlign: 'center', marginTop: '5rem' }}>
        <h1 className="font-sans-heavy text-huge">404</h1>
        <p className="font-typewriter" style={{ marginBottom: '2rem' }}>FILE NOT FOUND IN ARCHIVE.</p>
        <Link to="/blog" className="send-btn font-sans-heavy" style={{ textDecoration: 'none', display: 'inline-block' }}>
          ← RETURN TO DESK
        </Link>
      </div>
    );
  }

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
            {post.tags && post.tags.map(tag => (
              <span key={tag} className="tech-sticker">{tag}</span>
            ))}
          </div>
        </header>

        <div className="article-divider"></div>

        <div className="article-body font-typewriter">
          {/* Using the fixed post.content and wrapping it in ReactMarkdown */}
          {post.content && (
            <ReactMarkdown>
                {post.content}
            </ReactMarkdown>
          )}
        </div>
      </article>
    </div>
  );
};

export default Article;