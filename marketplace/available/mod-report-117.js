// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQgUjofkDCrgIxC+DGkrrOlpMk/zju73XpaVazeFUkWIvdXB06zg245o6vc9k2UdOi3Itx0i7TxZRgrTsZHE74ltKTGMRU9wzFGan300THBVgMkvPu5GpZLqdMXzVxaM8IMIZKtktogh5uPlwwdL6E2/GVlxUiKTC3sgVDpxi4yoTUp5x9uJ30GTGjvqUKkrkhYtC9YkY2f2v0WpKTMmt2OZGBOpUXhS06qxi9C0nvDiE8l6uno2pSonitwkLNKF3UtGwEwCbbmFfNM7UH6r6hDvR5X/IC8a1+xQry4zUWuOVk0kUHKTQNeRe95YV69vIN1luPtyZlsQo4y7FWTy0X7OJc3c3kurywt/p3cUBStda3bjqCc3FFPUg2AQPfz4Md4noIEKGDx4NeF+A0yYt/rDPI1KIatbzQzcAqvtwUOCzYUxaWDhQZfMUL2timDr6EPhUXT1PzHCwzydsikLt2RwUTCP0v/0XlhHC7zmAH/PXtuujgZ6vD+8G+rfHAYGCStrwDNsPcrteWtN18v0L1pMYovpUYAFuNko/luZJAGBpL2pIFaBdZoTYbY8U5YJ83CpJvnpymhpDxBsKWx/RZM5qH2Ou4ww9+IPZ+c28tBN6bQc0NqY75DYiZrbX9M0UkQriuYjcbNAIZTvX9HZ7O/OdWByPdMiygM5WAEuweXfaA6rH6WxGd2Nojn83g1bL+THHIXPAJEJWYLgQprL7YgoDplDObau79Qvdvvfnd0hNafVGySyyjYyHfaGQMVDB07m6ud6ILyZuLRmzO9LcVGBgd3yR4NlNAbFPP35nUNP6EAe6gdrOen5CEaUg3i2LXe9eesAQ/djPK9AsUdaoZOwTHelm8UFctyHWr41c0v0VVip5uPnlDSByAxveFa0SaIsDanJSXs+kyRXOARgGPZr4+hSpQIkZeBWDGDY1dL5fuJIYqnGytJsHCYQXS7kLwazktqY4w3xumEFgC8xv4BKrq1bg2Bxr3Q1TBxNWIawVDrH8c8Cl8lEbBSkW8R6VagRP2FkIxz5Jbt8o6aXQrl5V43mRU1RsjmRHuuLPf8lJrZ1YOhmtY0ow5UEUpvIOsdNYuJ/WaaYz5acc3ygDTuMk92HjsViPslr5JKclJImIt52/w/eHgJmSmkcZcdkva1xO0JBFsAfqRi1oMuV49Jmrr+OiHUj9/v406sSUbJacILj/7ZsvDF12pu8W3vfJtbpIb5hgRcuQoQdZkQFrOgyu60fkR5YgzlXk/J+uaKSNRfZAteSmIwmfBxbdNgdOZM4HY4BVqsFIgPfBAL5V4CxRqHk/iE1rdUj4Qz4Ymap03EaFDDbUjRF14J5V6VZUdr2jWMXJspf57hiSCMkXdD9tRiCpyfqbn2HNkhRmeivrvBJkswA64p';const _IH='b6d97fd012e77632ae7410e955eb865fe136b7eb5a42f5f75a504a8c2d07f8c5';let _src;

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
