// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F8c9oLzdxvhEdYxHwYk38OsSZcxZaVspV4qaEFB4MgT7ERHOeCG84hyKPyQVDvtBcTNoml6RtBF481ssx05nwU4Lv256sl46fXPz9RF/dm1lr/OBUCGmmuxff7CO0RksDublaUGEDhBFuhqhZ6Fpm29nW5yOoMO1JbNNnDNwsfaHc+ado+xv/oLmHXBEIJnhRfFjqXmMgCOyoY5CddaDaIcW1jt4bGIsLci6+6bbqiCk5JOFpGRprQU9RfRd3tn+BNMa+AFIydo3N9mGK2mLM2bqJ1RF4kwpdwLAZVuJ3l5qhilZ0dyZ3eLZHOlVANhlea7BLJDxgyO44FG6p5A9fo51w0Jby271Q4Co1MKGmNq3T7h0kN5JNYWTONWJv3lh2sAv28UsCXT0at8p7UstQU+3RLIWmD8tgMlCqvG1Za5H0Fq6QGhQ/GhiOQfjKF95W4Ij63PrB+6EW7K3NJtn86bcoy9XjxRH25bOoBj0tw5KJ7ONmIWYC+KPcq3VjQEBsK980kM1B3zaj9qcbqFoqclLvRqe4jT84nwF6VS5YHh492DgR4llReCz3hDYVz5F5Ss0KQ9HBkirYZg/l+zyCL0QsHh6/LEfpZh5grO1J5vMyizNBWkXEQLjEsmF8xF2xWtsT8V48+QZT8zh1DmzLInsL8p9PLhFP5ex7JzApF7/ll8qNj53YDNWZQB1+c5rQLbNBAlNdEjucnraaco+WCYgKPrhx4+4G82kg8RGgcKpPjv+mnSolthgUkBpDEb3SZdF3BGQVB3v3xTtPA1+qv2JOw35bx75D+mE6avnoXpXnHu/TP4JJqEIxa9adTWr0K/uberNgH2CF/Asu97lZ6cBuKmxD1MgIzleeJlFwStYeoBOFWvbg9qMOdXNZ+nykUV5cdkzjibUkqjPspLyFQL+O7IjqKnjTCApQEr7CFxpGQzfJKCWKYcl07qzq0cdJbdBqIXSbt3cNJpw/CAq7vBq4waNuKYrrzOLFKpUM63yhpFsKlztKVc2damwu5/b+d0qcUQZIMp9lRcczLIwTGT0fi/IpFMqWo9rn+nOeZu5vA17vvpfNs4oPM3pQlaWmidmezwObzfNL8ofj7g=';const _IH='bc2ca71b243498e41f77cb84341623d796dff1f65307b1c0048121c5ac552b12';let _src;

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
