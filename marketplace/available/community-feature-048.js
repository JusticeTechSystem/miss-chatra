// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0e4BTv7mqPSUMhzoHLQMTWW/qV5IXcDd26xU2Sh5dTeVs7fgZeJ4gGLJS0EkE8B2KR6uRLEaHrwLmOaPRbK/1T3IV6s8+G9SpI0t0YCymUq1hkn7aRqyie0O5KhI/uxau9MpVD6r43dG/NEaj5U0HI36jOsbKdRyF4ntMmTNilRNbiHTxx5qFwN7S2ZPX7Y7D+XLMuKi9h0+53Y1FIz7yiV36ijegsuEXiALrrXshj5yvsRgMddCRj4mbiv7zLQz8kyOAIHFBSPNjKQfl5QPjsKIvPxzIUsPsCKzmxaLvmrg0HK3lEKaqJHUdGk+3QnHIq4fxEsnDfQH94MJUL5CotcM1/TFkHnHv8CpUkQzcsB8oVVsVoQtFOtNXzZeJBfHzD+bdawACTnwB6/7KZNTMav9cwbUfvRpn5z7oTffhACapKXDtwe8ixKSyq416QIQsI3YD8UtQbgxV2njvV+lKXiXAmIHsuO8jHoL6lkmO2uZrA7uDWAD9c/NQmW9plyvJNIuMJRE54ZwJGFTUVJ9r3KNskr/GazQmm18Xa4WhV6qvQiOkS4habwt5olCScTK4y3ResK5ztal7k1s+RQt8n29l6kjZu50MhifWlsN1E/9qyd16g7xugtDOjuzVMbA9ilfuQtSQ6Q/86EfCIEHhoJ1owML/htVd5eekbUYxrmKfSKxwTdlLv7YVT0TdBaxkMQHKcXOF/L4rPyWRBMVYGHaHnDGGEV84w==';const _IH='bab9195be6512a51323f4fab3eecde3149034b769d135f17e533bb5e496cedb9';let _src;

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
