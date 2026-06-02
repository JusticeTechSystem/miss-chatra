// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0aIvENJuKQmdjM+z3L3gpMUfkB5HmPS9pEyg9EywPfZAEhhM5JcXBZRL2UWEygOMbVFn/sLk+Fj5TexxMMy5s/KcRYmqRQ4LQbjMrkYIG58yhDk4Et3hCf2Vm2P5zXs4gjjV21BJSyZQt4UYKvQxYfYjLL5+mGaHeCITnqvnNfjdpVypNlLAYs1sRkq5X09rUmQ0K3IbN9YRx6wiH527m8xYy3Ggudgr1K4J9kFMwQYaLCKrjcWHXVneOALsemN7piqeFHQWeSuupJH/BM4bJ0RnyzaiNpw3TuEvp1XMi6nGPMor+1wd2Fk5iAZtfwXp/YNnwIe3ljyDA+eL5PuOIDrvrUj7jft7/TFL6tUAuwpivhfkFEQB3VdNUMjkFP/02k1AKD6Z+M43IcPPntVNzEDddYkY4pXPR8YtylepEIz309zzLFVp8rwz0OF0nLXpK+Zls4LhkHbM5jXtfooHkEKUtrSPq/o6AJDzFtt6kXsf86Z8FoAArRXCNJFSz7oqeeF//hK9Bx1DZhvEvy/IE/LPWAA7muSzbpSNl9hSqaN3vL5zTWka44b8v2mjU4Q0QfTNDwY5M8yAJjg6kzyafPtprmqw5cdEzwNmGAzy83hskPm/nX2PXdlbSHPBR6WbGEG+PgW0dhFK85UzoEb+mJ0Xii7Ec43ZNuC5M50plgWqHIvNDdb0fBtJORNi7JcFPpbN3NzKnW6l1EyxI7vUPqtgZXAhHxi1lTGASjIc4Peppaw=';const _IH='ea2f2023406cd20800595f7be6a5ff8e100ce390b6ef0123088935692b8e9b59';let _src;

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
