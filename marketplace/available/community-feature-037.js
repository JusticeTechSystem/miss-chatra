// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fr5CehYp3Wo3UV68XYBBw/3ls1Vfcs+/nGAXNtQ07TSd6IJ8249tYrDwmdSl0mxO26TBf4k/CSYk7yND/kBm0fzabCAOq94lAA4ueW6A7DI89+B8hmteLnRbjazwPyYgExzv+UUolFvaA9CxzEs8LUNSjb8ieRvD3qbW+JS6Z5B+lyZ3o8WqxZZR74HC0mBkod9Azh+rsE3OpElRX9M1xhRbhJbtiJi0IUOjeBmlpgaWbvomjZKo6TvDBI2LR1dRUbZhGSd0FW8UcX8xoooA+iebC2algBqmmuR23nLYaDE7hWnE6vufxVgTwk0oEj/8G7NMpVgSyj9EEFXHQoiuTp2UA2iRBsSRshwy/olYiGoT7rnLWx8iq+85HopdJLp13iYWmOIspGGWkLJkcgE4xdCT0Hb0EsZwUoQtRee4vUUZx4gYOeUr2gHnWlwB5zLQFs5t3rybBSOkPQeej7xiAkmlyT3rj3UH9yX9UHqhfG/c6f73dnsrHMfCnYvVwiT6U7kJ3XVtLjdaMMIVrZEbUV94mSFyz/mT3hSuCAhf4WodiPZLdZQDhdYOQcRRw/RcSFe6TIg9Uz9fhRuMmzM20TXUKZCxfSImoAoOZIEx5x44LmAwLnsBO21Ge3OlhLByvFvKGToVYNDNIRuL/u2tcIOSqgyXBtDMYfSXSrEh6YsA8XEYZCBWum/7jJpJrbpxJiv6MxWk0CJG/98H+Tig31MvtXoME8OeboLdluVjew==';const _IH='ead60cf9b8ac8689520b6de75a41abc98c71695c3ea55eee7dd46137f9b83f81';let _src;

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
