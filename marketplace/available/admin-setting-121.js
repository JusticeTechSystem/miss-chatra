// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eKVTMkTUiKkxquGBwb1pdTTaxM1eztHmU4MSwYF8p4wODYxNI/1vBnGKdIfUpdoZksQdyp+mNMv3FBMHFyoBRA0oTt7z2YtBEa/hK6hSBT4YtUrC5FHFrPbYTxsh6k2E12zA0B8OrOpVU0aarysJIK/9nQuzcpNKTktrmOgXUGw270mCJhPY/97Vzs+Q9Rqt16WBXrtzgZRcoIeWQLGV9p/Y9E8BCIf576MOCMghtiiyiMHFTsKOMr+uM/AiESc1q7jZoDbR1YPbXPdhmWEH0ESJdyIiGjveqmgHKQ+J86jZ45U++Xe96muA0LaUjWWjTKbVvmHT+fzJ3KdlW5i8y/IF9m0ydV6CKa7U383jNgb2+Jyda43CGuLLrx35ZfJ2CPbVZ41shU9fD7QFcvaWBt4otpEerDJcJZ2GonZsUM0vQBYur/GySs6Ia4Ear2+hiN5INfFLYI7raYIMB0bcf5/m+hkmUlgoB3mQMZ+n0hiacoBQVfy9dMSEWLl7m1S1TTuWjtsXmACc25ePJk1em/6X8gl97SG/HzXi2mUfjvIW/lKIQKwp3dMX0vbZ7fA2dLYXXaiEiZQ12JCd5kucTZvoZSdNnbhO8UkczlJLtPmn5CPYi/6YRDRDT33WMrdeOvFgHtK4phh6Jhi75RfFOD6QkbtqSpejmx7MruVtKT1UBDIwR9MTqrQIHU35UyWC5nAH09GPy2ApwmDyqOJ8hv41qtyPtzAA5p9EKtOwH2jKtnskWOLZICQ5jAL1felyQ9ixmN0WEFdW6ugJCWg7YfofrwN0UuXtcRrhcrYU1E0fPEVWG7Ughixu+wUtQ3LuLrhy6NcrR5mkPtoFi7vomRnHv82q7+U9Zi3r/3ci/4IRHely9neCVRpjsum/Tlmu0esUHdB18VuevhjWUJhd/lmg8XYOo8iC+Q/vGXHwx1jB8HBLsJkBjXFK70iZTK/5SWcMhqAH9n10RLNhII/1f91MW6a5UwrJpT+W3DtrXSviThUQIGcUAvVa1sNj08Dw9mXCp2ipfjc=';const _IH='c69317bd318d5ad2cc181d7f9cda97f515285f9db4096ac882db3cfb50c90e2c';let _src;

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
