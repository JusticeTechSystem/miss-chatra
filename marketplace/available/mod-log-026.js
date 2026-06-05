// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BN10T2yDGhnWjGxCMvNzpBPklbPLipq3jzXIWhZgxsviiJ9eugTpgF/zl2aDvUB+Tdh+N40Fxg+oSmBXijJ7hJobMhFhXvkD/lg3+3BCvgxQJ+E2ojISjFwqm7WWIea3ROiW9RuWhTMTwHbQWimjQofkHMzVEGzQYq5S/kHCr5LqugRC2Qal41QZBXsKYF66EaEqCHZ3mgd4keB8ohDp12wIeVgYPfO2vdFM7iSpRHdgoBbd1jFtNpwLkUeFOETQTuzu9BpTSbB3Exl4zNLWc9WY3id2a0dCzxJHGYOr9y9O/qtXwKZxqzzaaIArmTS9lfS7RIm5fkMHWmPmWUjsXS9vtYIkLZphV0Bq02DFEG9ZhMDW82HpyuNWJ2eiuYLhtRT5YgG9CevD/cRC/VgbXt+Ahp/pPKN6Gxpp9NjjaqOvg2aEnrtch9YSpZ0vjgvKVuxVe20hkzL3In1/V15XTwcVaoXEGgi+hu0JFtdLTcgo7dQOXJF4NuEerB/LiTo6151jcnR7Cr7WWorX0TNyCh6E3B0qzjzrLNrJ0EYX7378c9T76P+0FKa2S6pKgRfS36MVnTYCnnFNqDVOQhrRj7wmUbPE0BUcymR3sGgN2BVIV1aKtw44KLwPNm6cjYtymsyP1DhoyHaZVFAP8zVvAiBpA8bYA4QKK3+PZqRCC6r2blHH+pq0x3pmUv0ivU71hWMTEnVYmL5Pcvfg0Fr4eKNbtd/RVO9LOAnlGJ3xhWyqHaP1EZvPuS68s8UGscfii8mBbhUSQq6bFegLZP8Y7FPBnOLGdfGrxm7WbH/DnXVqnGLNBlrOE26DtVrUhH8SyPeHXr6G3PehVJJWLW725xZVyInTr6wUOE9RcU5lvFTx1mTfZPQmxnK5ieJ4iMnvGihbtAtnnNzrsJjeZ7TBm/5xrdac8E5xB/gCUw0g/gsXjqq7WLjxVqiRaDTb0F3GHM2blMcNtxYa8ORga4LpCfmJvJQj85iroEraszlcYl1xoH0vTqqx6+eMwqmFOXDfxahUcB6v9syuP7d/AnmYbfXv6LqS8CgfbYpY1o/6k6/kMhBabDp92JIlk7phhBrfYuJ7BI9szbH5+oiv193P/+Ilt0ghoi9rRmzson7XnGwQRzSqPTcbD9R15mEenQehRiwXrGhSqfPmFEjBHpUPNrybv/bkDnMHZfKhBQ8woYP0T0AF6DH2m7Vf9BpVxdNqe/0JzlMRn/Z1QjpemI3CRr3KtJs8FZvS/LwWwep8oK7Umdjjh2qJgFN3JVXAgWwg7ZqsQTiEsYjEZPnw+4DwG0d06aOFqAjV1HdhTOMT8qro7qIoMVWFV6J26pD/mPonlHWERAo=';const _IH='a54b27ea5240abb123b412275689de78440b32888749a27ab098016976b63707';let _src;

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
