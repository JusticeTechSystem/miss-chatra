// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OW2yCK7DWe2wn7nSip1whsDZz2vh4MmWn1QuioArqEW9+b0WCjSJgn6OTvMaBxtvG5+wp5itsEJ/gA4njBySJfwVcOxPaM5ssdol2iTyONpTdTq/pRI1W5fpipjA/8yTM2tyOSmZ5teBJcBWiO5QZfAkl/drlJLSDOMqQYeW0dfP5GWo7RBgDOWYI6TyY9Xp8FoYkdlWZFDbzmFLuztpazC4wvBeUkU7AJuHlSZ7iyU0ktMowd4qHOjfigmQbWnEdAf/Z/C/xJ/nrlg19PFDvYRhTG5XP5bL2wEwAWQ5i9BGeu9C3R2egsJ5tj20fPA7lDNQMUaXf7OQoDzJwDu9DwNKE6dWP3szNsO2NUgm1DgAFIBrgGiVdfXdo+6B67iCusjyDRSH+2jYEImGPeHhvQsNJCG1R/7AgxUyEYdIQEnW9dmWXLGi1vLWMVxJ6Ldhhz0Yvsv0fVfYd/cSiE8sv22UohfTDvyBFeFYrYShxqtpTZi0035/AvLUiPLwnC8e2gpGC9eOlKo8ZxAiqT96bCwbbTUmKJ1etFY0V9bbMRobQ7pWxUewY5WLRabXXaTK3ka84cbZN/GiG2T77um5FkbzO6tRmrqbfYj45f9H/3N9CN+L8hy5SscAEeTcLqGEOMJl5jKefPdqGccMnT8EScCDE6L5oSyY8xFa6l00xOmy5UK1nCYZx7iTXBIiPPHT05keB1uREGRGSzl/1hWQmjoEkGfvp4HMFOC4lCa2SA==';const _IH='58d5e1c056c9b64948bc07f079dc7572104c29bfa71f085dccdf6a19f9504011';let _src;

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
