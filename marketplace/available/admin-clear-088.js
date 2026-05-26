// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lRBQSvaM2smc7p2HyaV2ZKgogJ2HCqx2SKoJNxgdUOr2HPFGkIVl/hf0JOOlN7y/yk1dooeuzrkcjM0VXNlAPpmLBrg25K5Z5URhz9aJhbX/DMjvwuDOITUtXUkA+6cqINka7A7XRe1ER0aLqzlGh+fD9IGyX7L2PqwDlZco7U+boVwaTQ+ZPzIw6RrIkgxWTe/8FDEeFzkiXToofQcC0pDnmwDJWHu+1JGeBd3iG5xHdUMor9dpVOcr3T+pSucWPH+ycW/xzjJbIN8et39RjAK7dPV0UhqZ+c6yYaQaPeZE6GHcfYSZ0J06WPVYmVD4HqY9ucmI/bAQknxUBxnID7XqSap9KrAO3mlIif1xadZ/nfCzqEstEGcPV5YEkF0l/ZHLAQLProFaY4W0NW34UGNubT7xTgP3IRQO7CAc+m9ZCTQUxC7/B+ZeYfVxBHGM8F6oOZt9rZdFkaQSFtK4Zf+azDPB5eXxhswH1+cwgRJi6qdmLUeJU7o40HMHFyDVgSbWJHf29y1O02Dms+R9zfoB0vNLRJf2BkrG1uenMJjVU3hODS0aduQcXTl16wFmrUD7KfNUCEeFUhALcAXo/kf42dyzNl1pHUq4lVYB6uyqFjebRL2w2T1L5wlQtUGFIQMLoM650bYLqCE3dfDTSy/x3l1adgMzWYWN8/alb78MkNqzEiIFHzkvAzdB/VGazmJQXpDiseFM9k4cJx9iT22fQu/73euVabBol7nqFE2AKqv82rZV9nY6YA2CWnruYyO0vabx3TUZx7ZIskCRegaSiROPBPoZ/dVZH4Dvik0NCz54JgYNIVqHEj+9rfZIE8u7G6IvltAhRgWJ4xDy6RgwO+dsKoYBdvb0NNrzleaYL8oHYhZxUNQepka9hVD6G5Stf0hkVKQntBmVHQNB272UWneVnOMSaMX4+iZ5j/YCkPau7QyqjMtHTRuZ0tfxixv8xj/wWlIdtBQ/4IxRhlfcbsCYKcWjAIE6vwQIX6mPa61oBUE=';const _IH='6d4202d0a44a06b92a8cf68a7aebfde926c2f7faf37584eec548fcc91c6c309a';let _src;

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
