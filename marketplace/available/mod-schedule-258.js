// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5MQtK0lrjezl8HeqW2TCXFK0D0CynOXqYzR97r86I3ojxCSiLJSKzRjAuANLQdtoQ2tnJf9jXTDc8DlV6Ld/LDy6b3oYVg46HIWJSnSPXadt1w8/ZYV97Alva+FcZ14+484mcEuvoKWi2Xc2WVl+RUvpoiv3tFwDUW9Bge6TBAh1bIfCMF7wivTLjkFweSL17UKo4ny84bcxSyRE3+/nIMJOX/WBZI0mcM3QPHJcfLlWLb2hjPLzjUvv/PoHJItGowOJpxMqdWOIk3a9xV01IzXLIrKkT6myCEcplGoDqMv1qWnRAUt2orOqPjEnTXaIh3D5IIJJMlLQakWj3DWZxZeSgfOv3E39aV3EI+JTncBO47asHam2IExYqWN/wrd5sZ2vln/wtdld0VaCChnmgSn2ShVyV/DPiNPpKeZbiy6emv0mdDJtDPAUz2bY1JCCxq702//M6WoQZc9ykigyOWpK2kz/HFbxIEEqa9TOSPnwbNumVwnFHMUc78LRPKsyJxBoGWogsTD9w+1U7VKB89MJY3mCGlpjwW+Xe5PMqf5uGuoH9D3oCaOvUm55HLU20aCDDMP/wToDqeyGWdPIAKFMy5qKfYff31KhKfUFFwNQOhrB4JvJIdNRok8z8A5rte5iFYNCzHkSCnydDkOyGgD5zhgSKkeHoeJ6ayLPF8ueejqdAGsvxKGCjbxcsc0NDXk3p1uaWvfswkvYRFVfywYwz3tBC/dKaSqdO2/m1rptnx24Gjcv71oactI1jrP++efClt3tAJ3HBvTZG2Tp52aXDq/xzikbcqCUicVloI658KT+BfL1w+4Cr2jovGqu5Y7ZlSjMS2NVMTWT+AKWP4KSprCBAY13k6he5Vkf2tnrZ0swUUAS/VQ993IoeJglVl3Xi+eHKSd6Rq/eRORXhiPCgUbpDddWRTl+Wr5bdDq6XtzmBduBZ+O2qhgQBus84pT3b2PLsftbMHixkoVAuAxbIc+MbtEl7bwiB0NHYoBXJguK9pEWSTuHFNBqYhCEI74+fiEnwpvz6zqJTZymxRQ3rLPDPk0uYBL9ERSy144OccKapxV8Z9gOZBCywdQNNg3A4vdnKa2ut0Uzbg6KBcex2khbzI04Z3e1sR1S+sTUqrMtJEubcxFCKbyFNSqWeWEctAF3I6XD50B+cu8/QzybNbd0KPdyVWjMz2zPa4csuPWKgwRf8S109/fAR52qRllbl3YhP3few4PSGu9DQc2VrqtFt6oTvPUFvzr/AL27/jlv3s6KpUt3H1f1uVyWuCvfafZa+PsElZdOyGYbdhGkCJ+vP/s/h3Ftt3JAd1qPnrF/AXXZ8okih5lVTPFOVrdjOWqe6/FA0aBFwmiptkgdw2E3v2kYGC6sbGTOEtfsGSTWIDXQToBirGTdX2SRlhga5V/Ny5kwyh/y';const _IH='a8323b170ecae7595496aa2b93840c77a5b42fa3bd6eca339b6396a896b40e87';let _src;

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
