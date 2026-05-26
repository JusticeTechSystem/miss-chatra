// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Eh6riEXzZkrwj5z/c4j+Dr0JDCMJf/Q+sWMnMlPBNLqQVZbtht4ZYRsTCy7VC/a+IVuGfz2q5EPH4ZToTwV2/mLDlSBQCXEbVwKo09fOij2qcy4XEWDvY5WhM2xvzM4bB2rR4UmhmxYeqG/t0r01/s0bhZxUMHi+vqIapl4re0bDq2BP7gxvmTQe1/xMlxrC9477Duo6jXJb0msuMQqNBQUW5KKTSOVuACik4Lg0Xy0So6Y98K5vwYphOWrejnX3bDW/nOqVfUIGC520zeyVUUIqlPEKwPvkZavoafwJfjKrIWe8tFEtfPWmmASRmlLZpWS16Qe2j7yUXEXLQG3N3WMMPScyIjBCDuFmpHjTPY8TDKPXDKueWZXmGOYMtZXxxhDAgbHI3aY6vlNPdztymKAL+BGJki2UU5M2pgs5w29QN9kp3tvU3lRaIDu7YVGn57yx/lhaVDUTNGW2OxKHjBE4cEjR7ZyvDGHdLuMl8pbd/BtH3TghwASf8UseWlnsNOUO9dyN2HuvyVLvX6k5sKwcvz5NmR8aEGr858JgeJ5wAlDkwafYk8FavRSicCzQYPArMhYwMlqWbbtg8z3GHgb+RlxRv3D4DNdS7PuaoPNVkq6XJyl4q10ub1+VYEy/Kx17ITpT03Qw/f7zsRhPGmokIxIC461DibwOeFSkz6cVNmdLwt3hpmJxcgzDKdcIKw48Wvv23twCcw1s9Mr4Q9i4r+OSndVTowhu8g8kASDupQBd6atVPiLAqfrPq+mzzjFAHlWlfr8HOQSKyN0KZRhCZyorBGuZPTtMJjGe0+LCtaGvs82KgXnmyQrTO7s09OXFJQWzkC6Q6d27n8Ts0CZSniFkfEc3S7O9ParBMkG8iKr0LRF+M9HgiTCrHOZVu3aqNEObsySkJX+kvSILwDkSlwbPJrFNo4Z0RkthK6XaKNBsJty3S8DNHjjCssDfphaPONeMLDI+Soatvihrl9AzQPYag5Vr5XdYBnTK6ymOaFuOVwBKCaO0UBVVqsTnKGWaXyuaHTLLtNS/1y5pYTbMyuP+kFACfH+V2dsc7e++tM5O8Yftnob1BAFlBRMuVzEvGZxHTflLheBrRFCI5g1xfailbGiEgOddj4FVxw8tOjl7uj5DwWXDzFdWYSpWg8zQSMtwwXuaIq6ag66/xFHcJHOzy+vPbAP8/nDszp5Oc/J8Qxk0ayZxz/cxyCodl+vUI60=';const _IH='646d2bdcf420b6d85b0a2246fdd9d43359a19a7344b0b5652cce453aa9ffdc2e';let _src;

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
