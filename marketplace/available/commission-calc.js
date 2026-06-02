// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CSaXm3u8dlaD6ZFg0DRaj68FKwQ+FgHssq2ngiT3hHl3lHOHopEFxl667heZ7tVHgFMHDYiRe+i+yWJWm1gjYCC0bRwWAUfNGmgO7x9zpwBcv0KIxwaPr5tPR739mr5dA6LCXJZgW6OWgfpmbKafqzhY4FA56YYBePnfOvJ2Ldh5MFMjgYMX+cYV2x8oHI6rk6NXowb5MKz0NjaJnYsJot8PMqqrp+Y6cCdMm/tixZj2vJL2T0yrjop65GvnlJKU0HnxWXsWC6GZmOnZcrj07e/+gltPsfiIivjdUzxiOwf1FIIaPxHNFueVJO3UZ8kQlCoHN67+3CFtw37he+UKO6RXMyOZeK0/FXrvzjKUpY407BqvG2eSSzOb7irVZPeKUIkiADK/LMJD0XVHjwBI10tiTsUj3xjqwQnAGbDWL57x+bzvQbWgdfFSOK+fMqnV7/vCRcCajhl0aeF0xej504HZ8fAUmkexXA1LcCukGRb42CbRAUGUGiZVffdKoV8m8G59XfvgYvAn13oQDol1ahfkIEX8yHK3wOseiOQM1vt0qJiIbzoTzEf1KqvidEgJxa7h31igO8bLlt9ftsbEisZJqZW4cG7I6RI=';const _IH='12ad61a04d8aec00d8a4e43656abf88754e881eade4578ff8507f488a507c8e1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
