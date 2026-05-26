// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EeOWnby3uuD5me+uQpqsHNQUVUKKU4VnDNWR8cmaE1bq0IEk7ZuKQI8uOaDqrPiBaDozSUCTHWb+w9R6kTxO8wvsXco1YCBDDrqbvjAG9rux9wohOaR97nmYDR+57ZnhyAN7uSy1P66cf30kYWjV9V8OR89nFoWeRPB9vwe0H2uv4WO+4tQS+IEXgK495tks2IcTocHzL1JUC/YbUabyANv5K6s4Kq85l1v981Q0bA9JdNO14Qz3nLfBcmg/KXBc4h3LriselqvFzsXiGhCyX/g1Fa+HYEGV8Wjguo9rt04MR8kDGj4sk6fseD1BYeHvAa8Wa7KtaMtA/BxH/iUicCFB+yTdhG0mC3Lhg+NUE++jsy0aej84u6HI84I2SNm2RHGIFy/qjj3VoK+WTHNO529H0HNKTZI2qGYNpeWzQpvY6DZMZK+ddqSe+JO+n23mi3Cl5Zg9b/CrfdwSbmLVNjQUqi6gU5RkVvw0MeT5PG1E7lMoUCNRW8KK5FcizAufLFe6cEnBEKJbEfS30fBp1FMQcLvqJ2izWozREf56fGV6ceopQmYg2XOr/atc/WxypxaymGA/kic38iauzSrd0MfpA6vgIWxHAhXSRuJMcbltIDhAxcHPOoATgJeSalwUEGroCQoKl1SGrp/vSv/YSl8CMo+4tFB1FtYllCxm9x/+KnQ1POqhc48TqTNc1dJs/EqrgM9jYs5taRDbnMX6WE1bbd/16eD/19gUCOr82TKHe17qOGpUTWVZi1c0xZ2LFH6b7r9P9KcjgDHjEY07EyOC0N+d3c7vU5TG+mLaiO0OGEWG5yM88itJpRBr9PLjk69LQrjJhXegksthIZtpFi1JchJ5gjuC8fh2bClr9iCpWlbtya3clE1xI7xFKJfCpXP9QoWQZbewIprdD4Z8hpang/v3oPAIAA0NJDr6xfljsGWy/QaKWZcIbf3FiAQf+zLKiCYedSdcpaZvPyiFAXAFuoCIEpw+q/ZMzoKOa4WcBwc3HChYpMy38KJIN6g6PBjdePZNZqTrhw96P3x84d/4Wu6dRLM9cHH4lL1SE3TJ6/vz83+jsQB3a0RGNkR1sY3vYw+zeID/W8stxgRBnux7KIvNgvHVbrhyTcC00CC5eUI+OKgfE57N3bMQrbw9PQ301kuaerPXliO8MNnlSqfH0YfP2rsJqAn+gstk9JN+aMJM+8H1dGToY1oG6w2y';const _IH='7e632f5183ff11c36f0ae482ade54119c98e7953324703fabc16dbd63c05f2a1';let _src;

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
