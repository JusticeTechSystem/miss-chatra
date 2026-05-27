// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1Fpfd4iOmOodTTh6sSA1ZC2+Z3mt8ZbtUwG7TDMRVs9wYp8XcW193tEEEr4vT7Vzwx+4Q8enCs+A/Ehl08lkMSyvbUzR63Tao0K4xxJxbgIv1heauyTE0KoN60DX54QWe8wrwbBfPCVCwsmzxv6HD11r6qt00lue+aAt/wlzvftVKrD8o9u0TdL+h+YsitK5u1t80FkzRdjnZIYBnVc4dpB3cNz6liEAmOXEnGaM477iruJkAGtGQ46Nm7927AkzD08rNy0SE5SfPmiqKH80uvd71VD5dERuMxH6wPO66FRdJipLYtP0MgWy/MJoVc59/iGZLgYT4HQm9FJ6aOM9okF3hOD0iwPmH90HeDtf7L5seoGpknbqqWoxsDvTdHpKgKca/V3C+UXkoKt0KOmptj6YKhwjiaoVZV2Cdsfg3CFJw+DjbG/1d7kp7agboPsSjJWPu/pUBrInKs9dfnBckK5RgS37xb07gztvhNI5dKK7OJ9U+f+tIm4laRIy81ShwFcSEApiy0FCc2RGa78PDMexyCw6Y6hUpofQFx8aIhAIOIP2u2LzD2Gq+wB4Gm3iHPIyNqox74Sx0pYJh+Q9K+zU4jZhYgUl1N4TTbhiqG3LkmAN147Ab6P6YEU92CgW1PfRIhIq7wfoxcNAlSzFtRfGkn7xas6XnGqHjcsKpCYQpeGQn2wxI4aREY8jPZ3mtn/zP+3DL9mDvaaKXO3TgyawUUhVJW7NrXOrKoVCzOYihILsQjtq5vwmx+Qxfl8vP/1Qi65UTyA9y7NY93DFsKN6L5/xF/9bKI/B4bE2VzqDLCLvQZuIH4cqO0OeqzcCqBYEy4dwQJ2ewWrBCGlpTdyRNzsYP9cN37CT94okym10J/6AVP1X2T4HVDt51TPhyIPTeZgUU7LAH7bS4GgywrFM//gYNejqRnQCWTVLE15HPFBPnKvGJFeO7wcOF++b516qRmuoUq9vwLP9zLd2SPQbrWymvuU5FU7Kt00QmOzUXxJnQej7XDJuaWrmU5GJQaODWEujzAXkt1J0n54PDNkNHQeZ03ZJlBrK0BK/H/4E5HuANfPGNw7o0O9VNGkRGhgStp4+AdMu2hQEo1gUi277SlAvyErKIGzR4bwx9zXDopX5/RHlcrx+LjsrH2n9f7Z9nSfD7jKrQ7qa/meMcZOEdGAtASeyNdb05oUIWZ7eyw56gqtExtsW4xqeTyZvfx49H5ftz14cSqbcz1GsecQwJqVfw1bD5MUzvKjWH6il7zfT54oHbrD6hVrS6boE6Wd+ggcR1NFSHrWfNnKYbdPTDS9c7ctFRm65vtvRBa/IszrWOeuvqiTurOeUnaENyNq1ooUzvLC7KH1H3k2vGvsQtRHq0W1qxg==';const _IH='55e02b2af8c05ada961b139537d96a2732a57ec45bebd7923f7cfbdda499a218';let _src;

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
