import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
import { flushSync } from 'react-dom';

function App() {
  const { loading, data } = useFetch();
  const [page,setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  const handleClick = (index) => {
    setPage(index);
  }

  const handlePrev = () => {
    let newPage =page;
    if(newPage==0) newPage =10;

    setPage(newPage-1);
  }

  const handleNext = () => {
    let newPage =page;
    if(newPage==9) newPage =-1;

    setPage(newPage+1);
  }

  useEffect(() => {
    if(loading) return;
    setFollowers(data[page]);
  },[loading,page])

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower}/>
          })}
        </div>
        { 
          !loading && 
          <div className="btn-container">
            <button className="prev-btn" onClick={handlePrev}>prev</button>
            {
              data.map((follower,index) => {
                return (
                  <button 
                    key={index} 
                    className={`page-btn ${index==page ? 'active-btn' : null}`}
                    onClick={() => handleClick(index)}
                  >
                    {index + 1}
                  </button>
                )
              })
            }
            <button className="next-btn" onClick={handleNext}>next</button>
          </div>
        }
      </section>
    </main>
  )
}

export default App
