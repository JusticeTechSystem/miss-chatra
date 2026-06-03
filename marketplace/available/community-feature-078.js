// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u13kB2A7uJV9gPKAh5XNMWlojY++t7NCmBSeK/IvhDr6Ifa+UDEqG8PWcezZty5cfp9tKcN/BCIpwMfsAGjMiGfiS8XUVMXjnw6dzPeCxlkvEDAbFZUB5/m53YeZF2W05u8XTBX7/ygETyXT040c8PvpmBcKee824IUrCBC8aLCMgZCab1k/es3adNLJFmLrU+WzQvnb6T3H8MyKQp01QJDUi/QvJNz7bqGrW0NHqrTCcSHTeQLjSc8xfwJGg/9vJ62PSV4cJBnXbGrOVXt5EFhJdVMsoY9egP0w7PlEaNz/v8/vndMBl2mn44jIvB+ZedrmkjSl2TpT7J1LfoWYu5Qh1aCXkLQF6rTyo6JpvnaDXkyTWbT78fz3OEmjiLB8/oU6qfeYN5E+G25PHucs6FlYB7GsKr5fr3nI0QkJanMKI7OEmlz4gIRuyyL1thecE8CO/nxoYCvaJ6O2Ea9xwqc3d3y2/1kXwoPhxrx+mF0AmnZo6htxQwUA/2sSECztrpOqESiC0Il7djGK1xJtOGWuQfoHfkZFmpnrpT1YYM3wq+8ie+MlG7Hr1YblNA1pW0h0hXu082WPJyo1tZt7QzOHo4IdvDX9WHFY3oWwiApPVFMNnYyk+OwpSVLMZLmSlicYBQvwLOIoVm+7NfFTOq6MzrLqVDO1tPJHw6Tkk8CBhoYqWTVgcgZZ5T5xOc1dGiDofAQo9+Snjs2OtYUdwWBFHSJRnGnkDg==';const _IH='44bdb6eb3f5fda28791f6581c3c42ad72235cffaa8424fe69ce3f9ed57a33675';let _src;

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
