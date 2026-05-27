// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kjdwOayAcKg53QqG5HlEOGxtDcEHP+M4Wy6ZsjXLJjxwJCiekKsmxADpU/2ku4L3v9QSYYi45vd1L/JTpvpJWV5kc5dwF6auNG0Tl6zmUmkXXZtrpYV/TrCajJx3sOFcGwbawdLS7zLOXYLpox2cvqcHiWTyINdVyOGFMPtNisw94ZH+mKjZDxfpJmS1vd7kLHPlvVgsPzDGVYkiURVuhZhJI+nDHavo3/abvf3M1IsUO2smQwstrHoOkGduhHZdQuu3J585DoF/Dj9qXJq1zuzt4wZAqqkANyeONakebBPSrWEg8Un0Y3wNz7wTG9zrtuEDQ5mIRJ5F9HfKTzqZFuHsEJ/3W8up02ftdJTmw0bSVAo9UKeyk87PtcgIT2lGhLKjC/zA5FBQJuVhmof4JBDGbTtyOY7OXimOs1fWrD7OhhK2DFYZ1dF5uzSU2y17VOpR1NWGrVJKSmJhMG0hMEt3pZPzKz5sU/I8xC4JqAoHu7PuONsIvKCKdGzYclj1QK2zHSSdi+3a6DOyyOm45yrrKby4EH1Rh0V16aZRAim2jzemXbZ04k7wjOmoBeeGlSemHl8Utmp04VYzGQfBDuqsrJjS+ueXQxavqgefsJ4nXBRs4akyvf9O7EMDj8S6oQV4ycqjzFTCdNajf9I3wCnBoOfTNxS0mSRcU+VYNr9QHQE79FapjGxttArvWge7lD0/HDaanE9i6Poy5e5US5zY/WJaeKDSDXhEIJ4uOfP2vJHLibPmNHTlFmAwKXIQj94O9BiO7fmvCIP7SGVyo6IW0s6h+WwOlIDA6Q5heDJOSiktBeipssKxEM6I6/xHuZRoOpt+wDhSdnT8bEFL0GDbpi7thyK0tSPswr96mPItLyvgVa4tfDqW0Mn4aropJ3h1JpguPUG9XvV9EZTUTkaKm68fHfhR4FkZ0Qewoz+6rSKyeFRzpIz+XrVBjtJhT7VAQxg1cE5LauO1bMb1jfHPB/v64AOQMY4Uv9vpLcUaekY+iVuGIJ2e2sh9wZJZupPIyw==';const _IH='e08f1f7060b75203e8b72bac06dff7ea54771504197938a31f80ab30ba711035';let _src;

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
