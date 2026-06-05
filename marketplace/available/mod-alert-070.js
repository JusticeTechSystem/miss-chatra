// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L9IixDOzGsG437P0XyPnjLBoJ5T6ACwJtrep3CuYH4lncOjcUChzT1hmnVs41rHCTtBGKmJ6wYYNtXAiBSZsRZzsknN7WVhXvNpumIunIVuaI4ghzDEgojd+kgL+prNzATA/qQZ47NAfZSaJLhM7SuFlgpDD+1BLYYhp+2sLbCpHoN+ZCRzpdNvuBJw07o4QE7au0sXVGCbSiQoYYGgDNIcwmiwybI8nfG52asvP/T+50eAHZV46h00yeybSjlgQ98pefsK8cce+RQO7e/N4urdkRxzfOAxCrauXHLkYb7reVv8CtBTMYNl2u6RI1b2tifGvZl97WCLvQ04KpCF7xXaV3u7ULtVL/J+jmW6Ap0kf6TLzprZjvO3MT7LmExIhLn2sbzBKkFjObq/Mm8xp0FCRGZ0V1oU7gRRb9/8vkGK0YyZkI/7eiKgRe7n7LC6hwm9ngmakzQictiISfL1t7tV3KUWJ4baGE39I3Cf+svfPHL2jTr+JIpcp1F8VKICN9p7c1tn4S9zCKI5QTHzl912a52U9nC1/sSU0svaGtp6q8b+7lplGT5m9bD9ttgC1g995HGcWoGHLvFye7JFJbQWFW/s5Zo1qaUhoJvZ3/3gOzYAFklkQsH1z47UQB4Oqy7Jqt66TU77v4NkgUMnMPhnHGiWWt1xzZoVTssPfDGh5n0Ag7qkNmabImAcc8JC1vddrtMvHUd9U9i+HRyATmQMlDEP/gOflSafniEg5kHdhyUaM+3WqnZtI6X/3aRtPdnVHOxEOhoxphsoioKCZnhduWOPdTVOnjwDseXQzLvJOXDePBKLzFte313GHn48gsMW6Xf0iI4pq7q0trv2WSUyGLd8oiuixZsKJXHID+slIRz7BSyXEFOZRQx9SeNMsfm8RVESyqL/vuOvLpaHoR8qJlp5qRkXfuCWDqy+TC4nSTlSO14ujbGy48hg2I3hLv0WO2OV+8Qh0uKsSDigNU+Miuo+OVSD5km+mAVX0EzWR0gUUHibcR21B8S/3lOavyuiC+qdurj8kbcfscErWD4MFncjoeVZuNeEY0Uz4cDS6mSepoWEZXG6Wf32/Uy/4Myj+yqV+qnoQkRh8dTm0LxgeO6bJGZtApnOxIYaUO+thEPBGg9yI73BfxOfs0GZ0VhltUCzDlnlw7bBElpgb7DFaTY8bRmdXho+JrvIzoybOuTAgyoMZKtODBA0HgiZNLfdOerVX7/klO5MHS5K1dGPSjqWJfW6NOB+dxRQe87Xswme9sRUaqBuX1oyeW7cQeJdekDawSWM7Rl/25KhSXHaRqrYfWwSnRda386M24qh4qsczdoNiPmAubdoJ0siatH3B/C+PZlgTpHEVLjJA+VQjDRocO2MKpQ==';const _IH='fc0ac3d050859f356ed2d31db721321a5b486ee5acd58f2e076dc78b18952c92';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
