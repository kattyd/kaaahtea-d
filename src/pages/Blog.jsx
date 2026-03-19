// src/pages/Blog.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import '../styles/blog.css'; // We'll need a new CSS file for this!

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "posts"));
                const postsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                console.log("FIREBASE DATA:", postsData);

                setPosts(postsData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching blog posts: ", error);
            }
        };
        fetchPosts();
    }, []);

  return (
    <div className="blog-container page-padding">
      <div className="blog-header">
        <h1 className="font-sans-heavy text-huge">THE ARCHIVE.</h1>
        <p className="font-handwritten text-large">thoughts, tutorials, and digital essays.</p>
      </div>

        {loading ? (
            <div className="placeholder-box font-typewriter">LOADING POSTS...</div>
        ) : (
      <div className="articles-grid">
        {posts.map((post) => (
          <article key={post.id} className="blog-card">
            <p className="blog-date font-typewriter">{post.date}</p>
            <Link to={`/blog/${post.slug}`}>
              <h2 className="blog-title font-sans-heavy">{post.title}</h2>
            </Link>
            <p className="blog-excerpt">{post.excerpt}</p>
            
            <div className="blog-tags">
              {post.tags.map(tag => (
                <span key={tag} className="tech-sticker tag-sticker">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      )}
    </div>
  );
};

export default Blog;