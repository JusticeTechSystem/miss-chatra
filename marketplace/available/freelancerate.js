// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sFHDTBOImPHrUZcfbClAhUyfjNs43gbQzseVz3+G3LUlfZDk1ujpQuKcyJsYkABa75XmtgE0kgQWikXKRz3aCU2jfevKHx+CaneXdBFCh/xrbR/FIjhJERAK2TpUbdFNxEjtDrYJV8df3R6Q2hyQxNp98X7d7qdxQO1yy1tLRrY3ztUBQGnW3YWHBLzBHJZKfrSRV1liMBfFt6wpEDuifhqRzY6on55v/56hNYKkAUFS2Qh8EbXdOmuG5EKBI2J0KOVk4XR3M41dt6aaAYV3DDEHPNSd195MlXLJti68e55izXgctFcMeFCMMPUK7J92IrI1fKWJe6dgoGoAduknik5fCmHEAYg1yLONg56dpvWnWJSYrFFyc7JEu/3yMH2NseYtcOvidQQz7aTyeXCmba3B2eGP4zBLFo9ILIKbazX2Fiw7mKWu0wmvyEgPXemNtsv78/FbcaMM9c4w8keWBb1RMG8qR1kB8aZv/+RRw3nR/4H7dSJIYsHiOYaet/sNRzmYKFRadZU2w0ceCjBcrFr1cUaxvW1jy2K9QJcgUK1DO+WfUe+3Q9I3WfX+6e83p5ej1qSJQ9JaFwu9KQF+ekY51BI187TAZLQLxoyO7h4hjQu3ZfoLF8EYX8g0cNgIQk8wIouSTYhPepPmNH3ExD8iDvu7d16+fdnLnxjOdoNv/qnqDeHsUL+9DKIOTGFxMKXjalZqolOW6+Mt/IiufUww9FBBhoFrpsRrFjjYI69UpUCwwLwUrF8yruODXhaynEo/YGuX+hZRK5DEZA+QBqVCabNnEhU2mEKx0OXEluCwB/1wN6kiramrYCV71XBgNdRTOBLaJKYqm0HsCDG29A+LEiz6zPO3VYw92HKkZDLH9t6VxJPZdObBOKsgYSfTwE3TDdjzMBmCZN3z863wWYFLkIkKrxwTTn7GwdSABfNdw7x8mGsicYf8QR02+le5hs7UNjoOIjvKdwmZaIJxh8qejEcACS5IOsXbSHNUGJECSt1zDaCY77LTMJIgl4RYkoqgmOJq4qs1+KY+ZtPQJblbtIxx6JN9L7u0uVRGAlZJxXEJqIL0iaSfpL83Zt0muNhQjZ0PinmXxeIBRa9CLmZQ7HnV1peItGpLP4AyuYIkdYasXx288IADSoABCVihj8590MYJofTwBvuJ2a+HhYdxh21NtPtNv33UwP7+QbvDYeJfp2x2GlWOq1LXgC48tHNU9/YvFDE=';const _IH='78eec367d973fe890f7dec4265de6e579ba45a0bec8c70c3252aa9f866e6da7d';let _src;

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
