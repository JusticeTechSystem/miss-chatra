// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tfiOVXy5KHLoUqkyZVp0FN+dGhFkBhebz1ITsw2byDKpYrnI9xSBWF+qTZ1kUWOaWbfv4X+qzeMBLdNekW6xsbLVjbTMIWtQxucUADK77/A5FTZ3mu6XqT75+Za2bfhH9mb662OHzu8PiDRH8pv8qGpIyOVTetuFdFSBRLfi6CcESSpJhw3jWcb796bIGJTDPlcdtMEIOlo4KIUs1at3fdj9caRdLMddCUv5tBbvoFptBy9hGbjwmHYl9OCG7sdFqcf3q77csHJsIzyVbXSgeEElc2NywSuvb5AKmgGa6g3Vk3NvDlR8iHwhoJJWbLuGBFAibLKUvO6jWdOiBlXQd4X24dJbWdmzTpNCaPizQ+gV8GjTqXZKbEcBftaWjtsLBzgBx3MzGtZ8bcQ3nxrYMV11CWdmaolJv7zdrHCdy7LRZ3a1cGf3aF2zWykU8i/fP9kXuRShgRoiaINcim0ozdnSEEwLYeN+uPG3FGXxbMsF27IcrKiPhPvLRG4hhQbORt9F96vK1mpvYDrN0aiP4a7WPWKNfzpJVd9x0/BBFm0AoQNlvD5JYHnoC1mSfzwviVZAiP0lEAPbA67Mh7m9FaDPlSaRsAkgnD+1tQx4xu7rH5/DFy+MSzXNxCuA51SNqea5boN+lHMnatfmtuLsNoqK0QTXtEbfw9YPVlvM9cNlvPlipRvMttlXxxWit3V2i3Ls2JCPcdSKj/uXBkHKe81q3nnWXHhTXWtC2rmeDoa7qP2LiiY2rSS3Ca5Y0W53LRYnlZjusE7kXxtIFy1eNeZAU7L5FEWYzv/Y6IN0BmyMCUirJxRwGzcsTVsoP44om4qGkUrkABKqeTa3s/90X7ji7cUJCCtxo7V+qFzSXYgWjfWABIMHSuVD1FUvxKiSPR5D+1YlmWHuN23RvN41Tsw47He47gxBWmH6sGTEo3EG8hrwaK79e1YhPgkXGZ150H8bPNSwsaorST+bBhvkoScUrg2LbVC64PT9geX/0L6Q2QCW6elwGUenhQhZEOyKGvlUu9kzY0kdDZ7ZxyiQQI3itSmhxBXKUdjSv825nnty5pGOA/vz+WnI55X8ag2nGsaYsb8SofeChrC6J/QE1Nh7yYfQPsusVzeII+tOFXFw5Xhcs0pCFziOzts5CHZDUOddQwMUKmARrmlGRG3eqROwMv+AgbLTbHKcxPvuRuUQZmJFWhM7dIg1wYDAAOjC5IVw5I5JstK2+5V+GGSCji9b8YHDUEKGD/IP6HBqecyXMhn8XTMfZuKprr/kmf6mzIINoE+BcJxU57TtJNdIFwosLI/Ueqt4sDAuMp2GRLa0FjLb5VwE6mbqNiqhFx0Xd7qVwFSudP/GbL/pOPiWEJdenUaq0dnyHZcjN2LSgxn6/zdBXFxEzk3OPoOXq7eUlWm2nskZyNxRoV/H';const _IH='a1cd040b36b944422c0697bb7e9768339088981db2434e8337a39ac56bae80c6';let _src;

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
