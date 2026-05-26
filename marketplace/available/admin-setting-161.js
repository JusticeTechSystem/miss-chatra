// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ENL30hbmnaEIFIVG71zaVcr+YqXtUb4383lO5+QSM6xgyrMPKcBvGat67cZ6t42+tUc2cC5sLsXKOGngZue8Afu/zs2/6VYFdEQe/fII30VElbs6iEtq63EK/qiD+gfqOSQYy3E1Aw8tf9ma+y3bBeVX+T/C6XfCTs+brwNZBjcYQhBZAGblzxDEkypkPfB2G/Nau6JM/vL7EOLStEvWm8/xUl80+5JWX3KLvkr4NNcGcm9eowREXm0cJA0MIxRbD6l/5uPIf2yT6AyerpOoIGXYBqmU/bcOYbfZR20ey9bYRXRbO632vDz7OgLkYddQ5XVU2R2JBKFG8MZhxjj6uefGP4/riDAJOLaiC/rTfP4pxGaV9Ep/Tdg7SW7DfoLnhGRB0Js/DtysRij13CFxfIT4/Tf4qJk/WOX8sKb3cptkl/HwlAmH/elS9GlzlINxs6E0zSO9p31nB3iofdfTV9s5cXyRyuqZVgH2pseVyNKDWj2oS8uNbQi9p215q0B4ZI8QTsbzs8JznqYsDnXxHIoxkDkvIsh14LadHXHGgR7c2iGRLtfjlpj1j90BS8GmOCFJ85FatgqDuH/glA0eMganw/FBAgF3T0ags6yoi/vGeC0wsoToGrjqpTFCRe6mOwoNPB+1yQvdltwaoWONTR5xjXmxS+wkulQTyK+uYYewe0dTmPLHOAcVcnu0VrymTNukx47hI5tCuxQKI86Y2BeIVx/ABUrpSzLPHVHMBKIPP9mvPluesNZaRjgAqXAw9hc3qccw7IzTJSiaKepf2ilsjvCxFPR3Flw8VquZmGjsLTb5O/J2rBQ0aUyaaxPmKcLcak8ueLnA8xNnDp3muMdWrFiKSjm61oqD8sL+cgPTyrMebitBFEPh42/B2k14L3hrysenNsHp15jszIBVJR2crR46z+bvOSo3APHx6xsIur01n1/SDgcpWnQKofrDsbaMvWEOSebgs+fYzmrKtJWKajRggjgOx46AuTiHyYTuaE24W36v/GdXTCkw0IUvTVPKsBg11eI=';const _IH='c4051c9b580d2d717c15df5a30c02c481415df9513b241f08f0935b332ac3480';let _src;

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
