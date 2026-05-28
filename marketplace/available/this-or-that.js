// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qHcF2aVyKJdykjzAFEldk9J/SVcBHbD/XTVldVW+NBpBsu6W6GGahHNBxGbIDm3CIe1j+syoTKmiMZPJ5ucuRJF284iyfnFoTjAbN6AAkk+SqL1sLHINVAhGlSY6NFm6z0+NNkO5unFlFljZj1KTX5ZMp3wcTanD+VvYtvbPjSoRccD+SAvxMxlga8UvRNWh+OK7HYkKAI2KOB9O4A7gWVMqEC1K6tSH/5fyqlYx6T/fvgkRZ4SSEiwhLNh9gvRaP8l19WcYWVw+WhenhzDEyNBP+BvaaI9CTr3K201XQn1o69aO7PC6AtqdeQ8SKoobUDD2jUsiPsIJAK73YWhfUEnkaAJeAZNnHdUmazfa28459KsprbGiHgJpHpAB0XNfXyyRByKTcmEwB9qCQcEVegZ4n6xtWM/qJmY+RaVPV0yck5mwOBFnfmGghtnCUW46t/4GAR/zzb6P5gMfdJZy69JUueH6hfxoESZltDxCvnFgtH4ufveK1cdMz6F1Pn+1ilKEsxqBFsJga+SXp/4c9OXZnjtMHQTGjko97sxrWygYgCQpSz2njCycPW4DLXeFjj87JiIeuMWHX0D6bpg=';const _IH='cb5a0d63640824ff5772fac45cc704998e7b2aa7bae3f3d78d7725bb0ca623fe';let _src;

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
