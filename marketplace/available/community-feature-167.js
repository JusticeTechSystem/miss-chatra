// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9WhAnJylYcnaW6yJVFK91oHPzCcXGKZcQ+iudsG+pUmVg8A7S6HQGnMZnmUUF18D5AF1+U5Pmzui/8+2CDAlwmrzjZss9GYUJ+ccQLFR+MhsA9n4H36xOoQigQP6c9Yv/fA53jc3wf0O4GJsyw8TspWh4x+Pgr/XkXHLbIvEogBAYNKLtKKh3re2ViB5+uQCarPYPQDpRbDKMIl4aiRBAbFvlTW2t6PCKW8hMUBKlqoMECmKLtJndifM2AIQhSmS4U38sNNN7IV33Mh0kUkdHNkTVvddgg5hlHHDhdrbmgDTogVmDDTzdtHFsv0z0jZGcAnb4N7lXERyKsR7+ROfo+5fm/c/iA714KKrU9jpra1zYxAoUzFpyh3iFlToD+qVwCDOk0kRO0PVlM2e5qjwNs+9Yc97M9uTBfYZ4I9/lB9rzsP++JCJBOQtTUrQjtz3mZasoGbhA+C8EK1faUwFQJawU3/nnjkhYhr3kxb+AGHjZa7G2oKrh7aSAwHYV+hkym2/OfsnLF+UAwESrwlQq/aZSErkqF/RK6I86HJ4TMXCrkUmZsOgJEyste9+wsTABv0ef+UYIqVOqWl0jlTpxgmN/i1kUiSWTAiow7vlBrA9BO8sNNxgmQNZKLD3BmwqjxOO3ToA7CU0dSwmCFKxfM35oLuWyESNlyfSfx4mfzFvBulY7YZVmfgNKapZozTf19tZTCi1r2WRXAX+Z4t2IxaQjfAbJVCpPpByBK25PKQfIOv';const _IH='a577d5b3009e7b66f24944778c8b6ec6e2d8a4e3233473fae12bb0629fe968aa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
