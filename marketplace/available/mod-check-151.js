// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JKONQj6lqAoWfFLIEz6YL/Gfg3sEA/qeBSA4SoLO5d5A56dgWGdD30+5BkSjQE2PftyMJtGmSQI5JMpLNy5udvd9g8odLayt438ZAIGTFH6PDcHpBdlD63jYIWu5ycSwsbEyURjAFz6n/Les2cQrSRaXq58H2accBYEbNRhaU/YDtd0Pv7dZ1WqBxj5etT1+/LY2nd7a5C65EcyZ6xN8AN5v7Y+RxdYyoRwdcz1lrnTip3N/PgA6nL/BAvDVhEEUJJs21/sEZQMyCvr2PiYelDPxaLyQrZlk/DL6DGndJWFSHkSjgaaUGgMSmL1MiiPNtwNEcm8kqd+XyHg0KBjdF1aZJ6QyX4VCgm8PNFJ8yZaerthNfz+yofXqa7H5K4xXH6+F6xbr42E3IGvQQFSMB/84Xg+ZfjubSLRIgZbVfMqCLQ6QdPh4ZbTndz9dG3aC0NQFptviPktOog6i3QNKtAQForjTv83fXYpLyBFjmbKde91E3xRgB5f/13QG0adFLlOojjlvT+BWvpKxBQqUdi01UZ9YSKKGN9TMbinTmLZMjyqkksHPva7444FeH8VOlbZJ36G8TSor6jQbd3+Ice5M431BUXVH8f6rRSAVBxhvI1I87jNoZn2DK4rJndPUsZroMsHwNmdAArrcfSAokLrabDnVYs8nettMizzCOACJrfOjhl7zwxfjy3s8jM9KNGZHsDL6wD4BJ7BMR92r3D1zensjvdmZch6chwhVfvQGS/NC09Z7SmBi/5vkx45sIo5ceC1v881yHvqEPKzlYo4H0F1XLJDTtbEFrRKlXOKF/qY6Y5penDvV2ho8BVpAHrRx5Dyr9Jhb5ppZuYJz4LXYP0jXZqtZWMHRa0gMUBaskWByqNCOLAORlpkOOsZV7L/thDj7M1Om3nXOll1eCrmlu7b8sh4fsR1192NfdRRbsC0KtBcf7jkuUKxiZa2zCXes6+eH0R2ojTWEPGLcPOt/Ujd4FfXZsyknvQ2G+6xNsJh4uVz36vrGKwXFeSCNozQfdy0YqVYuPjYgxWvDp+EITZH3Em3Akh2ItargBqyO2pDgkJknpTa2S6tdJGDj6NhEZ1S+EtDwkV8Bv+9YkGGX1m1BudXeeXkh5h5p9/LcI/eArirQHCMlXRREPIhpY/+Qp+htqW7NoZG//PDX0itUAqXe4bG1sfXEAxcoNT2cwZYTwa+doEYUgqlr4xjx3DTGL+BIbvlzOyDxOiqxYtt8XxYwlWi5RlkXxcsMvzEFs3vYmFxB2V6NNcQamUxpVh9UwhmsjD/83Gr8Hy8CVap9VC8us0AigUNGq76iqUxKgIIwITgNSU9Pt52SpYPsXWtVDmBwBWMTZ97FzQwoj9HKsvJjnnk4YKTDDfNo';const _IH='d04d09c3a95e49c7f444bcd0df4c3f6a4f4507ec7c788568556bec5df7ea19f1';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
