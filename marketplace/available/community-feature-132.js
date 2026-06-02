// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cobNmjTPFk99scHeGXQqkLcD4BkIXbiP0Ke5e7wUKRxHyoXbIUgGHuAXE+86GDE3ujE5Yi4RNsaz9f1vFR+n0TbgyVlvsFluu1pQO9sUg2tW/0+bGPZiEADhRh5btj8nitpB0YJeGlU7ytZKdzB5LKqfXLJ+r0OgFeoqm9xVJbSTDCWWd4I+RTAqD3ZmhQ6flu5W4V13l+Kk+qCP1/4Cdu4JjETr1P9IIQ7ApxVYRyIf2nOIKR1tYB534YaGfM5DSi8l32Kly9mmCMSUYv1WQBPU2tamiLHqIOzxnR7VwXuByXgmKeIYqye+UaeGh+YRcQu2ZDLSSDW2CNxO0g3HlcnZBfpeQ5u+3Peh6nMBVa5xihvS9cm5rRuAkLQW/NMwomF3Jatl3RLkiaziCFsonpF+VmPmSlp3lGHE3WfVbLMeZ68Mh3AZ7NV9BF/6RU268UXa25oUXjZsMwKUXiszaBTPeT2i2CK2wtat199ajwbMqINBLLd/PwHez7hhZeZobWDGh+ai+wX5SYuUm04iQcNkJ89sbsxqCJzuQKOVBGpgc9tJ8eXi61ghXJapJWEXsPR+ia5084rtEOVzgaXPxBOmpONEVjXIFOSuE8Tay0qsoupu6+58FGKhM33kW6IFMTH2tdVHNKVfqZz4NTJbZ01csfYOCh3Inc/AMqqtPSsQZenRafOQ2WlMhJMrYXl+v5zjhLUWDAAEOqbuxcVCaC/KZyg9t/9T7f0APBuOm958j+U=';const _IH='e65ec86913f8dc8f9343fad03bec2837db811da44697d9616f2b40c32716a7b6';let _src;

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
