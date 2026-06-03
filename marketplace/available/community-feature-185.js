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
  const _b64='nYP+9mNpmJj7swJxdZ9a39TyYf7w+4V5xcAjB2ArslAFuGQ/hhMWj5ZrYc/BmhDRQeFut49YEQbaLsPsoadDG3ArqlMlCD0xjrkrFuFVYWXh6b6ld5n+km83DPT5kzkBd+SgZgI2mrZQPInnfOD8dlKVl80Y7ku/4HNSLbjmosCNUi6wXX4tBXLtOUWQXrvOAAF51YwliS8fs0XEhoP5mQO+G0r/NxNzs8FUK7o/uEm+NqfW3IlUgAjB+uADUtye+Sz0/+4FlQojfXlKVaICxtgd57cxtEfDDeuQ182dYzdkcoKOWoM6L3a7UYF7//0asEaTmWdPhSfk0X453PJNL7sLreQYv2wHoXUylaQc374Td8iqtGIcHE9BWQhCtxeM33V1MN0tAUDDA3FD9IIO3ncUCztfmbsSF//5vXBRtTGra1uyD0IkikN39bTBP0kLQQnrSN3/vd5+vN0yvpD5uuoIMTqcdt1pewmR4AjvcqzF+Z3wXh2+4XUBM7yvIdZEWyOGgMFY5bOlJKJEKjFu2J3iySrhbIG+MGnNh0wCbq7YxiyajMywkQMr10/kLy1qWBMxJDKNm5HmeNwl97mlHmatLFw2O7cePy9zXqPfQI3/PBcnivHd6RhvZpLTgJQfl3+IASXHo53tNHrh8CKK8YqHH1jKCDt9M0DzLWaH3DkTtiyFM8xmygNM6IdtA/iFe5qtwvsbBW4xNXY+J3p0ICp3HaPgqQSBa1Y0bV0kLQtFLSt4lJmRlVI3';const _IH='e85a48e2f63eeec8b8e29077d0476d7060eae686f2ef8c27f061ec666fb6889c';let _src;

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
