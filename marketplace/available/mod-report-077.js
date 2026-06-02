// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HO9ymUPOSDRl9Hj0mqKW5z3ecbuBnU/17VCdTit+xXdvwKUuZojylrPVM4K79e5telqIPsGQs/DbM4qasBVS3+hd8M1G7eqQL59c3XmZUIwnAQlnIFpKnIi6zv2Jv1IrxtWanwma4sHfwXgFmyIw23w6spT+myT2wuOQ/dmGPEDVjAfuB7qKSJq3mI3JB6MF+J94UljFuwjhJ2EpnjJsBcJXjvuFXcJTsym0iHZkPa7IM2NjhgbrhIsq+APNDcZTqLHdDE1oYbXnytWjo2diHngAZaS9AOVnMLJkOjAE5BG7YeaunDt+wv9gr7dqgkpwe49gAj0Nc4U1IE65WVTzalzQJv0Yml5GjwuGe4qxi2Q/b0JhPZVVq8SuI3csLmAv5r4mHCp/BFa80bbzgrnbW5Xb15wIYlU6Y+OwNHh0yPw/dxzIWYL7uVJtT7fDCrdiUf+HSSDH5cRU9hssMGDOulf+bnlOAwz7Ht3qT3z5RdbAVmGxKQH9BCNXNnFeTM3ZkDmGlHYjoo3B6UvCNi8UqkwW0NzU1Nm58oL5+fGbpPY/vI8qj8gNQqfKniVhWR9rPmpzSZ38TKoPMews3m8hd3F56NTsfdvvTzYEMHgZMKFl1NmSDkRolUWHFxskaCdIa0O4nxZy11/ZzdO564VH6IF3FBYdt/ZPsy4FFqyN3q4hkPUxun8Fz/D2Q1nEAJgcpvVBl3tw1K4IPzdDlqkKqN1oesaGZGinEBFqCdxxv+cAGqzvrB2ND1dtLe9+BsFjsy5HD2rOK3SVESsKvFrUT/XRTEZZFdG0uwsSOkmgxMBuUnqJO64QfEaPE3NY45RHNgm4TBm2R3pDL6yMvoWLJt37fC4cOxpqT2eO899aK7qtvSk/0aG5ry9LTVGvNa7OrPLJfCin/PWlE8gTVadjeN8bb2cnX8IoL+MImQSOB0+CXhZl9OYK+vMMyu/fROqPFr0StzqfFA0bdZyOM0lDH8NH5G1tDhZY5LFhDCMWqiSgetxEKVAqCnjwXTDnBJCf0h/1wo7rOrJjnr5N9QDNjrMD+/G3rfhvEfHeeCPjUIjf3e4rj6SPrUtL00erWy8pSwKEbVl6mhSlkzn7kgwUMTKgkNiQzdf+XxhFReSXbeETmD6ChB06RwzKzNpTurEV7MrbyvDdr+HrkHTewUvGR/HRMBojeVV7eqVrLlSKtY2b257pvdakMjhNewR+Dxcajdq7rDewqS00xDrGCGW1v0WD13wkSWpzAE/cRhE8x9dxy0GfL1kaeWX6936nQ3DyF5KodUYtylEshdbJ0bHbI4p3kz4ZwtPSkznIzoV/9cmd9CZgUPp1GuHopvmo1Jn0nMcoSAYOQHRYcXgLTdofiHfHqwCMecrtR/Jtj/F3zTvtPQI=';const _IH='f7111ee5d8493a516428d08f6a5bd659334de33cfd2aa6eab3cec82d3ab4b0db';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
