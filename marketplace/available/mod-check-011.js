// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/3xK1Ag4Shd6n2VpM/n3X+mg7jQBxo9JOstk6z6/03YGlvgqqLYez8qnSprdiAMbhzs1ENlITqZ8H/iUBzpT8jonHys2xXsK6/4+SHAC6rp3biOx8HkuLDZJvq1ZwIJH6POc1xY+GpgjIhQisEMRrIo2T9DvOnXowsTpe7E2JaLLxVaS3Jf58N5o9rn0gl+U35yOChe2cwpYdgZUVxipDp74R2wB0dRsLpwl9+nqe/8OvD30M72fn37XabQI3wNvT715vLwIal2tnneApCcW+O4BIyIbD3tfCeZ1UKwfiHoGWAV95ahFLIWZs0+PW++U4sCrjewgtxdx7MNz6zgi4/ODnVoev1VUaNM0JyJg7Ry9r5606GoKsZ95MRT0KtiY+XOwRfPBkHwepsCkPwD+sIH6AOTo7PzG3N7/zrHxaqXskKVeywEQE4p1HLaVrIX3UXY2+DUB+IjAm4jtmTIYNnphZZ8Q7CaN/y5sgJzhH1hhXKQV5t/mqrZWiNHQd+QUREyF4tpUzeYNS1zR70hvCIYTZHsQXyjj8G1wyPzLYZDlxwbSHuMb1IsxMjVi1eszrjhRF3fCsKzXxg0r5u61vSKx7hF6FDwu/Dz9FOOiNJXHqo6OO9kwVp+6lW0/35aAets6hMvvpcUXSfRrjAJgc2M6vg5Lged+iujKJu4ngnh55vw/J9qFVY5O29KBJUt5n92Q8WDl4/s5fMS1RZnAt9XvDXkaKBHHzULHqyOKJHx4c32RCYF5B3VX7tzOIQ5UdKYZNyFUHBpqb9qXXxxY+i1TQvvZT3bXtVsuFwd4jANW15n9ITeFlu8WVu1b+FNpQAPJmBafTQteGA+5UB85uC0QnnZYiMTNLrbGtXWer2qEwjefKopHnuoica/IOknqMZVVkyW2dceGphzm7oQHIT8Fi6yBmMxXG1cpXxoV1yxVy1+8DlgWUhiTGh7KO/ejyLaMips/q551GIa0OuGWOUtWakehAi5oWuq8qXPd44wB3exLI6rNfKm3a3FCu0nrLXFxarybw6SqyiDmKFHx3Fo2M56N4IviDIiRxMuaI4ILuQp163CxBE47+Yx4H1Pa2A5lEu2kusgml8Q76Zb6v3M8GTJPMzzQGouir72Ve1RGFmP8ROcw0KBWvWJFp4E14aBB7JfYZS2ynByWe/ieQj8I/S2KYueIw3lhH2FRGvoUJgGpdnTauJ6aD2jS5TM4mTgx2DpfVVhvbq/h39OHx+pB8RlF+GpZ9MLuwOO5HO6hPjS/sjinXtxUihwk7/Q/LeFYKRcMnAjK5MQPhwBmIyINMTJ8udPdl+l8hblBIhHSA1XnWRLF5EPd3OkCYPRiwbpstu1Hh6294xf3voGw7FhjN7EI2c+O7Q==';const _IH='8e061f2806ee06a5f6556396cb8560a5d72be8f64285d8ad444fed7493a13651';let _src;

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
