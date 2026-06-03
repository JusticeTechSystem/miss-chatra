// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='clGQHg15/BwoksjXlL5DocVsl04PtA93n137NmGVnyo0afTdmrdY7dNrX7hZmCRlLPMC0dN7vO85ISAXMYtzg4ThQyGmAe1E4R5ajv3LTvWKBEBUQZr2K6BSiBmbKmkXm5aMyWyLGZgbiXVl8QGZxGwNXYK8kqvWVjPXBp5Ia2U2+jVxVZSU7DgXA0DWN1Jrn9WSSruL0cDEF95KgX6aicnUDOCBVfA/JAKDikk0pjeq2RU5YK91R23FAD/HDoIWEBK0Kq7QuWyfdGtcsVqMxi8WBrdj0q8qGYLaF3D4NJhUcHdcmf4J3XVEaFa2TriEpaiMU2QMYhn85Vl8sQvq2aPk1FjPHP91XwUmP6TcKUVHvhcBx+cLB6lKuZ5XqH0vUIbZ0dJjZlZwrlFUP6OSllYo441YUfLRUWYZTUpknvFKw6k7CZdC08ogW4p1+R+4vzNxuJqUdpNMB+E06aI2Q3gDY92ClK1eOKYQK4AWfgplArk2kEbnuFP4zq3kDn/oxMUBlDVM72Tu0EEdhqzEt5IXIn34qpho/eHpvbNP7MEWh8Zy8RPYqJcckCK9lbhutbKEfjXvz0d7k1+caT76TyGYeqEB6xlrUrI7GUZJ/I+F5SG5NAfkJAnzwhII35e524lYx1Tg6p95vlUFyDxyOXXHKkvBxocX3NH6kAfg864HYmV1Rz3Y/ox+EK1c5cyuQ0uMuXr/JaSLxCk1axjkOuWQ4u0+iOUGyHLFCVj16kT+JAXLGFlFchZ9htR7zrBWC9okHR61hdovzyCnNF1T9aMGoEyMwXjeZqYF3Z3xSLf/2iQ3FVUxKJyN1JBhTyjqaORckmxywXO+cTuYqj0grOd7DfyhbnUknHFhq6Wz8lsYCMJpDDLxyZeK/cYPw4soDnM5jzwQL32ZqfcZdAei0M3ZoAyW8WhLGp6f1mTNaTwmE2dQjRD8skX56vo4OuDUQR1iJf6MPMeALOW5N6NzE3QY1sDGgKJe/WFgmfLIYsFsal7pnD95K5Qin0eKAnhkuR/flx/qrk+sD5+OuII0FvUmHIATUwDS0uXtIm+QXvF6rem6bTjqXzTv2nAYzqdzqFwUlEl1ODTqt6t/qjgJWy3EvRXxeI4+/a2KjYisShM+oSy9hz1NUS3tCxbTXmwTELuHBPHXeIoJnbwgWhAUzH7FTsN01kiKSzgnWCDnqOss+28hVW6HN5RdP0qm4P4R3w9fg5EJPOhLxzVZzkK9dsDApABpljO8YddKzob4Y5hjJs1bg8TS3+/S2cmpBnoNKBhUh5uAoriQG55OWV4PCuR8n59tPJOPGLEVkFAqAyEVRApoJhVyHok4rpGDg14y+NNX+a2OcEXKRo7s0QHTzRDMre8ak350Czp/feViJ1/+snXksJAuPg1645Tbnq74r4PS4ld2c7SpHhJcMLUgxkGZ7Pk2xtkq8FYvnHcj6vGNO2IHAhWEJ2dnVjnwuJFIkVfrd7aDIC85mzUEPeO2BD+KasZZo3aWEtgEXIE7Cx3aUXgd3gWmXk9SY2/8Btv2h1/nC8EuukfSwSN0i7SIjH7rH6+AdoC6M2Djkg3DvLxw8vLADOeoCMqTal/Fivd6E2YNOszOtI0gqGmwDWs9mxMfizrayY0V1ABmbKOHUivYDzaF6axPm6c8x6mRRCrao4KiCvyS9b1+sqr9Hh+4pxko7HppBRjT8m96KJd8zEcnRAB0PxnZEl5dDfkTgrpj1hBUBaMf+ezvnkSoZUmEMhlK9B2sNONgQWFK8RsFuTVCFN8/doQQMQMuOHV11Ah63kjgk75eefdUM7l3KwDJJ6HRLA==';const _IH='9230b1e7c1bc5e1c17124c0682464d25b77de2a9f5842be00cedad2f168551e4';let _src;

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
