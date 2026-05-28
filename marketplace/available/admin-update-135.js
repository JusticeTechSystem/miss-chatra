// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WLzyAT7gp3BWS/BNc39ABtGg6/NFD+YHJqeQuVLh/W7qGMiZixQupQoY7H1unhPu9sRDBsC5eFVjnel/7rOkrwY7/P2v9pJMYu7gzuR4VSYAXd1UX+YaZMEyMEXnW4clui4hIcUuhbKe7ajVFw+e5FldiQhcqhcinlSFaskjBblrE/ibFmKeRhkz8Rxhja7FfBHx2Yw/e+bpi/2L+jkTGN4XsX9hzP1ze5wOc8BhWD92RqxK4QzfDuJ1tedFKHsC5aNu92joSwVG/q4abdA7k8kyNHkV/uP0KZgGGXO61yQVNfVG5fjjQQoELgvWK5RZkzDeI/y8cpbptFUQXDGM+AlEYeGHHu1Fwblm1isxyM7XRMzRFUufRMjN2E43fKMeZfQ6NUbpn2x3Z2oCz8/EmMNhZr0Oh0CNpbotN0Lt+/byz+a8fQf3Y5Co7YuPmJoThmjzlfhRpnMrwOwvlF40g5GnCSuFM1PZ7RpEEDJd96uoMgAVR4MuymWo+hcDKe1K+HrrOaNvHphzE9dwFCKOBUwKwldiPZ/kkvEWO/qxGofO0KjtisWUm0vUMuihzOmn9y9LKYrX6poQzlkWD8Pesc3PHkTyy0F/adKU3Z6/v9OE3k+KkhvOPNClPIltsaG8WOSLm7IWqvFIZ6az0BWDPzoDNj3aVtVyPJ+QnSAr9MMFm2D9XnFbY93tNtA3r42Lv/zWlFHYfcAppOXiUXx27FX0oaSC4ZnSef9MS2/CMt4uLTcOwk6Glg7Z835XpkyHpZbwaYlbQ0AuLy7S8ng38kuBsujNVRnAOEJ0TXW22bSaKTQnbg1vcet0qfW6pYxrjcf8KdB6KuC3r7DhG0E9SkBHB6yHcbUcSqZUePqpZwJmBkW4BViKkJlJF+C+QhF3NfUt6Vevw8h1cbbgrtOXE0TcGiaprDQWdWpb8TLrb94Sbed74yxM+ISEcAJImoNO14HZz1eR860KwSgMmSg19trv075J+F8Ixf1VIlGmLETcKmUGxiUxCkY1elzXwQDxFQ==';const _IH='c64277cbfe1d6d35eb30ec21f30135929e6ae774c30184fb33a4f7717cb5e473';let _src;

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
