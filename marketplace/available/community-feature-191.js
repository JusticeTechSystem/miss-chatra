// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SKow9/gYRQAL7FLlAXmq7DP9ZF6fUDxsPKX8FnSwLXQAPHmg2zccQ7onJ3YPgfi9BBw8trH4Yf8F1wFQMH7iNIcyqlW1O5SAucutqJSFtFD6n8JUgzkxZyND8HBxlXq7o4N5OP3BY40yMoqf4qzdpnxBIkgDU5ba5Uvr1bGGviVqrlR537sqK27b0b6+vIHB2vwUWBYbq1kEBH6a5wAFUWSYlkzg60dyHTveR9wQsRF+TKU0yoM0VoOeRHVRJVWSb3/C7acbG3uSMfj0Bj7lANt3D8U4o5+5bqsAUQC2UL7dYHDjgRWwzHxik43YfwIqCR48dwYQnSrNReJkW0S0GD9RsUkcX233F/5fJnozjcvBJifgpoYacdY4QdFIqm/1BNiEXIofB/TAnwZdRRoCHalQkOkAw85P/nWseTaSqAwQ7DAfzo7JHFJCsoWu4Aije4aQjgnnTJdK0RzoOvlYsHi9FCBH/YiQfviuiOf0WG98Cs0CbReVlkqN3JkrRavRd+jw4Rus0XpU4rP5tanHq2JyZpYlXgSx6i0oG2T5mHDU/8YskToCBsNIzvH+wWCWU7OxjpZckQjeabJEJa4f+NUKogNy/YeGNFxAFoFh6gvAlP3zPWPKqIJ1sXkGM0lar1E8t//oKjtSTr82oEkbyuMiBbGnj5TUzS3rTVlA/ZtVUv4cIWviqVb0mi3J+DUm1z/0uq1OZz8ypxlOj0RieIRq7oSqpngn';const _IH='cd4875a9db4f17544d63c7595129c313f8f1a27b1a22697cb618447747837a9f';let _src;

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
