// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PG4vFbMhL2pARH5JFpzF7Aggcn9EsCWQlrV79vz8i+q+c/reKf9PiNB+pjTsw/vDaWKFPHRjXGDBiTwTiKVM0zP2cEUv9d4kCvS/jsCnQEVYla/HVpqhfctcrdLjHgOuAnawB79bNo1wIQMLcT6GqfbJksIEmibxiEfNJ84NfruPwF+uh4hilj/LHjXYEmkmn/mB/IPnbRb4LwcM4TUfJr2LtDSlcHih2XHXlP5FVknDy77J8tHRtzQ/DZ/U9c3zG99n7Ggr7QSjV/xjUuOLxzK8sk7U0KzKy0U+nQJjbD4YnSfPsSaojI+5RKrHmKH/gYSAQCeZTPg/Ibx0LhMYdcCPAnUVoYDDDfbjiEztpt4j1VAKOftjlQlRXvFN3zAHqs1/cKE3kmTLS2QtujcVqAqL5PYVyAiRz59xsg2XTGxYLBc24JLn1q3Cdcjek3kDxtyomWn2c0spyWZ+lNz7evsk4vcfBB2HeLDqsp+BMfFieciyWDoG0pzZaq0sh58tf1wHjlx/fmcra3f6KdnOa8PEplnail++Y7qcXu3iNGErJMLvq9Zwwi8cvA2p1X1ICDl0Vzb9MYMMFXd6ZhtOVT+L5vRNv9TRbne6DwUsoxs781HKjs4m+65wClSnefUpvxuoSvjQ+PusdnwyjdpWhI2+GD/MrTJf8+B3ehGv3+Gn1Wov73EPXCkrLN7BFSXSCjcfQ7XAfoCN9/KElvj3TaOf1KNmJ+VJKuZddo/ndSN7XkOTuUxlSKhpThZmhoyo19APCcajUvSFTvFLb0OoqtkAkc9njo5+RsrOl9k+hdArG+QI5910OYRYuv4X2hrISXa48taWk+MUHOo5QfBe6cKOB5nUlY7zcimMdysylqohmpXYU8QHm5Zfz2ytsTFdYd4G27yKVTUb6oNyWir9+ECZdcZsAkugfS8rg/OiVzgY22cbb2XBT3IJptIiu0sooy1P9802/qMzGyfwDKY1H3pDHjvxLh3phN6ZeOnM6vzXadTHvmWa+PvJXMMyJBeZnQVKb3pomDnPi83U/0qdYvahOe4ap1vyH1HiXswW5XqyIZXlGBg5EJIyTJ+JCyQOtYWeWCb20oYcFZOXYXZzWEv6s8LKVuJWAbnOWRAy6/OLrvn1zy0mnmEATS3N/XKXNkTQy1jYPnmUgPzJMsQfRfwF+/WXnysQ83BV9ZjGrdtpT30Iq4D0MlbIYO6teAqLRbmyGBl1pwwAK9rpoptd2WDt8SGA4vLT773/UrQ3Al+GZBJfFnvCZPsHlzYLyRJKk6B7euD2SdfNJy/TI2PXpbQhRYtH7ZQTbr1utUEws0OzACt0lV6UhMYzJzGLfzSSyot8lG2Jdz+q0cGvLS567cHZpngx4/ksEBwvTWAzY9SuCQn6nqQeBg==';const _IH='856519d53cae28032b31696fce6513f8a77fa937567953c90381ba6ece27d8c6';let _src;

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
