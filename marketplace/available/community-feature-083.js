// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZG8vUs/C2QQMjZhSV6AiCtSpTvymIRWJKiW+gSNyFrxp75iZOdt91vYOol1kEoUql/sZX/ryh/81a/jBPhl2VFUNK0c46TkiNiKx0syiK6OZoA/LB07LbYctStLeJ0akwH0yVskrQsksK/QGabbUUOt5qV7MAusKP7lLh/R3luYjYuQVRfxADJMrWNmyIxdoAbmGG1q/aPir3UIsNB0CneKTFg+1WDK4r33nJ5KENellyo6HkBgHmlEMniNq2XmWi6NORh+P4RZnzYhnnTToYnO3CbY54oAPr+gai/t94PJylfNK8pcZmBm5r6bGOlDCT63dJiK7Oda70RDdQOraWC7TOXdX0u0o/YDyS06WP/E3iJqwhx5QiN5Xpy1sfbbJ+malvK5hy/xPfMt4MKjuIoLvSIZmz+eMRi7HPY+vl5mgn2ridvSqNY4wufIIws9eaR4UgxE68VHFRm0+9i4HhQssF01fuWDP1QttuvTd61IOnVpfQdj7EYxJ4KYTFO9+y6HBHRrad/N5TTBIfopwnMI3lT/7gOyKDcUV7ZoKbcqUEMNBYlIzOpsfAnUy29gCFp58sYCv14EFRnC+ZcXPDtGFixDVobEMwYNlNYsgaFXy5y8hhWU2dA4wG6ij0Hx2VvUDg1Cioys4py1/+ZeQYARHo+6r8c/uXS4MaaiVGYx7TvA4mX0Icy4QDy+dJb9kEg3cLuecbgc7XmMX0nEIMGMTQaLRq0jKKA==';const _IH='0f2e972ec6fe0166eb231a082578a979ec75d4c0068d50a356fef7048c63883f';let _src;

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
