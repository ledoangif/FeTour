import{a8 as n,N as a}from"./-qx6OsVB.js";class s extends Error{}s.prototype.name="InvalidTokenError";const u=n((t,i)=>{const o=a();if(t.path==="/account"||t.path==="/Dashboard"){const r=localStorage.getItem("role"),e=localStorage.getItem("token");if(typeof e!="string"||e.trim()===""){o.push("/login").then();return}if(r!=="Admin")return}});export{u as default};
