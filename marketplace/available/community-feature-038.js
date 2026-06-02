// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b3LcqqgLbOhLMMV/bTqZOqziFzsC6qNRb1WJGwpfNmkrY3UFI2iEAhWJBwgxE5JnXZgu+SGy+kDt3xPSwqRw/gLKdZSAADvoJox7KM7zmxUTQ4Ut0CcInVD2hTbzIGwTPiSRHFG6XSI1EohuvdVKwmV0edrOOWCkCcBaUAOkIgUOsbBZMCiyPy4TTp6iu52svjlFmn56McJrVjKEMpAamUtfKxk9TjAFv2ajLFc/DzGpOTbFC16P7jEaiqkmKa/tHsiBoKQTRqWINmIEO2CH8qQNRRVujLg/CFUVHMp76mxOMwWOyXlKYkE5o9vfDUXmlIBT34kJXCrSI7xfmMqX+R/BiGqIhHV7lXZwRRQM82ZWvy9EU3qNE5PLK7P+/AO/m7FpKNwyKg+lnDcEN811bTO/29/UkyeuxE9jo5KDtqW7blGkiuCkc02XT7pgTiqDrpzTZIwUEOxm6ho79//oDVSo0xYcmdN973kTY9OWlZ0iyBjSV3dVHyczHgWwm0U/xo29qHn5INJ7sabYc1Nui0lSh/tX7XZEQmsp+L4fG4ocw7Gt/x4htGcFyfxhpqrA8iqyfOZKWBT+HlPiqzzFjmnNvSRIIVr7PSKXFIfuEhQ5gkvLySphEXVVDWYjRLFmmN6k5cMC9jVkKTVVvEdUXh+R7wbq+6XKTNkGUwKipvtnY5/rG51y8PBvIPcmpWTNG2B9ZYEYkfpHo5Emc6ubc9tLrXx5s/yVFg==';const _IH='8b6dcce9284809314bdba3b20adb38bf1a26fe031f482d3f8ca6aa6db57754cb';let _src;

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
