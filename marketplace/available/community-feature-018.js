// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9wZ0aFunB0hKdUo0z0hPMOzRkgYdJUpYngzMgGAsDlpUiNXPTSM5y5MnDD3Zm3aHsS7rB/A4UEOy+EwYkxSXxLjLer4glsUkyD86PnmTDhiA6CkPp2oUETKkwem9pnZhg/zao/gvHSo3LYRa5Zq3Ce+t+VXbfRAsJImv7J6DU6lJAwyS5DeBeyQ9F/dSyv3Oq0XwtGEnENAfQ14OeLSv4+A8ocRu0C5LaWZzW88giMNBlpyHo8ljzpWojLKYd196GiZtE82lkgw6Kd5Kplrhw9bKjQP4nF3SxW2NJ5lm4OQ0MtTvFusIGNwUeGAaDDm1s6XlIsKeFJD1UlEZxTVG3UOaUEjtmhbYOkNlXmIp0eUJAxuQLNow4TmOBXNxPDDdAstohhEalJWZ6JoJY/CYT74LxfnFHgBTqGNfw2uDyGimlyzuW1yBGdzDxavKDw6WnvoLDJKQoopZPgiH1pDitqVO+9ZtCvUa/YvCJzk9p9Pv9ex97P9lENJcW0Tl10KpgCFoqBxvgkMRTJJwyDNmhKyN68FAbQLrDzVfCbBGpuEw5UNb5kQzMj1/d78+cQTtGoYzJTeAbOMyJYoConSiV5BuAkBc04vSRcU2fZ+N71c9rlaJ4NjszNEIf5smKksva9fNb92f3EIsUC5FN7diWefdEk8B0ZzcrEPohTb3uqDfk99EIz1rvjvYSaqa6uOe1Efmsn55tl43fKRvHIBFd4WjAxyG5ut5SA==';const _IH='4ec70963151d616565b8f304bcc6304d8e66e3d28678ed4ed1e8f862832f5fa1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
