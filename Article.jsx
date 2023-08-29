import React from 'react'
import './Article.css'

function Article() {
    return (
    <div >
   
    <div class="featured-articles">Featured Articles</div>
    <div class="article-list">
        <div class="article1">
            <a href="#"><img src="https://static.javatpoint.com/ds/images/ds-tutorial.png" alt="Thumbnail"/></a>
            <div class="article-name">Data structures</div>
            <div class="article-description">"A data structure is a storage that is used to store and organize data."</div>
            <div class="article-author">Author's Name: Rakesh Sharma</div>
        </div>
        <div class="article2">
            <a href="#"><img src="https://study.com/cimages/videopreview/videopreview-full/gvlaath778.jpg" alt="Thumbnail"/></a>
            <div class="article-name">Operating system</div>
            <div class="article-description">"Operating System lies in the category of system software."</div>
            <div class="article-author">Author's Name: Rajesh Sharma</div>
        </div>
        <div class="article3">
            <a href="#"><img src="https://assets.robogarden.cn/robogarden-cdn/robogarden-new/Articles/upload/blogs/lg-how-to-learn-algorithms.jpg" alt="Thumbnail"/></a>
            <div class="article-name">Algorithms</div>
            <div class="article-description">“A set of rules to be followed in calculations or other problem-solving operations."</div>
            <div class="article-author">Author's Name: Aditya Rao</div>
        </div>
    </div>
    <div class="see-all-articles">
        <a href="#">See all articles</a>
    </div>
    </div>
    );
}

export default Article;