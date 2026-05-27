// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KZnezl5hYEFryTZZ/vBCdpsqJuDclr9PdjKVJizYFUB2VE7DhhatXfvjgY75TGJAxSSK4mKl4/cUaMVVC2R27lDYWr3yb0aqCeZMed+X6vMc6/utUHN75yEZZu4n6Isr01J0XUC5ecGNh1wh6eroCWACwnP3AaiRZTPHDvrRDEXNY9siYeD1vFsldLI4oAYXhq9Cb7NLeRKC6t3j97/Jdu6YMnhBJYPvkNHnYFOGQPVusUBuhSy3T3WOo73CFmTqv0WiDP/tSfdJCHVjqD3KtAbdw1fLtMeRDaiNMwFe+8eskvsT5zA0QQgZnqCSeZKpk6vQRNzLijjhkuQXU/aLx5jHgEwpHi6rVkXwunV+tGJGeWGvRyWYI9AmwOlgflVEMNsXjrgp4iMmxBty4wt2134bjBSLQhYyVegtVeQUwx+by/Mu6f6kr/OrGFVym826SBzku7/kd+gXSi2KF1A5nMNtik5sIOD4VvGNdsQYh56DLy1BLeNfKbVE2iJkVqqa7waHB5yAviCGpaxiEPhJvqrlYzFLXYyBdso7R1E+ONDHSsJIbYKPmwiiltg8BbXXvDr2d0agQ5YZlm+yQY4RB/mpHHOEDqHyqVKZwT2MET+y1XJJyal2s8Ri5f8TB61qqDtA9mvzCbMKud8Pq6cRHH8b8kk26n5B/c+zGPrMOpKFkpm4M91S0f5eZ3++y1hqcfHhhBiS7eUldw6e57VVFOFQbpp7J1YNdVDcqe1oqH5ddnUmod38/J5dqH3gbiwhsWU7Rmz3nf5Snd8Uc3W3XKxgZy0Ynu8sJBfRmS+kAupdUeG+B8dKWVzGA8Ho+kDwiIqvkfKk6SBlb0j3l1zkr6NSLYpk7h6A+lesPTzNshnW+uOE8Ecy+zlGDXZx8t9hcIsU72uXqoSLsXWpdyj1vKkdzbTL0QmqfYdSX5oUOSh05k8XnenOkGwXdopoXDa2Po135yXUxTFUOePaN6wZX5Zf1JC2koY+tZV2G+RSUNhv6cxXOXDQhFnb7FENwG2GxiPLg5IsCd8vTo3PFQK7syXvnRlko7sIKheXJHiYK5dzcS8+fRtlZMaffSKAHJH4vzFEhR1NeOf5VkpFYHoPqF/SXpGoYJqF9zv8hyPnr7Od3aflq+7I2eUqWDFhM9zfQl5xjemn9FXF9gQKPqQprj/uBFiTPgmfqgOkPpx+rjTmyy015wGhxT7aaqEIMemIxCcEX6SbmGz3GbgYvKp0KX3OuS7eJOVrN4epfcXsxLZqG9fkYO3eidhspQNW3jLD2bZ0B5aErHRlGqYPnDrlgaOY3VSqPWZvkY+ME+6UjqWCoWv0A4kTbVGw/bGKBkRFfA8QY8ghs7wqiig3SlpfGCv28/WjCS8LoKQz7HortAuUjNyaTDKbKgUrIwOhzPu6QEo=';const _IH='6057dada35c6a9261e85b98b210cb033cfe14370bdf4c0df84c256840a5350e7';let _src;

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
