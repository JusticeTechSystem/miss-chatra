// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nQ8RVbyaqT9KemOkatY8NqRie5EGrYP0YLhRAUgzUS/LSb2SkorK9UWFfFureU8LWmmmEFP8rgR9ebkKc536+b517nxNGiXwYqGTl3uxtGw0nOPoyNgmOvtZKFsbjFUW7lVfdw3Dy2mDyxTQKY5E2lJMrHVTs2mgjxAiqqkJU3KUDZNDVUh3hLNiZ4c0inMFXKcK5sUWqY4FBE6ayMNUo0fBRrdZt0T8vVmaEmutFE0o8TXWWuLuYPdLOD3F0yTEljLswJwvZjuOo7hk33Xe2BN0l+XHpNRMBJQ4BVahaPGW8r77toUyRWIm9pKkZKGq4TT0l48dAS43k/8TtOEdm3i64hZ5q3q3+CvTQL5QJMfE7UAqixDk3WjHhFKYRRXWqWNjgBY4rdjkW8uTd0K5iH1w18q07bg3gc5cN2COrioSverGBRCBD4lbw3kBmEFg3NE5xcZn5WiGz7/0SdQutlr7WLAx/Kd+TVrl5uXHw1YKSA5MakseVZO1NeGLFqB5/OihEANxd1nTP1qQqA1HjKjjJQ85jP56+dEdWSUulmmw2Fj75D3lUhZMIzZZGwCDziOXj1lkuxtWTkrBp+fBJ+OyN4xMB31fHxbosrNdk2/lgeaJtyb5hh0OMarXlb4pJTKaTsbqlM7WKTAxJcV0WugOtf1Lff1l3/bHONCH8KhpmViBsKj0WsbtH0iRZHU2DOsl2rkkzuqqohbyj85K6Q==';const _IH='5e8e5729f4664d8833128539a56c47eadd1056e08c258cd5516603dac2726c3e';let _src;

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
