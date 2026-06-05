// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z+z3kMKDFOVPOViTGFfmyrrTyO9NQ2BVEIQ2pthNJZCWanmS6J4VTeiYDu+/Ho9wStWFFZPFlio6FRUbuIV4vmMu7nJZBuC+vS+dmGhEfZEJNpYtl0aok9o/DsoE8zlSW6QOJT9khOiMqUBnSdP+YrSHl9wkIlBB5fqlWrRv3ezoqtWMjUZ+yq0h08mOWiErFvxYBh53CmXaBuegocGDWyRgcKKuW7tpJ7JEYMaQN0+DDoBoyoU0GjiTOJSANedksrSeuulCy6ByBPBy5Fdx18RVu2oAqAadcH+vBemA0ySb9wkMGORv3cHSLxyGubPL6yuGUq6jbm2GeCGQjEAWyAxflagUL4x3LacWauy3c4S7Z8jomkBHk9brQJ/AOFwdwRJCi2b4mkzEZof0REYXkxFwxHbyOQVRCNO3+TaJ5hUjV86UPWlpUdLhzmu6prlbeL3ZkwJi2078UydUNi6mR4U7t9emz3zypba+A1FipX2NxBG15LsXKqvbb4bUyU6M7QWuEC4vcoceP/pUAXW5Jks4MEdKRQ5u8P1oF8ZnXInxCeVQbM6oeleZb5jk0LsAQM33vXLWHm0WCdcRgGQVHiziqv7CJLchk5Aq7UfqNA0foG3FVs3Q8TWqZWzwt0C/bw3ShyhHxQZg8CzOB9QxS17HMeoqAFOiMyUpAa374Sa57+q+o8uDzwE3GcYoGfspPxpW0G/Y+fb5rbnMXWWcAYANJk7XKI/48weNGlnL2+4iUNso5bHv17HVPdOY1XDt1vdIYpkSagrDG32M7TtD361bIWPsjsDd14rBFbddLDWhbkbJ35SwCTnDo8yL3SEOpBxQSJVw5rlbx1PB0V1v2qwZ3CqogJpoJ+4PTUJsPz4FP6ScJ4Nlv/5jp9Dl+ARgu0Q0qvQlXMOq95bTVzrw0++MmhUni2Xoa0XQ7t4AQdFo9fzR0ZjFB9+Fuw+2l5hLrkWRV58bsPspgcjUZ1bfn/WMkY3n2tpfCmbcSvT1Z0IE9LWe9sG+1CjS5W/GbPTm37NE2Zkm6raGWnvgTzB2ogA3g5NGzMgPt0vbewlD1SS1F4g0z4UJU6HI4USxht4glmHrUbDohvQ/bYc7FZYwWMVQSUMdjrHUQxM+qHB8fuF1HwoBzoLl6shiPn4E89Fre8K42+qWCbo6XzDRPqbO62BYzTscp/RjL5JR4Xnx7eFBdo2hlacHaZV3Y/ORSsAQySCa8pYzw9l19wINo53UWljcIPAinm0QrCYDlaNp3f2FKg2gfXQi3P/3OGjJEj3kFjyAivKXCa461gkFiO7BWxKpypt/aAkq97cL9AbzW+y1BCwQfpVo1XXN+UxFb8try5FWB5I+g0QojUBD5LbLgq1Sj7JpYzIriuc0bDuUQRHeeH9G9FpVt7uHvhUR';const _IH='e0423f84833b32428c514ea73517f62ff7cae12ae15dabcf7b4653b0c8ceb982';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
