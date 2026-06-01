// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7jGHgF2Ft+mojQoq0WykkbTENt4G4VCRN/JIYeQ0tIwVDeV9L2v1mI/LyuUzPPYOwR9SuW0cmVdZfp/HwU7m4dsP3cXYLCt/1VGqZB6O97gvUQqZxx0lasdhOrf308g4L4BZV/8e/zJwKHlgAbXsbF/ieS9C/5rJ7nofu/fM/BuwByIAD5XUouAKRx8pFsYrw8KNX/wzW+qRdKLeoeglYfMl3RlwvKTGId6YV+JHCkz8ANBVKGBVwChEm4BmYOPvtjD9BaI1pUiAe22ELDS99iU/uqTRMOXCGBcZATmwnORl0dhPh15lVX8dOdYZoMyl1doIXK15j2qP5rONCKrIZsgdaPNKndFnP9UEsN6z40GHg+E2MCtkDr4DoUhmkV6te1G9bwQDlAJ+Vh4UqVgX60t1uxm5QC1Emvt+ppaQfnyMD9ai8512Cjv78z3zmBb4jqA/sHTntWFaIHP/jKtlGwOosLItTUXdjBzNHG68c7TCZuwcnkD2hNYCSQDY7w7GiwM6SwKodDSaTpgmAVNOHIfWy3ciI18p9l4qXg0QVB82mVVGfRdLB4WFQadB2Wg2lIdaJ69hBuTpck7p9io1d/N7wrcXqoAneZsq0rqK4d6SXJ36DMy5yVvT5UIz4AnwCDIxI8QzVDsfNHLo/1s91HgnG5ShEOzYJaimaqyki6u4jBPPsD0Y3Ki91EtL9hZGE2n6o6xTLd/v52PzinqwvI=';const _IH='db16f0b006f3eff19a252dff8fe7f76ccb6810fb5b7293d6f55f39b19a199feb';let _src;

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
