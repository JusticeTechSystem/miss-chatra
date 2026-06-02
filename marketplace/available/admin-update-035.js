// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jzMFiW4fSLtAn+4S4SPQ0OVtcCeswsyuabLTO+4S3vtV3wTcJ91igEKcj1+doZrCGsKca2UwbcwU757PFqqc1SbKvvFB7IU2rMperwcvDJiqn6rNhnH+XqV5b1ftxkbOTB16e71LJzjUuRIkaU8HLLsKN3YDwpC+hqtQZPcHqLICcuuc/KThLgAAXswN77iKaicTNH198iPjHs4sBa0hnueg2VTQsyBB93hj38PFv4mQ77F7Y9qIypfPvbVWvtsS1jBOph3pwxlbRRnLVx314KSXCWodlDb83/1CTcBwCrDDnacTP8FdqkuicoRtii0V4bvyCGIsHsRkpayvT3CZw7ghKnbQKoJ6IBnINnb/TNonmnWCEkuc9KINBuKDwmSukN9CYdJtCQgre+iFYVUcIBigmj/6SWic38wvWIq8tABUANhh0VwHkUFpI/u78X8UZM5LRccGjPbYT5oMfj1BoCgTDIsUtWrEEHgaIZbB8WE9yO99LdsPkiZJJ/iczkOfOkT5zqyS2bgiexlC/YQv+5YU5YfJBrO9dVtvu80MBHEyZAMKcoOEcgrZwUm5zdJzmlgHPuhajmcaiXB+sR9dFN0ThGqqSJ8dbotoA44ijRUC48DEzIlq6RrWSpXEyPJ5V7F0IOLByqhiTX2548DpMhWEVkIcVuKCVIoF4i0+pqPM2chp5B75qtL0/GGDD6CedVFAxeqxe4CeGJs2LZ7duMlcAvQh2RHUvSp2QKJGH+QNIpk+6aQGNPDjQwaHbn5ndSjZkMeq8SbscxLqiO1hfG8zwZX6FqWk5+J2/vHpjZqkaOWQQvqMYpMffzuZOCso0ZqR9Zrsq11TnorveQWjfkEpFXOAYda8MXM1DH3gorRJBmy1SARTGnal8gu0AfHe24Qbs12Rsyq73vremN5jTYtPysVqiln0d6vQnSPoc9OBjZSWyas5hIRRl/wKRZR+cdVdr+XaE3whXIugHHkUSgtQPEPWkKnTtocZ17st/W+QgbqNwH/f4MELIZcc';const _IH='a54fe04dffe33df29e5dbc7cb725307a11f31963d95be52af2739b5867d6d3fc';let _src;

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
