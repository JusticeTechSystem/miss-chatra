// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KOmObyMw8lRknX31tjpt0tUdjqFi2Tgp9WSl6/AzzLI5KsnIsaSEPc3eVHy7mKAupvR3Y3OFZn4Stt+d4R5hXQ2Ae1yJAealW2D6FPHUaBWH/Xo9vX0yYiq9UdO4GQAzeD+a3gxOONRbmPzv7bbsVdYhYnZHbOVW0U1AtnMGjqHQnZImBzyRMumZhHygsqLINX73yYk6msUTeecyXVQJs2ptUO5SY8iLCThLCCmUqjm7CZ9aZCX+DaQC6hkgSwYHoiCeY2zJg/xpnBQFO8tSnRVEqSq98Igj+VSgLsYKWYfdJtzjsJzSTOeFJ8ZBJRWLNaG7slSS8+6YbqllGI/i0DS1f04g5A74Y5MSBD3gY0qe38+RhSz3r04EfkHpRSrlLa7cemmpNaiD952nwW7D39Smeny+HlD5ux+zPf5nMXbC6RDqJHX0Zq1TR19Gm1noDEn2jXq/kNw4o/e5Ydw2yqCYyk8p8d5MLuasbOFBTB7my7oJ6tDQJ4vQAfPXtzfdHzcGP9DV217ljiaBNBK2SAmMDVCnJepWltwk9vikLrd3BlP4ojjyFMJeq1Lfx3AlDSvXvc7oOC4N/ndXcuzXmx0OV1cAzvGlej3BlXWkEkn3O4injBhpGE9wN5cak5JO66J3ebPlPWg4dy1LO+7BD5qC5ntm6m3SJ/9lKjxMFZGG1DWWVnC9za0zvS/7j8q8prX2UtQteyL+4byz+wN8jArr8yZKewugNNNHtbpMVnrjTyvJW4glagGGDQ83wNo2jOlr8k4tteQhL0X6H1wdTHGWFYvEFX6NGX82WDbboF1bmnp63TMWYaRpCfhOnw42tEgOqNwY12lKttO56gxzeyW+a6nsNqCzw2W5UexxX8GX2hqNSfqm5GkuXaGauxD/Pd82CNtcEWvSU+mdAJyidz1bXC2c+zzqTSTuX0eOnvtoMKVhTAkEftzJ86jgvMBFdRc6qD8FnKrEQPrC7Gy+8P0+XHrakFD3jNRVvsI2DKcaHLRDNC4/pjIwFgqU';const _IH='f98c0e1f3b37b4513b808cb2605a184efa91939b813fb813b80c6bbddb7d2571';let _src;

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
