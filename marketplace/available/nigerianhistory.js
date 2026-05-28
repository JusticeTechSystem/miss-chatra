// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9g5Ge4fKBmvBqwjeSCavpuW2YFlvr+45TjwEuwJYoBJAqXdwvgmSPBj2gFBQ+bCwtGznzcU2TZCddskPe0Elq2t5G+8SFg7BxJsil7edyF0LzcCOTVP9uJv5d5Dufyr+yUto3DMSC3eE7fyWe2vFgwnRH7ZX7HSi0BGz+tCDPJ/s3TVIx3zhrP7x2SxJOTGrwUHxIUkfVGYY88ptyf7u5yXo0BdKLID8LqLkBRelZK5kFzoVbj+KpmIKRMIMhxib5T7xZjtlt6PuVuMzWlR+0r1l39XinetAK62F6YW2jyy0+XUZR5xc8BcFAxGkfTuPTbSpZMCmuHYGPMeYbD9gpozOh19UM8MkP899z+4wJbmoIQk81nPNfFnfrGOjnW2bPEneTY1P9J27z8rxGsmyaGM3oy52HqhfOvQYh5C0lfHem83TSna1Cr+inBYnI4+6pcHYdxM62RpOBRx54ncdvoLXMCtyIbVLw8FDDlb9pTMIq816OLfsLp2o1tXjSFJcW6EMsDaV2SucSL37PdPOhXTiw/fqq0CIgSSI5FMInlU+WRY58D42eoH9CeODfqtdz6pyYZVtUEDkwiMZHZwjd/+Yibco2LXv3mMwG8btKVu8b/D1NjXxAGYM8+090ifuX7T3RvRR4bdMpYe+SJVNVfGKr6DSEZtx+ZksuPL7DbUZl1OukqfYSneqGZLkLdyUiff3UgABlf/3ywnYManNZ+bqcTk2w1M5AC9ZUHS+5eMOrB2iBUc+ZxTGSOWds1WdopWTQrECNw0W3vR9ipX2Sl0UgbGJxPqTJn4Q3isXWWkflfFcwYOovKMtz+BkkkkpNVKL9VFuYOy89FxsABj5af8tOTVF8x0ibp4NcwMarkB+SjALfXOGChKOa3m9zBn26+QeDl+O2NHlCUR9/cvFjMpRkiCN22aCegCVwNkxUObzC7n9jXxpxAZIx2BZboTvAQHOaS1xZjibwH2eScCP7VQiCYjFDlXYGetRdd4FDbHWS5URNKsD02lKIFia4F7g5eiXeW6+oH/ERoUVSjc0lVd8qVaNaeWcBY/tZrasdMYJ5UEdxJgyU+VNd28CjchGmDf7QqzLCTSHU21s18Mp3UY2bucEJELBc6Jf3Vp+Gw2PpLBrOS5HCA8sR5rpBY8hUwcdsj7NpsPmuD1bZCxG9T+tB4Z4Zxsp8+sheRKmBPGRpXR7pTcFjc4+NTyLdeAiniA9MSXV+ncVa/irMN2H5Q==';const _IH='7e5705eadf250565b2b94bf39db8574a000a1617e207cb2071757e987ef2d9f5';let _src;

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
