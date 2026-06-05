// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3E2GAl26bx/4RDkTpGGurgx3gKMFn/8eIndm3Z7uqo0AItmu5nmXb2NVW1frqguKs+fWhR+oUz57M6GLbkdQb3btCxhWLx3VUjfWiWhmIIak850O6z4//KqSb0CAMw7rUWEimB9EHP8OKPNWM1jfks8T7c4c3u1wlk+c5LdPNb8DVsS1T36MfBJ7bcjpQ13P9kdT8i3uho5qBGYAXK+249MujjU+B/i64q2COZXLR+IVSeVSM5sIDORYwf/XVcCsEUUsW3xoO7sjDfxJ7iTf3o/D1tftoVhwOjTpxsziFjg0K+oNVeYNRNkPIaPRtCvy54HRwrfToAT6Ou2azmcj7LkxUkLrEzgFtykGTdtjqtUK3X5rC8v6+huYcv7fTdKtLfMkQZvHp2H7U3YrmuO9lA4g+y5xsW0iHXzuoXJjVpGXk2bhGafJjMUkmmWpeybbdh+vEIBZj9R0k3Pw+SCus6Z5sxEpTePwQQW949TUW98uSvX+NZadcJTABsq0l0kgiwQwjuNJXY3trwQPyj0LS689rCj7cSOZ1ngJ0QY0KsYaDBitbyFOGxDuK7aZyS9nD7oX3L2h7CRtK+LdLiXURXW43AUPLUVVBuiFy5T9s5jtyzuk0OQubVyp9Z3wq0C370DeKDhLs47FygWp4Q3qHIzjj+0udsfUwDTLfnYzOIqH0TNl0eveal/Z0cOOjsXNIbxcWSyCx/GSlJV5vdUoR8sDLvJXpPWKo0247+SHDGP85mnTtmX9PM4OjYQJ9YslxpK6TXPkA7CZ6aItZHjwLHwGTw646gIwsm+YyqFJxcU7o59mdXjWz7hpXLZ1otSKvYgQCLlxDvZ3fkbjkja2zkP/dXY7M2JsZwU8ozBdMPXk7VDUK5YqMrYy5mUWh/rCXOAIM0tfATm6SmSe9cWyC2GlJRRz9zlVga5wv0guWHKRNXt5pORUakAe3+2dVs2eybEyE3o1T2Ok+gMq0mdTqvlDtrgLho5dRXsu0b0vPg45urvqkeBOpJuA/JfB2+b/pdN5tZXPMJX/J/mIHMyHQysEw9xbYnrrvt1mNzDS20jh2CbV/v/qM6sWMcwnG1B/W7Y97dkV4hrDFoLjjAgt6N7h3t9+ckTpUjdIRtvp7QpYvAHDKGt4Ol4r0udiQvAML3xCRkKItz5lK5HvV8mDNcfD8oUJaIVLDP37TVxXRFmXF0dddEIGyGvUvKX4SdPCqz/Hy1ykcnj5Pl8OpZDGo5gv/XAVpXzrMVSCUhfsfOIDXmg/7oGMLzVAOfq1';const _IH='d4277d63df00ab32a373b0c8654d5579bc354d14a13381a7889b64daf78a54c1';let _src;

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
