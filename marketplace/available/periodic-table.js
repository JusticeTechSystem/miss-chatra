// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QyktsC9FWN0ev2xJC67rPT/mBwrZ6fHC/nszIbDy6ivG2sOsOXKB4nEnt+KTWLeRrDp9GvlmBmv1YLAN49RxVF/CEcrd/QanLbGlAq+SsQvu5TS0hXi1pPQ0TDKlDZrxkVEIsVwv0SC9cDI0L/2ZpbrEbfpiwgiO0iMTd0z0ldqY5cg6A+jnAyqL1cxfOgeEfEgn3xVV/0tkYoklneguOl7aR5chQQYSC1te5cGErNe320LA1YyVTDOLPcZ+LbGr3SZd9CRobZ770OxxG7otP7vB8E5mhF52rAsdwazzQAoGLAg2+w2geTRg6j/qVqzqtK/y5rykeWcVuS/9OZvz5+OrKebTVSc3HgYBR0rcBlGVrRBelNB9uPX2BGDZ5RkxGbU79g7YzhfsmNa7QGM3acE8l14tHl4GOFHarqm1wajtawLsW/xa5yih1yXOD6viz4QgpKXpnFobHX3tD3zij9zldd72C+QubqoeqLCHTlJetDHFrZ26TrLDBKzUIXyXgTkb6fR8pw+eEAXKANASZHd/1PPyDZlXvjockiW3f0XyvmXNyw6m3ALYpzi0UOdvEyBUZ9iauWSXmtc=';const _IH='ca8ef4dd2242a03175089d210499a0f9a39d0ee4793ce233cefa1d0f72c3cb86';let _src;

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
