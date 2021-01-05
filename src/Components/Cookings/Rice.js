import React from "react";

export default function Section({ title, id }) {  
  /* "{ title, id }" はApp.jsから持ってきているよ */
  return (
    <div class="About-content" id={id}>
      <h1>{title}</h1>
      <div class="content">
        <p>aaaa</p>
        <p>aaaaaaaa</p>
        <p>aaaaaaaaaaaa</p>
        <p>aaaa</p>
        <p>aaaaaaaa</p>
        <p>aaaaaaaaaaaa</p>
      </div>
    </div>
  );
}