// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AoQYx0cCs/9HtMdUzGE6X1OiZcgd550QMIuc976W5Xf6wpucg/Kd5Yo7l+tEYbe/MdJoOn6BWD8QBkL13Fdp61ROKhlIHeDgAB0j3aCvoOYpQskR/bgsLsWn0mfOoCZnIXxV3mbFKHhFc9ibzZLVO7wPm3ALOim/QCfKdup+Fs8PMSfm1/86n/9Rx2ZcaxEQ+2nOZjytvtPaJvZEf570Shah1U8mgKRPlvUb5t2vEOQ922PuxkMMnXHiRvrfgO1hxUlJ+TZPar+cW8EWm3dsERIh+p/Ta5Kv5DaBz1lToaZSiRDNQXFCMAeSnT0vxAa0bBONqVT27Rg/gkvrlSWZHvnzY4atRkWYhFzClFrPckWszgccNgI3jTdCD+3YhjONtzGXI+4lebUpHqLIu5OyUUyzlRUj0t2MQZyf1aTu2mVK+ztzjzzZz9Ks2xrX1r/3gm7eYVHhXF3ricpo3R1I8KVTATlo80qWAa1+0rAgQo7ebx7IiSc9thBv8jSGqFNaIZosu+1DA1vsu64Hz+dm3h+AZvXmK1Km1mst4Q6ueFIlVOFiYjaN+lPkywEvJqQFr/51bUpps40J1wshxdI5wqYHYuB7Bl888gNdSPtY2BR9rfks6Na9LN3HVk+hQizJ1NucR9+59wR5QmYC+cxFOTo91lBOuiCKfwrQyfX2+ZALysIfKwX9p9Xy+T31Hb1BcDEfcBlCnsuZWT+t5vtMcQ0y87aZFm9IN7FjaWvEh0QYOdxbm0E3EHAaGdPFCpQipDP1zJIxp+XaydpXXmVuzkfWwfVvnJtIn5R9tT75Z41O4dXkA6Dz1gX1fTbqqBFmuePOlGXQxQxQJbRKzVQKxtVoNv3td/XhbeamwOj/tGHxmNyFtQ9HUL1Ti12W9wkp8xRkQz9nIs/gzBOUohACIeENtG3LlJvIcw13mcGoRf7webRSXNPiy4ZTRqHmNbAj6R9CJC7aN0GqDFFhKo54tNdp0ebpye5qhDQyQwl9cfe5AfQfkoMmyjdq1xLnwyQvgR35Fw==';const _IH='2a962b5a1bdf31a07db9d54f8bc05c99513baa1c40e2b1fea9e2a02178fc65e1';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
