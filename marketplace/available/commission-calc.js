// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0yG1m9uNMqaTqjSSdNWCcKltZPQoib1bzs7cBFS6AuTetmbTxWxVfMtGlkiSGlFmjWDv6Fo70kBsSO805QJaqqLAyyWGGhpftLPYlfMo6VVulXd0RnNVLpUE7MHyXQfs7uIgGIWL4npkW/hljr5iPRDD35ckpdfan/KurL0SZSp2xSfZ8meS2w7N4Ct8b2mIJXemI1/M5LvnOSoZTX4cUcNbzYgMcFyPeqBoSo1Vu3xmg1ttwvlTME/xyLk5pwP1j6lN070WycYO/fnWGC0NMEvai63bHnr3+2t2EjMrYN5Qh1dwx/ahs9Xulcp5TQlCev/7QJeeLh/DAaeVnXoKCWdCRFvdu2RrSkYRpJygjb2HC+BdgF3EBhHFjjb5kWRzr3bm2xqYTtVG2vWysWk22LGuYarD8xk7G7DbwPDxIthiYrQHAjUAurt0is5ila8xzaaXuvGSy66tlos0gklUL6BZnnX70xdzdOHTz8d6uMZltonn88qRJXfOhq3F20vqQo8PITqcJVyLfWv70UQtvaS6EP8Tp+1skLsdRc2UATqKzXBGs0SXZ81oNP9ldcD3Vgmw88DWI5zyc382vZXsqm8ivT0pdcA2Tp0';const _IH='4d1df55123d63072bffc532cf4649f1311a1de0c8d4edbb9423f5ca504789500';let _src;

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
