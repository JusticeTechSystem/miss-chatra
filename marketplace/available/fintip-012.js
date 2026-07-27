// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTA+pokXGAbLBpZiExDaFUQrqlG80o3xCBOzsZSn34SKJ9gckw8EOHxcH55hSdp9KYyE1r1ohVyD4LUJxGeESitD/aGQML7q7ee5xt2EJeHpHX/TWR9Gz8kh3OTPTgrI4TVLqb87wEr6w1XyNHs+vBzZLDXwPlAlkaTye2Sm4Zwxi6tG5PvCXP5RhBFWz5rmHGwF0TvYy1Yw7xeLx5swaaOdWI8xtEUVpOipsxtrxwmov+HY29vyORDpg7lL+svzABT1LnZa8+jDY3B/2YX8jb+tc6tDOFgYZ3oFmCr5n1R6TxFQTcaw8OGxLmATbECmGVwz6z6i9oj7wWpYvm/RkmtUma55whZJN/ljVy5KBmDuKogn/7C3Wnw7kadZTSkCwJHA5UAq2tnhvpUD3eI3Tw4lzRoriayCUDNA2bxdT6GfgtQXIiuwVFPA2hMZ1VT7jNVNXrGF9v1RxX+jE4vVOxEvroUKS/vP3QbmCudmEwC7bB8xXKoCWLKzTVGskSDCAFd3EsEfH+jVAMOmk2zzYY3ncXGLOQJf5C3/1tgE7B7FV1DdOTcnENnflht2U+UydUjsHbTxIzA/Bt54/VsukhXCf6zsArcdJn0HEEw+qNkcVmMlOMYU0ttrplY1MLtcA9/QB5RzHMFUezZLiK8K9hYwX7LTGz5qb792ClSPwAynovNs9AZ7qrnr87cjpyNrRgyBqMuHLaWayG3tTCUXv8xRsRXdOM+wEV+qtKH6zL/Wv0A0GyArZ/nMY9Wubkl+KYUVZTBRC/JLHEhqcVhch1YFeiaarzsWUROWqIhn6V6p8w4/0ZLDnJ2Jqsxjb8d/0Mtiocwl+5+oO3Y5Q0XG5Ha9R3PcyF1acdJwehDBHSbUCu5zOc4OWiihTi1B9io5O+hzI9YY/wsWVhmFk1eqLXI9OOYbf/YAuj7watPW7lZnzbyV66k0jD/RXjSd26NnM1ezQP283MfGyGD9bBCz3A5y32/V/mIeqAsvZaJHcgnKl0Xh8QjrHLlIMVWbcWOWlLO5XxTj5QcifsRgNPslogExHbKP2dFbtC9jH3sioeghBbW';const _IH='88d8f6ef289f62fdc0efc418d54b25d7dade287d0d7f58ee0e19df2f66009df1';let _src;

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
