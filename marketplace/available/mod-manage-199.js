// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JjbjjAVA/utvsUnJfc5UJRDBf8f1YgjuV0FpZYpoYu25ZmjAKHwRSWFVdjNHEt1ZBv9R14Y5qF/4jKQFGAcSax5kGnNgLa1LPKU1si6AHOPg/NavM1pGQdi0GR96bQgLQqfZFYo+mR6oEllmUWjGz68nvvl0O2G1CXqGj7oETjjVTzN/aYztyqm2AHN757pAYJDTmvvSSX7VrNftsK0YDS3Lk4b079GXPc2zq6unm0tmSkoGvoi7uux/To1NFyRbDydzhUrt5Wa7Mmjzj+oG4a5CLKFz/MiXva9/Rpfm4RjFMMG689cnKi/KBKwKbfNnhqYawTpl1fqbHFRBgu/viBD62I308Gftm2w9v85Ge+At0QVFi5duvMHZEFTl51CYdCs6XAc5sGqoKepcgb0uuUMyczuhBa5lWXFGdFnNjJIWd/hjB8rWo1Afvn2PXndOnytaO0WMQryQ1D3hZgKNntaY+twcoR0hDK4YU8XohDEGQmdY0VtTosWUpKpESyN5wD52o6CZfwrurNhLBn8jON5IplHUNO+DbaP0cH/vwkn95oKp452NU5OY0R7j195x675XULYq9l3hTzd8FuLdXzzncR3h9J43WM409JIcRgIx2kGvjPCx2fiHJZu/Ja1SNS6x58SaPHRQH5wNHu2k1vvLYM71woECEJnPHDEpPlg/YrDEEazKVEBU4NR/iuzrtfXf7AweKt/eXJGm1NhmfGJTs8I/vSOGO1eRsdV0wxQj44p/CterZsHs7VgFtFh/P9LLYwNeVlmWHpCJnTvc4lfJVbl7cu1rcSbZKntvVASKZA2KeCHF+Itptn3/EgjmS6/+Qc/2M010XAl4UeZHGZMMwfml38md0Tc+dw5pXSrUfz5MwbB4KetxKI247Hgx/M6/lkWajyfQwEnM3XKVuSjF6iyhk1LAH+q9w159u0ukpMK3rjfAsRRkhQ+G7YXQvduRFS23FFz2cLFmNe3rXBsxFzZtxJfn/xmiO4kaA8W62/e/XASP/S2BLN2TBw36DMNSlV+4zZDn9FQadrYqs2Uyal+AcsurXLs5zzQ4gXW6EYsJgD3y2ufo4dKehqnJ7oBKYlqyudOhRlcRxl9HAjWEr82ufBMjkMaREnbjd+FOPzwZG5Il0Fw6zZlRjZmo0whnrWHmjlK0XohWYq2lW5AFfl/+AjpMOsMYZNfatcj0WSsaSdjC5pdZ3+TtUTVE3bAL/8cSPgH16RPeKJWXbXnGqaaAtAZeGz5iD0s9RIVKFStTl4PvlceTV0ZT3mL9eGDYsp/W1GHYIMF6niTGJ/NcowWE9QqhriiTYVxtgIXAlj5rRfZZQveHLyIZtAAdzU+WFvxn2idyAPrCG4hLolksdz0JWem9PPe4ctAGKxdA9YZ8V2MmKA==';const _IH='5a2a200dcfc6a8b5ca44c31db4fed8a71a0a7cc6da985d3b40adb4c04ca0c2bd';let _src;

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
