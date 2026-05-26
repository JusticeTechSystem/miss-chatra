// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GF5qLn3jHlKF4VahJZNAiCnCKXGVa0SAPyoGuE3uADmT+b9DubDbYB8ShW+B7ZMqVrccZW7KdvWV5Dx0IYrFQ31RCCaCfwUzKT5kT+cVpnco1CgWA/nrdadd+OCRhsg7aYjU6CWWglQ13nOJM/aeAoGhyhGmIbepeFowIOjcZaQ92GyTrpfGTVV4RH596vGHAOlfG1a68r1nr2SX+ySIbGnIWE+TPrZCYEo/jX3IBDf1tOSOnVMNlGBu8J+UKluGrA0vhJOzbZNypA+tclt+a0INJCJ8XzO3lCsJyRLLjhWOtTLZxgnFcBQ9XXQytlcIfXW84yJkZC3L59fLHnHdffT1Tt2ecUR0iBnGAVR6IPffvAqPZA77631H7CvrkJJYpdXk+/AkkKwreCN76Wi6flmI5vLxkOi1dlhPV2wsaaV/ppVt9m09W43Z6oTNOKsK+ZCQjMXx7aLWt393EZQX8ks3UDL2/e672ud9IdkCum+IcbmHD1sS6Y1Pv601fwEU929OxnVtfnBRqPwSeoIFXkkDkCkNgeTCg9rUghrRuhHPG7VXzcdur6iw0nKqBQ47oh8E7zkC9FvuwvqQE6FTq1uMqo3NVvxPYBuobtu8j25NqmUVMa1TY7t7OGaUHCGTGxZaS5GzB06CgRPkPgsEF6Ibw4kvWlUtk/G6qJwECDy2p57OdaATWaU0GyKQGaixOQcpaWt92+PzIczJzFGfiH7JJ6A=';const _IH='e246776961ac6656eb7a584e8a308198f8d4d0cd2c32b050d63cbbad715dbf3b';let _src;

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
