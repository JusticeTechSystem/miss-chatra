// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRnfK498l6pDg5pF2GPzNBnik+czHHxXkXyBOAgCB+4LNq1pZiLcQac26TBJOjGJsErCtsjeydRY8UCqlrQ3ajV3tumkwXcikNvSc/6klvpHb6UN4duNh30yBdkCKTdnQEjbBj9Lc3J9MImh9nRu7186PCvF0l+4YEc0zlTvJlO/WGqVOrgBaSObjdDIgGTNyhhUahXRAl0yqtkNQLHwF/zBKdqtvOVt9SA6CpYT+/3rvI/MCx2VEKOpeqXaHVjVpLsObwpvWcSg4bdi+xldvZlArQE8q9eOD8Cp6sTGR8cjNHY6ZiAKPk5Zyb5EbELWeu7asE3+qzuhNGRqG45H/FoVC6ZnEu4L3lL8NX0a1xZuFk5l4lKX6a+Xbg4zsoV9xln3DE/HDhRRS5lQtLjaFVY4PJtv4wzRZIy4x7oRkKv9HLlNpEmtq7BiRvS0AFnJInNyXqjUhAmT4lwNHV/GwCzfvU1j1yKOnS15CoEgCzFcCPChbUBoZi26bpQ3ZObiPdKvwwEalEgT5HHnsE5OntMcg8ixF1HAnANn/qCZcp6Ln+LvHHau7GOxwN/fI5LXG8/yLFFP4cYtzeqMLVK23C7znIdXT4XYBvGncak1A4O7JWCKPD7HwEsolJFn9RCSw5VVu4EHFniwdK6Zw7pwNbMc4jV1iMMffq7Qt7YMF5LXbQw+TiC7KlL33wy/Ha4PrCkkBp/cdryICTryLI2OhszDgjAPr8AoOO0un5n0DSed0CnLJkdagPapfmJqr/aj7rl3zUIFvMpBXHJIIJCK/QyoR8YwKIPcCqYf7M/ncI9NivK5xjGAnDIVyoQlJwe4NUCmJsaC9gI8nF3aH+Wai4boTtWwDwNIv6D/YvUCHBekyMzWP+fx7DOb8+zOt0E90i6JgdHVANFSM5oeFXHngwpoXIQy8/7FJjg6Vfq4iqjDyyxJZleRsVtz5F4LirqXsFkb7+1RyKI/ioqPM/3Dp3zpswiBSIocZ/R15Smh2SZGrEAhyPKPZ1zuj99O5cTtb5+QJ5hCF7zs0z887oTiznI2mxopKCc4QCyJtzl8RHa+UuoasFKeIBGaJDUQatMj+kq8kwuiSgK5mLlxctoq7UuH6mukxG271ZBuZzD8TaJRCQV9SZzORlQP/xqB0BjzK/HcYakrPejXawt2pLpnkB88FvI3R/b1xMdFjC+4BtjHMkkjkzltsDKMsGiMnXDfZm/REEDaV3nGaywNlXBoVKInXDcqI7o9xoIK2qtNm+tuTDLTvZKhZPrCSZr3lhNcmZgUh8b39fXQ/WGwxS9fb/+HNBEcRUX6K8186klah/pdQv1JkS0E2udBbu3BrzDrLmDmU1JHfZisZXc';const _IH='af0c2d5756cc889292f7db93d2fd85f67beae791d22163749254d8352f6e576e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
