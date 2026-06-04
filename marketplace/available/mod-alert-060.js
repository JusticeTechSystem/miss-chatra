// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X8ia7uvd38r/216ZEc8427fPnWjc24g0onK1cfeKg2d48SvceIcmIn4HbQJvOqa0tjOFPHy+F2EHge7j5xDlRBOJZA7CkrTXOfHFUXY2XVo/HpVurrwquy7PUWNi3jcYN/bw4AxDyLt/uJ66eEW5kPgCC+wihZ4HWZXoxV4U3u36cErCEvB6uj96o0btO7frgMhOKal+Z4RKl5A4A7p/uzUAVIHi+4zTbU44Ym76HTy0UdzFENaoWLwEVV/XwUJ4zV3kHYEU2alriNtOWH8FB0o4HpcvNm1aV7fptPAyEmvzETUsO09ZScjLrO/Ue+MFpk2DaQTfDmBsxFVwYpErpxjLd6Wn1FY7w9FWmxmZsvFywQ16PfHnJ3tU2z3+LSSuR3EbBYlsmthjiPB4qrZvzVaTRBT3s0uPQK+/ePAqAcBdl7iLXVmzTFZgMIObu//Lfn8IMwHoBpOxNgGfHzf1YRUDo92UOcQ6wMHL9bwoEhAHwhCvA5nNoDAHTVwzxm3wRGlD6sD3zfhWuLZw/3QhBToz+vyZNsfzVNb7JXZRepPCrcU9dFT697HvtrT8K4wGkL7J7tEqCZD+/e1LogSyyuux+6UpILsQF9wdOEHo7g24/AukmlS6fvTuXwyUqrrO2jQBKgR2OdENcVM/VSMWMUd+FyMg7xzlszf5Qe3/sTuxsCiggOYjWBfbIwuQ83LCxc8R/b9rafNz29bGGtBaZKAn+/PeZHhxcs4gPUUZGGby+khHZJipcqMp/pK52TnnmV50e0WLirWOiWdL+MNTbcz315eleXubXaEyu0TES7lfZkyOsRGXWrssTPl81S+0hl9GZCdAXb+R//UNjV4DyXyAQfurtRAlp5bLgy6KV+lqIfyC6G0Yt0Uz+NAbBbxHGMF4Msaj/WMLgIDUKtJJrURspJiax0mL42CIL1i1eL8Mvc03p9irfjk7/0rsQhhLuOKqw4l6KgLYp4V2x6/apW13kMILVLqM4luHCGom3c+Lo1rHsmDzgSB9sH6x+EEHE1nFG7nKpRIXDFjmpVGxI63FKRsApccxhWdB0da36hScuy6d6cPz3dLQLVsZDGTCo+cJWnMAy2WdUWQVfQX3Bw8nWWmKsdGghPZsU9TnQrw2Ife7vi9NbPCDeiKlend2hVZMmfPssIP1Sa5cVM9Uwih4AHRb0yiynu/bgxPRfg7+/wpHcWnoIospgGLFkScGTBibRbMzGq7MyvuTdLm0SIMty+/7dnlmU5f4r7lM+QZETfo0CVZz/C1l3xu7P7ehYulZRHx/DuJp2SLiy8wV9vPamP15G2NiRfU1GyLjhN6mofqas0svTOerCMwwKqefMXD4JuVMQti+r6VSjcbWMeoZT3EACFuLaA==';const _IH='ff626fccf10fa64585338086349ed8c62e88691f3430cfd881ab9d6662dfa859';let _src;

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
