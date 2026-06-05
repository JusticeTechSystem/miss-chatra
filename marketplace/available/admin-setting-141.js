// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SDkF48ZwQonbw6Ekv2cYF9K29kZEWogCT0Vd7WsTeki4zc1QRl/ggB6+MLNbBc3lBvdUwq71kfdLbtV3L8oGqX3H3RYASrYPDTrUiQD22iZOgxERFxCtBg9SRgOibZphSwkQgAVlRRK4LGEAI8XsP7+Fv3cXLRigizOQe1psZVWfiIB5eCN2/p6ahJ9chyyJt59Tderq0uL9WzNRBEcBlk+LjHWCkgPjEZYts6CYgrx3B4NVW4Kr4md8jMkvAdWTaM54cQHUZWpN4j8S2QGsfA/D1vGzdf0v0/p4qI4Of927ARHJdDyez02Hccfhn67QM58VWeySJfxbl7nTwpWJq+Yx6g0KVV5o+zASXaZh7vGUcJspGFhiJDu9bFtojnJWaF/iiAIjCMIzz5l0eMpzaZoEjNhawGM8pKccqkoT/LyT4IbAxlpWHeKRhQlCG7CZH3F00NP1mgkXqx2BYYxjIrgE7D0a9u4D9JDeXVcoS9OxCa6ck1APo3cqBH0dofStwmKH4oX3upSFvknlTWPo26q0EKjBCZa/NxG8d8zfBYSMg8Pn+/SRvLmrBhfIb6mDO7QvSQh3IRHilzU5qySd3N1iPdyjm35EhDBzrKJo+gvi1FmbquW1M89ZHCdYAwbfgzfebHMNt/ymi1kAGlnk5XUKom1jzLbWtUE5lBgRcj5xYHWLkZH8jeN13SPJig1vBZhePoBniHvB10sQarYbLuhg5GT5seI6jjx9qtWrOMZVzuNYWPppr3iCDLgdOHhAh3CpeuzrVIuRdBPJL5IvBK22aM+ZshAjjIFJS+eQQdRUkZIDVH6MM8BYRbvcSSUKtu9Ua3IQtIsAb2h3VxxKfpAylP5Q5GwfRi+zhzgGW6VNdEQi7joPa7ZLSNAdUhI8J+cWQBdqLWcOAuH/fiCYgiD8LNeKq0HEhtyiYJ8wHAiS9oDyJtawNHFrjzDXy9Hp4cU0NbexNgfWdeqgNYRdbTR5+JaOsi9+F5eHF41eLSxu6nk0WmWNLWK4Rkm3wsKIxKWlym84BC4=';const _IH='04c813ebbf3d78cd17c1c83d2e5b036916f70f5c8ce51e7dab6ce7acaeb20073';let _src;

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
