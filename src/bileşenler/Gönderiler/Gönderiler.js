import React from 'react';
import Gönderi from './Gönderi';
import './Gönderiler.css';

function Gönderiler(props) {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { postLikeFnCb, posts } = props;

  return (
    <div className = 'posts-container-wrapper'>
      {posts.map((post) => {
        return (
          <div key = {post.id}>
          <Gönderi postData={post} likeThisPost = {postLikeFnCb} />
           </div>
        );
      }

      )}
    </div>
  );
};

export default Gönderiler;
