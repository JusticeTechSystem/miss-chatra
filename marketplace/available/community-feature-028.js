// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iRi/FfSkYFXUSFlYU8eZhs57fVF9jkhmU1UK6TzbrjrVKmq+MhB/sBMmkRZLTDLCK+AWAE1ATD0taNGYKcJIoO1V/BrunBjkmkdgagjtWzYB0KEos24IuXRncgVVmmb5ECVf00mSZqdwR9aIpwAh5uneOnW/GdhlF+OhN+OCE2Fq73UHIL746/GD30kf6vdGhZAmmwT7vkaxcaoNIPMBWTcJy+u/ckLG4HzqLpW30aQyvgsPwjF5rqbmpyYcM5HFnx5khSMjtsDYzNCesotL8F/H3AD+Mtp4i6FdVmSM+6qM64sJKeoI34Qnx684ncXzRGsW4uI2ia/Ens4OfIQWCQdKlO3zkxLmGPr3QNG7LU4hjDDMP5HR7BCXzYBrv38pnfpi9yT2dBFdk9OakBAqVkQV1A9l1iJFC91ng6VeDx8ye0Zm+oQlQYZnHOOQ+s2VO45JSQYbgD1XlQ+yLDRaUsNBWak+r1wRVeqOiskIXHgGNienMzlTl1Z9NXaSbuvDwzitUTCQ33KYDMQX9OnqGghPdhKkE+iCnzvhsglD9rCy8/sPctjFiU6kGskyF0zshk8y6WdLzi7AGGtBvKlsEWsSEJFfMZ6vXGkdcoJn3pmghSQhyBYNfTfyrfvxSMGylglMEEcULKR6zdjtoHvD1vcgqpIMyZhTp9f9maaTmCIx4nS+2EYVMCu0lNKc8NaRxXzgycbNU5Sh85gwqCq56Ic9Pvqlw+n/AQ==';const _IH='9b4a99c9a1273fca2186025546685d1c0d5d61397fc2fb780a49f482e1ce45b9';let _src;

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
