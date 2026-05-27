// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='czK0hvPp+fA59O2IWLROw2DKWSiJPI2SjeKPfm0KeQVHBUcxVYgYXS42U1SwWPWKmg8DVlwMUbgkbbQnHgQp1z4YQvYmb2OoD0A1I+12HNH/rBkhtT0cm4rewFw9hYlsromjpQqM2VmERGXMGfvVr4+Z7W263z7EZzz/4JRIlwR9HuxuvYUHwRsyjWs58f2kw8yFU61zqL2nKoqtL/7ihUkQW1T0vahLYuj4xXtdp07KM00gdd7hiY+Pb41/aGnpicBBZwxBxGFuE8FNKug8V+C19bO+EQ2cMS4LTFVgHF1ahNpuA8EkRsPqwRyRIu83+GxfaNLN20htXCulzAaBuPTmG5yptYIYln2Afuxm8jmRSTQscgJPqU0LqoAmip+EBSQBk3O11Hf1bQFWwcP6rAd9JmcJ9TXrcfiViYIRnVaoVCCJscQ06YNraJHvG5F9u0AAUPFGv+n9K8Z69AI0s1tOjYmMesrzPVgJ58Nyq789YKKhQMgFYjzJEFluMwJWAkfk+iAsw8xUgKRZjafd0UHM6IceFNYMS55d5PYHmDuDdU3Y/nobne1hbhotHTCDAlADOZFMn5PFaMRn2iycfymgdus7nxqcqU45ri2DBxkQ4bjHjI7A1R2oV/F0vyq88ecd/yKLjgPn51G1kWcqgfYE7AkiMs7GUPn0Pl60tF2FuhoosJromqrV4aqHaW6B0chJPHJ541ncwmULiX3Xpo+rlWwzWlOJNOF24PQ4Yn6pb+f5krCcA46p';const _IH='d49c346eb09dfc766bbf1cdde5e979841f65a3834fda4ac19e8b332003bd9ac9';let _src;

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
