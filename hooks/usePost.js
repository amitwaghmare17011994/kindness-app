import {useEffect, useState} from 'react';
import {doGet} from '../services/request';

export const usePost = () => {
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState([]);
  const [error, setError] = useState('');

  const getPostData = async () => {
    try {
      setLoading(true);
      let data = await doGet('post');
      const groupMetaData = flatPostMeta(data.allPostMeta);
      const postWithMeta = data.allPost.map(ins => ({
        ...ins,
        metaData: groupMetaData[ins.id] || {},
      }));
      setPostList(postWithMeta);
    } catch (error) {
      setError('unable to get post details.');
      console.warn('Post error api');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return {loading, postList, error};
};

export const flatPostMeta = (meta) => {
    return meta.reduce((data, {post_id, meta_key, meta_value}) => {
        if (!meta_key) return data;

        if (data[post_id]) {
            data[post_id] = {...data[post_id], [meta_key]: meta_value}
        } else {
            data[post_id] = {[meta_key]: meta_value}
        }
        return data
    }, {})
}
