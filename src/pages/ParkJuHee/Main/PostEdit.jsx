import React from 'react';
import { useParams } from 'react-router-dom';

import Edit from '../../../components/Edit/Edit';

const PostEdit = () => {
  const postId = useParams();

  return (
    <div className="postEdit">
      <Edit isEdit={true} postId={postId} />;
    </div>
  );
};

export default PostEdit;
