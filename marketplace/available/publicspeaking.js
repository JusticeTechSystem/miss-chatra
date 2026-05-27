// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9e9qWiy8q6EQxbY2eIEDa6UGx00zt5dIhU8XCVn0vDuhHT5rgB6u87dTOlwA7HdMifeImrBSMVhFfHjKp7dHY7/89blK3EbrZFE9yDKemTTL6heotdtWkMub/fZ2mhEdOyNJEjpE0J3uj92CRDSnEzBPw2WYV6BpgjVNGKfa7Hs6buUsp75igol4gvd37D2ff9RZBntQG0q2OKvfLfdi44yhTmbsPZxOiihNKKB2m5vozDCS34/2s8aREiXL8uGOcKe/ZgG7uy0XrJKY1TuLe/rTMlS9pF10SICeOfivxubXjIABDnWuQDw4OIgm4H1qwfFzeQkf6fz77LjWLyvDIalGLlFcJgyFCx7pQVlhMfjK8yQGdEPyZyVjTolzG1MkN0Ug4gxmgKdCAaZ2Hf1pOokkWukh1TcdzinqkedRr/hPMvNpQ9XbtR1TARBitkVeK+s6ZY00v08ymuwRl2XVWPTUgdpBZ/nKPL92yl4y8RWjWZzzpyVqTWQGebSB+fBmiVALaCJfutayza8IWXopecoRgZdy5g09wFLJggssCqYjDM5C/Rcd5fOz1pPXH7NqDPiZq53NvuOj8AqaHJqq7ve42CpMJDGQunc5Kpx0zNjmrFjyZsI97LjHDr8I9tfxY9aazK0UsEE3A4Kl4b6gcTgZ+YkMTZf0kqZgQHt9/5TZmbYTRjTxuRRxcawf2Ioh5pLFHYQmQNI7PRX0frUwwikJtSwCxRRT6kNs+4ySULX1Ev5wgwNxDVjTCZmq8QNELIAd9R8/twrnqgUOcCgIEo1lsq/JQk9+ViTHo55ipmroicWcY+ep94gLXj048+cbFFXNq7UBsZxqe8STNH3jSWQnlSGm4LCwf1gprdO8MeIsNjx5iLJC/Ke34ZqiSzkaQe4lbjGQE1kOp8SyCR+DERv3l3KU+XLzIVDHaxjD1M09QWb69r8mH3S3FFzNKEaqXTYayoQmPodMxukLf3TOP1bXtvT/pqDWS6N41/yAXHL39QACHr9dNxq1g3bVUiNnAt6X6pVxY62FH86MC/3JdG23p+IHUUbFQTUZlSZlOkrHZv/5EqzjCzwr9KZI8RCpaKVbUJi58a8yeRu4+RMgeTp2TUuIAv3574Wf+4VyDeLdlsqEN40A9xDTnD81LZOpH+3KkvaQWezac72UkPxwaAhw4E4bBqz50sCH50Mwdcbf9T1LKDHMEc5zFjYZg3P2M5PLnZ5mOwaOWLj1wLrYGYiD';const _IH='83362339fb8e5c0ae36a222401ab760c953afebd3e11f58fe331fcb217c22138';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
