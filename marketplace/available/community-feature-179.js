// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zEFRFfGXmHpgLYLaA8mZgOGmEP6Gw/duneEWiLPITZjil33B7DE776na3uHtym6vNkiQznJPGEK8BnnsOdzVcWPhh/M1C4EZxkSrqYZKltgDcGUr1Yk5mjHZ+4AqtIu+KWeN8Y/ecY1hBE2NQva5rtgrsK6HprJm+sNzBS6m0+KF07+kNMelhfcBCbiOieeOBNetB5tTsrVgPKknHsL/x9GX7xwVRdss9OS4qD8WVle4VUCDogyFF8HjVS1W4Gv4f8HTtm7TKIx89RCHonXc9eH1r7cTIrA5lBZFXQMxEXrB73efLVpd42dQBj5raC+4EgIqHB9D8t8oY0wnmRW296wzadwlNZlWLdOtA0ftWHLKLMaJ4FTtE82LOCp9fFYRTdTPBhWVL2wc8etYpJmSyCrrGj76wC28LucYj0mw7Z322f3vKWr9cRtljBeBnDaqXd5EVl45ctjzul1P2qAr10ovfKUwOumdaDDwovVbpsCugmoCm2m06d+24fEAYdMysozByqN7S0wYuvkvkvoC1yyset99DA/WllLd77zJXKT88dgyPZAtz5hgRuOhnOv4Jy/umI/EB5TA1Fj0Sb55hGUeZ+vJO4AjCYUAuGaMRRpe9qfvAFCHOkCIwJ9wHwcrdO+Z2XOOVmyeSFKoSkXviE1cKKOgwS4GaAijrQMEXWlh1l7CmtTaoli4s2JOcLxBtMf9vhphwyWzXAQPFdgA+rxh5Hs9NAuo5SkEv9m/fDAq17855Yk=';const _IH='07d8304fe22c4b37a35fbe7ac884f85ed8ea6cabef5b8829e8e399d79e06f01d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
