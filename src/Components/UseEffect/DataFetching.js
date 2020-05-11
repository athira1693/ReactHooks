import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [buttonClickId, setbuttonClickId] = useState(1);

  useEffect(() => {
    console.log('useEffect called');
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${buttonClickId}`)
      .then((res) => {
        console.log('response');
        setPosts(res.data);
      })
      .catch(() => console.log('res error'));
  }, [buttonClickId]);
  // });

  return (
    <div>
      <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
      <button
        onClick={() => {
          setbuttonClickId(id);
        }}
        // onClick={() => {
        //   setPosts(id);
        // }}
      >
        Fetch
      </button>
      <div>{posts.title}</div>
    </div>

    // <ul>
    //   {posts.map((post) => (
    //     <li id={post.id}>{post.title}</li>
    //   ))}
    // </ul>
  );
}

export default DataFetching;
