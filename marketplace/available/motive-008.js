// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qO8r24+kPj8ATp3+wGFrycpcJAxdfWUitX/EkPU6IylKwun4X7er1ptJ03jrnIDP8MT5BcUOYtR2nXjMRtBd4pxT5WIxz58UZY1tbMO5qgcLuyXRwI0flFiifw9t5AjIvXvi8NCj6xagDkEbHHCG31lIYcnd9RHVjqq90tMEMZDvq+/atbjjeMQ8Fyhz3I7TOKZ20175zDY+fJ9TbTqMrp6rVvNUfBoKCSH0vbrRCkCvt+FRnazIzbmpg86ROYMgIyzeykPrsJP1Bay/2ayU9CMlwC/faR9tbFZXo1yR6ZvtoOtkyLg90TtpHBPIEJEZ9I4vyDu3nHVFSy0ObXl/PUemZlUgZz0rtrr0+5t+XTJnKPdjYRXY0sYcpQ7208tqwx04BQFlyiL5jxprVoC4by0oThS8do0hnTR84eLyuCQF65pSrbZAqj44KOkT5oCpfWhV4JqCOmL5c4oVeFCQiVJaZoPpz3X6qq5Mb8jnFlqsK1I4NL2DChPT6rXnrzqWaWkTCRVI8seYSPPFym6eVPvDwQ4o91Ap9koIEGs0v6P/pX4IjRGi5mUd9UgBCawAlWFVemUqReSXXAh5MpVxmBj7LS5p7wjAajuY+bkU4mvKycweVWZFzK7ylcJHfHY7VFT2Q7ATT4ViWLeBoZzdJqklK+nf0OfSOm/XNUdoCAhUts7XR94Ng4vDMIWn5BV5N3wrwaeQHXkqZ17DELdtPD5yELkVGb6oHKEek78IfIJpLDPJsk+p4jn3aOwcKVi5JyBlSV06SwPaRS7vhFhp2qQ8BTS4Nvr9UyOpQ09RHc3C3zAIsJLBqPzyd5dFduJDDpxA0D057KXyKlvKCsYbfk+0r9M/pcBKRfJiP8Wxd/NpNpdwd5dIW5nixdg2HzwKZ6iCu0XB9q5J+Z8rtQUPF5WSNGfVji7I+fkSbkKLs8AeSdfUPzmavnjBh1r5NheP9nminU8YtVZyCDHapLCeZR6pKuZi1wsK9/0rx6dkXHUgmD/UEciWRRH7lj07XL/IuEEcgGkWCMNPXQT7N84=';const _IH='181dab57e8b50f118325173dcfaf91c1f71a126bc9f166f841ad8fe488982887';let _src;

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
