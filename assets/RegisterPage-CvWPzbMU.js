import{u as o,j as e,r as i}from"./index-DSuFp047.js";import{D as m}from"./DocumentTitle-DB_TLKxI.js";const c="_form_vwvqb_1",u="_label_vwvqb_5",s={form:c,label:u},p=()=>{const a=o(),l=r=>{r.preventDefault();const t=r.currentTarget;a(i({name:t.elements.name.value,email:t.elements.email.value,password:t.elements.password.value})).unwrap().then(()=>{console.log("Registration successful")}).catch(n=>{console.error("Registration error:",n)}),t.reset()};return e.jsxs("form",{className:s.form,onSubmit:l,autoComplete:"off",children:[e.jsxs("label",{className:s.label,children:["Username",e.jsx("input",{type:"text",name:"name",required:!0})]}),e.jsxs("label",{className:s.label,children:["Email",e.jsx("input",{type:"email",name:"email",required:!0})]}),e.jsxs("label",{className:s.label,children:["Password",e.jsx("input",{type:"password",name:"password",required:!0})]}),e.jsx("button",{type:"submit",className:s.button,children:"Register"})]})};function x(){return e.jsxs("div",{children:[e.jsx(m,{children:"Registration"}),e.jsx(p,{})]})}export{x as default};