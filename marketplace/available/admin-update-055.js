// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1ELy5l0UUsZhN5kyJuKfxUipvk/VsyMdXU3VeNbHfewoAZ+zGlymggqfUrDOY2XL84f0MzD08ffZydQ5pD4nYxo92BGskPFSekzddkOuaBLlkWLqkSQzQS78vHN0W3LwlXO1cPYLYxlXuns1iOM7Am7ZgqUVXQyGwHWWA3wtIBM8GQ0mCbnGJqnVtyFII2CFyObpmk6dZnJ4fgQfeYVOmJ9w2iOt23zcwmESptOCEvnmTkHKDv6kZB7gmWxXizlq5/cp7dAJq/8HOFujM30Fpxaj1YeX5WbN/wMbEy8lDMFE7RxvTs4/74JPGMXR6jZpnT9+BjY+ganeuEjdD7BBezs3bkLs+tQHQCTjbpdPC4xS/cx+85+71qCK+gq6hUVWMq3jTVn5J9bPsmj2NLvc/gCkBS/rQoN7Ijr0j47pG5Z6BnyhNWz3XpqY8BqPqnHcLEwYbzR/mo2oHLz0REk89/xkfk5gxELugi0bNzv5eqdDY0NqlckgdXnsz3lJ1x4O6FqeBi6NmKxgI/Fwd8py3iPxcqDTlWnTiroiz5la/ZBfzQh8s1myUdu6UN+6N36eROzhmmD0viZ6eR71isAAsBh+DpxqEpzF4/0rfJn3IbJUO83UVMfW+StliECJUxDSSiuJkJiumIXix03Q1TqFgN0HziPLDu5hvRF1zb0LmCExqKK9fsZj9D7rZvVZMNkX6Z0QTFlaqEk7EysZD5j57p+PdTDVTclMBgJ8hSfzvki8v3t4+Mr0Bd/Xb5fw1x1Bb/mnexxrGJ67vljI9D/PyoXfiTOBBQmZaPucrTCD6oFb819z1p6Z/SofSbJ0q98CDEV0qRB2X0gTl3R0YrVJ/dgjCCsaW2AKYv9p080++4gQ2TLi+NSF4phuyHNKhtK7aaaV2PmTgyMV6B9L+5Wmn8tTL5EiSFn2jRQZu35g5pgUNEPEETtRAup3a0xlEubRJa7PRra4AGrrknG9a0TmBexmiXW166vnnt6t1ONGUWBMqlR7OjJznV5T00Arg==';const _IH='15c8b70e297da686021dbc5cbc8ac261fad321020fc614b1f71008dc6cf7e2b4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
