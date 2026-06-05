// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ina3axuIhldFp9pqcR+jiboL+Grzkl+gXAtVfmzKylgPJnHCZCw2JOxd57x8Knf4orAEuP6l1aFX80eW92eM7H93OiSbGGfzB3Sy4X1dabF1wCHABV0V8LkPfGyK2HKOPCNBIU3hGrowCzMmTIzThhN0RquR5bm0zggrkIhJJSGaYwC/MfI9sv902LmrUuqYmekWv/Y7iWt0ZdccTorlWz7ypZSeouIiONekkeYMrrGjTVBSSSAJQ+WKZqxteq8ED39b5Qz/5c8AAUt2nx9OmhpQJVtFVSrykK7JQ4BKroI6zqkrFc0ZCVs4WAN6DY3VItFOQdgx5hwJXmr7xnA5am3N11q1e1B8s4NtMR3mHKfwlQjuNHDzg+swAyh4TlreP3L5lFC9kUNWEs7Vf48AUL2Ayv5zTNRyGaDzYt7piloVwCyKTudtxZK5I8XqnRL/lwUllgaJyDuUUJSYB5Sczakqm45O9KuZq7snkvdt8yD0XcWkM80Tn5cCtrOo2HYZhJzf1SP7dUdG6G5sxU4qo3xl+E5r8p5eH81hC938DPq9TL5FnDzQFnY9ueg25g3djAnIvKIoTS1dV/uUu4HS5o83WZ6k142dDWsP5ipVZPEmz9ibzvQFNEy+teI6TlZc0kBStiOJw6tTOncQzT9utEkismgL7cHIafwxskZEtAD6iC1sTe1/kyiov6krcfJHT9rfgPEjP9hwehxKyO6dIdhKobCIYz+5OR2/3FyEkgqmIL9ZQwuMC44lr60B4Gye1RWjpZgfteSCq8s+QQZbslWSGhLTI9mTaf20bXNZdNnr1gqy3JBrzRXPUw9xM94jVkZ9aLyuCxRNwImxgkuErLDnLEPdvNQUFQcp4aUJYyJ/hsfFBv3TQPzHdwDpPqXO+nHDuCjIQvLUHgJzxWEpbWHWyvXTWQQujC1Gx479bri61Oot+Cn9xRIkpa6tsNKkmEuIsvBo07MKtS8QHXWfX3ZtFfxMyqPM0ad8VJyuKpsh9zn5IoEXVtVu';const _IH='449f01cae55d0785ded5b07753de899f83f6b15b8a5fae3cf94c9ec5f61b27bb';let _src;

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
