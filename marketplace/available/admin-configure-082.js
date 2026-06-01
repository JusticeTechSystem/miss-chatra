// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:06 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzxGVWwQfPEdj+2HHMOnMYZgsssYG6iqmz8HR464in2asH/EwWN61Ttr9WNNIEnTaVZBDGctP3FVERYU+C6oD6aOrAJ1hQYsy/9wvSMyTxna8hsS63kJ8GkRH955m0dQzpz6e9Vc9YOb+35tRZ6IKdNTOss10ikusY4g1JMgtVLC6o2TBv/JysnuqbOEeQQhGykI8HYElimoN0AzjCy+WTGv1yitpiBdQjgcgu1ni8euoGIHbEJ8C6V7GcOJEoLbSb9PzfaoXbr2Wn0ZA6ECzbpue+7dq0Kd1xOu7nhZHfmud8dqR+1TTCdnO9uU/5rzh8JxQDhjStgOxExRhP9e/pk8hk+TlfbH+fB5288xCDVWsrIyJrnVJoic7GkOI3DjlBFMTCo34hJ9K9RxxtJ28gepCad8kiEQg9D6OwuYzhx/xarq3Fm+ApORN4plhX2K1PCY7wO+cKRrrMNguovj652HzyP7pvURbioG61MuMF1OEveOJv/NaOqRzTd8jjCP4yzb4DWOjMYzFHgK3j5D49SabjPL0//oXUizJzIsXxLYgQVmxyandp7RaXb22DtVmkfHWi0gaVr5nbvj1Y+mXCqkqUgGmdSZAd9ncWiSIrpwsVoT3lF1VyH6DCjZixIhk6jACvBK16cSBRnUV5LskW/+kfsJ5TrpsnDWbE8WgM9Q7BS5eTMHNfmS6D3XmQ75kSdbX0YCwW349OcvG8ugd1iK3cNj6oxtPFoKQvQP+4HZQ3QKAY4gRXhywmFaoSI0eZSMdKrCnhdlJiBRblUUejkixNEO2z4ihicn3tVndpUQu3NMTzoi3Nu9fp1ENBO7d/zV//fEwbMyS5xIgwG5ZunjowamN2LFWfer7uq5aYi2Gmq3gnp9tg3dDF4aWkpd70rjzmJQhVzf2xx7q5Xgcgr0gWgBPO5JRQ3XSFCGUX6GFlVVrkLttbyWr7RkwDGDKfc7TgYGcPsKo7nk7fy97QVr+8egHGNMflxb0MN9bB6YnPVQTFkE1cOIGf5ZGEe3v0JOtDrpeqXQDiq4ScpI2obJVw==';const _IH='add05b86dc72ab19b4d62103736072a08b7f08af6822d77f113668b6e27727a0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
