// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4uLLhe2JktlPifoZ7tWsgTYotSHGNZ8J0kn07YxqYcVVdWtBVBNmeze9kXZbf6ySW+m9SE6HDvAQFBojcC/1Ulomk7ysmr9WvhzlryPJyCsiwCAKg0LShuUXbZRfjISSjIuAqKJISDus3WIry/q+ZbQJPzL6Hq2/Es2F7u9IxsWgFw90mxCSkYk1MOLyUIj5a8fKV8mWD9MY+Bi9XNGXMuoHaHnsMKNe4ZxGMNJHA3u+hSts36YQOuvBLdIA8WL+rj6RuwysiMqTgFn+M263te4oE9WvzanxHrkTijsu8H2jne1ALE8ws8AYe+y9CEuaLP8L0Q0DqF8YJguYRyqz/ueW9P29oVZixB651AEBavW0Hdo9HIMxZyKUVQxYM7Hie1rjgx0B/01yfd+KSCzcUWGKXTKiK8xZGFOB17d8wfSl7GGKH2OhlqZ1ithlX+ibcUfBAn5FWJ+rdunzUOUC0fwteNGxAC2Wu2T/gE/DUmf4Dy3JWx0imApt8t+0WzGrgw258abrqyKribPPeC+KdDlUpI2UyeoF3+aL7HA931O+U6eYw6vhsGlBJ1Hj+nevwwwwDRLNmGYMfaKXOI73P0qFGRJZivCm4ddTQJuKfkYI8PzeCtZWKCveg+FWlBtLiTDRkIOfD77BnJLQf8bLiWYLVIZT2n/ze9quje3+Af6PvdOSOUPQlgR8crQJVlzB0qxz0inrJ3Y34LT/PgStkclC+ElqLbef6DYZkpOg7pZ35S5YvhXaXQ22xIaMTTlAlhrDOgJcBhGyYWz8MtyGKeCZXpNdmbTmTiw8lkUezSqR+H/s4cN4xvZIPk0SiuJPsgu1b1L8v93vHS93HyUW9DxwCYcs1MYF91Z9NgTCWU0vayvPjqLDqWND5XOwxPyG47hCSLaB9PWms0LBK0BHJ2RDcf0hH1E5510bz5+UCRLKP36i0wLTEw==';const _IH='5ea41bd282ca477e1633cbacbd9a8f8af3c05197916db73585d1f669917fd30b';let _src;

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
