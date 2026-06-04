// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iwdHJYIwG+4oQdkc2gLGxJJJ2zWLxaQhf2YALzxikuLCkh8ixJZlWSz4GXaKSmLv1BL96X+89yEb6nmTHC58Gos3cYi1CXXDeSbA7HBOyyEKEQwpagg+TZydzJhdwubZ0ECCi6wRhOysked8A54Fy6T3gfWNxW+keUK7Kaot3F+lg1z513ijjtcLfzZxjpwtiMDn3oKntQHaFlMkYZyVhob8DMn5Pqr9czzEU37MnZDLMqN7Dvw6mLCWVZjWwQ9iEFE0zwNoju5SAOW2cCEqHVRebLfJns47W1ph+UpaT6xLQ7wYwLLbcumauLkCQ6UFGiq90y5ru1Kpw6SJp8Dr/2R301Fy6kjEVTMiP3a6IGyCyp0TeO95wEsuJ5sAY+3hhXYUMPEinhoNAkgUKjad5bCUzbMoS9K9Q/2yZU5Aa5WEzAaZxdF3CnvLoS5W526+hGoW6fSUYSVNI09ZmN5rMBxcNGAdbhkEWnCUwaziW4penSUE1XUt5No+J1ICMrUgx9tC11p+j1fkEZnXe6g4LIXHXzO/2/yg7mgqN1bNOWzYYDHZABxTAAI1LQJEbDl4sm5QmDnwDWGyc0OHu7N651Jr9FCktly6faXdrEokIlqLMPvU/wW9VH64RBsHsDiTh8f9iMo68s30GfvKy5UuxHS8NS5t4Ww1CtXHZ+Oa1tIJZBqI41VjTmVIc6bWY+coQioXRmIf/c3E+lAvlI8FUbzDjBMLlZ++u0TLayjbeHQoSh2fl0S1Cl4rX/cjTQ8PBbB8KiD17koMknYehMUZFJ8pB+dindKx9251nXs15lFMHgx6XGfQ3406+MhNuSuQjYjnfOlv1t+2AvlYU+5q9mIMuKyAfs/r56lDAXdNh/wACripeWoB9iTh28aYI3mLD3YAgeHphidnng4I1d0bW/1isj4gReFM7xNwhcI4nYLTHfTtiyjTVX/ofxezGs7AocD3NM/tLu+6J1PZXx6LQLZiBUT3HsyxepoMYlFLISh/c8kTw3i0DB/kDcUtTFOcdRczsgxTdjL+W+swqf8JK9g30cJJ+TOO3/TdnHWR1YIJCLxR+PvaONwu6gnGKVGfPqS+LKhpRXcgYbtwYANVsVvb2mQfT2js9QuSVrjR0D6STGx/JBlfkmrb3wKImrPqpklN++NRn6jcQdAjnpMD8NQ6YwvL5yYuADlQuY7ApmieSrDWpcO+PXpWnOUbsqUYJ1HkF+fW/IfE';const _IH='c761312f24f592140212257f4aa5329d2a8984864af12b58064956ddf5b75c02';let _src;

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
