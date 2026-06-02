// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w4OYSj7Dv5w9mlnO2CZUMBFrqLSgMaHzNW/XrE19DOmiYattwGOMVGT6nv46Lxxc5puR+dTSXnEqVEQmVhuCyvHILdb4XdyqlEWfrrmXhenNtN37lwNgLFcUqSbOVKdvsSCiZO34Cn5qwEj/0TLDyakf71S8Uyfd+rdecxQY3W8CUfebPslTLSUF9nlNC/NpW9LvzE0fKDWW8JpuwJ5moXNVPjcaMObFSyLGmQNLHCsFQxnfjELuvMMCkJ233KBq4DqoOiVudqZkbXsMK/cSHVPpPuWcQtprt+Kv5cVyGez4UpcFNavWFlPORl2vMm7urVykSuqfs+LeORx/NKZ6P2te8051uS5LvfuWdZ9ALlDqJgtBJCvjfuyzP9wdJ7lH53sccq/dqUIJYBXWpDo6/GzD26Ko7JtZxlr/cBSJsEWvH1DDJi73nRlCD8zNmbxXav+kCVObQF+llM/4JjYiyKvZ600Zc5/2Ef4gQ/+aCJAQTrdttvGgNRemqyTJvbglLfi163oCbjTt2+tn787goHPQ1OHF6mAvKMXvD3KppZYedaqbIQ4HPqJDgeMqkRWxG3kjiQqvKRcarRtoIIhzrzUZ+2L7AfOjqBlTDQ7Q24PMSuX56fzCUkrbDRiJN0RozFvZ8z+LVlpGgnDBm3bu69TTxYiOOTz0UKgluLq0WqDYbwsygUBrPx8dqMdZk4O5by9x9K//LRZmVpOksQ0dnstmhd3qn7cvcgAAvjC+iBFocyfP0yKI5pys';const _IH='6bc92ec89a8dba52d6ba6035f3015a6deb718ac37f94ace91f697cb272723753';let _src;

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
