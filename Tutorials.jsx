import React from 'react'
import './Tutorials.css'
function Tutorials() {
    return (
<div>
        <div className="featured-tutorials">Featured Tutorials</div>
        <div className="tutorial-list">
          <div className="tutorial1">
            <a href="#"><img src="https://4.bp.blogspot.com/-s2EhTt57oeU/XHtQtO1QNLI/AAAAAAAANW8/KYkPQEZUyocSpA2RzqCcVt31imXPi63RACLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg" alt="Thumbnail" /></a>
            <div className="tutorial-name">Learn JavaScript</div>
            <div className="tutorial-description">JavaScript is the world's most popular programming language.</div>
            <div className="tutorial-author">W3Schools</div>
          </div>
          <div className="tutorial2">
            <a href="#"><img src="https://cdn-media-1.freecodecamp.org/images/1*3WTslHrSuJfqlj3qZRRFPQ.png" alt="Thumbnail" /></a>
            <div className="tutorial-name">Learn ReactJS</div>
            <div className="tutorial-description">React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.</div>
            <div className="tutorial-author">GeeksforGeek</div>
          </div>
          <div className="tutorial3">
            <a href="#"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--nZkiUiDE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yfwwqenae7gx9u8bavtj.png" alt="Thumbnail" /></a>
            <div className="tutorial-name">Learn NEXTJS</div>
            <div className="tutorial-description">Next.js is a React framework that gives you building blocks to create web applications.</div>
            <div className="tutorial-author">apna college</div>
          </div>
        </div>
        <div className="see-all-tutorials">
          <a href="#">See all tutorials</a>
        </div>
      </div>
    )
}
export default Tutorials;