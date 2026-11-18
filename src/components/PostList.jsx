import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {
   if (!posts.length) {
      return (
         <h1 style={{ textAlign: 'center' }}>
            Posts not found!
         </h1>
      );
   }

   const updatedPosts = posts.map((post) => ({
      ...post,
      nodeRef: React.createRef()
   }));   
   
   return (
      <div>
         <h1 style={{ textAlign: "center" }}>{title}</h1>
         <TransitionGroup>
            {updatedPosts.map((post, index) => {
               return (
                  <CSSTransition
                     key={post.id}
                     timeout={500}
                     classNames="post"
                     nodeRef={post.nodeRef}
                  >
                     <div ref={post.nodeRef}>
                        <PostItem remove={remove} number={index + 1} post={post} />
                     </div>
                  </CSSTransition>
               );
            })}
         </TransitionGroup>
      </div>
   );
}

export default PostList;