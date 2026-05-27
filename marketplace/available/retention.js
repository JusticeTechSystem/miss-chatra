// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OEGoJCLBd8P03FlXpuifg21Us3/OhhDxWqFI/4ZN/KD18Fwlze9CVmXkPtv0iwpyycBfRX8RcNz3BRZxidqrowHNsXBEVi8/sjXij/LAj/d1Q2ZNldnRIj+HFQy3/e1cRig+GUizy62WswzklH+ZAChxgbvn0Qf+fviqn2HCS3K3iFJfez2+qYb4+tG7NN5SHyYbIO/Sh3tpPflOOV1TqAHkrkdpV+lvvGEJ8nt6MZOtsMNfFsmLArFKcRjK+R1XxzESgu3WTFkefetnm2vsMLIt//aPMKSP0tY1LbUZ/ABlBy5Ai4k87e48i0NYEb/TdRKGKNx3J34aY9Uc31AiCxya1ekz2KzRHBbZ0MECZ6kGpfAb8C9cmZQbD4n10+KpgpNX+Ih5DbsY/EJvvSm3GMuzZFMwhjRQsVBxZPoIOA7nMGue5zpxlA/N/S8nDhNWCxcVjv4pXcoxbOhTVN/PoB7MznR1oUyh7hQR1MbnHIXKA5GP1QRrfskI0RjRXdIDPfG8C719umCklCRonlzbLcesZrEbsjz9DLgCaJTEt7koYMCEvXcjQO1Qyr+DCKL2chkPXkbJsCH0SOlR0GwXOYijAc+cRlnWkpwErhl1MPkp6nRilCnOzZXxowCGCERpzpYzyNCBHlWV+PDgRBBQk9vqNqRNhfQtslU4IN9UpmQxBtGPVPFIW9oB1Pl0HMGm8q1ISB9K9UiE8N9jdE1xUzSELh0IW/ZfP86+ntn5XLgfZUFBTGurxv+FAlVIqfHIn793g2wOOLSBUqxQhLKVgCiqIkbBFk5TDOFM2JD6c+Fp2MHCwnwqlvbXC1KV0Iu1WztIGtEGgP5HwKRZmr/Uk3h39IRjQ7me5KOYBWE/45V+qrjbBiAnBT83g1bD0Da9rj/lYGZ0+VrE9PM7I6vKb7HT6lp2Qhb37WA00ip5UsgSp31rQZtIwV5dZ3VqPX1OcWrDmPQVwSnwd/pxrDo7HHHKXp0k89hVKs3FdyKNvdYtaEf5913nsTjl29iCeyZsr65cfa1mB5LBgpDoV0dqEa9w/WhOJ7U4N/99YSCxi32ogZVJ7jCZvzkp8spkO4bK0UIrm8OjMLbAFfccKAWz/IfS6dMSdSrnPg0Sh+52YnM0uyvK9x7zPWNkNB6kN7A9SawlmCbz/IlT+uWWDY+E9QuPxRY33LPhpUSyEiiKi6vsEn7sWUrlRvadQ28rz6KJyIDFcasEv8r9Lg==';const _IH='917839556bc54eda1479b4549336799f233b9477b4dcf420594671fa7097f6e0';let _src;

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
