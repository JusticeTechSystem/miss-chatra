// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vZ7KtkFvUq59nxjfdW+6+OuJKj7FgdmGGFtzlN2Pyn2QWzgwmobaEo45jmmN9tjXyv3Y8ZU2zKeCmYes1Q1fgtsyQODzH2Yd0QEeCKzadgm05LWjWSkEdJkHiBc2GSrrLcgnrmCIaVUlnvfa7IzWISWjyDRi65XaTxsWVfv1QD8jeocSo9qQhS1/vtN46sIXSr55i4jjCtxZke8jO2fDIZhkL2I7lcDiu9s3RmpEU/AfrlEi5V8OBsMpHyZjjDsLrmV3fWUaXK7EntOoHGszkYAKBS6WDfp6c7hKVcLoneo2Pb59DReaZj63YyZlwrW4lu2Y9WjbPeiVAY8WXQOG5LQDbQrjc4diu9aH9q0i28mmss/yMf8x2e0K+JaIuURUS1lVYd3mjLdFx9q3EZ680dTLZth6J8C1FXsaZA0j2qcwqZQH5BFHF4+QD/Skx3dW8mSoOK/TExNTo9Meu8U65DKv+ekqkouwGiF+YMJGIB456CPnKmvyz48xVvX0c31t+r7D7Nd6vmTvFExnKbQowxE2NoYO6ZcKlv8ITsuOe6pgMLegX9LXVpmnMF5igrvxyhM0qlzTHE33OSsPt84Db16YfGPQhX62B1fEH8t2r7zXheLPj6odN89ZjCYof3+nZ0HyGb9FOY57taqAv9/sisgakTcVOb9l/pVCZXzUhEW3TyLlQBqfDQmTZMxlCggKxVt9+GxQQn6g5X9LkU4ts4V0WMal1BRyPq6o5SDe97gdTbLAcdM=';const _IH='30c71e9886d6cad4d096df19e46f02303b40ace251b8df93ce1b238cfe5afd49';let _src;

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
