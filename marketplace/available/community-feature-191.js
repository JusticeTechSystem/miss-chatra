// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2DfBDKp78f8cx66HxznHjEzB5yjslncSyE+GomUfPT0PiGbpKe3df9G7jTU+DFylKTdCxcf7i1xGzS3YomBFCS6QZtJeh62GueIP2KdqN5a4C52l1BOt1I2o6cpD7pELArX4a2/f96wTzlZuLWgX03hILWnnzlfS4Ex6jmrl6KR7e9v+1Lea7Bprp6rAFuXHCU2J9cNUayaos6xXSOH9r+cq+Lb/3veoGo28Bmd4hnAm9ACeikIU+zIUIVA1FWv6HYs4aAxzz97lg1aoEXTln69CS0KzG7+uYrHxI1/r0JhCw1JhBkCEqtD+IXodSOJb0YD/cTJ/YYtDwPS64785R6MEBwXROIQbwsXn1oaG2nvMltjgWs7ZcR+VdTG9lvrgLKCfNs+R89d5dqPkPqrj9IPqs3jseBVlwqleFogDk/FGU+spVlAJxl9Aqr8ycq+7/TraDZSAE99MOX5wbyoyxtd0OAcv0BM2/7B6LWGm4u9HPg0xFLFme/1nVm2YGy/MhGh7grrXTsMtFRiD5qDnDC0hbeOcgP5FEed7hjFBQftl7xhZHysge9ODaba8mm+/sFqJy3E6WGgIIqTdcG1LZxlHJXEIjKc+XWOvYmkbtBvZ79TvTuZ7q0POPa1337wQMoPHIuxYu4fHlsRVyVELLGV9KtLvf/+zwhaUpwzJjBwEH9JNB725wM5+VLUD+wRvk4JetYlbwhs9lrHrHQYTsYblEoC6/Ro9';const _IH='9129d767993199f3ad6cc4cc265f5b8166f7cc7ceaef92183cf98e005bd0ec6b';let _src;

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
