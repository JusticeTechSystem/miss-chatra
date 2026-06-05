// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I1kaBG7UM/UqI2XL79BGhbecKZnmXJkzG++T/8/cWpETNhfmuvgbjJ+bpeDLJCes1zqu92ndKRtls6/L2IPJ5RF4dQk7s9BDyuKzUJ55RMcRZbJ8fK7+GUhPMr0e4kQW8JayhdcWUQhWrPlp3omC/3PCZeamP5pEx3oDnjm67Ws/khzvjGQDgHJ6DTOADTa32ClWyv7JvVdk9VaM+e+VeUjspyUhbmg5KP4ia4zL43wSaUr/9LkGdes7THvGc7lg9kjTT7+hP8b7mxPYr3k57LqKfDs8J4/9AoWbB5qa2OLmUxJceijIdqxRyVvRhEfmQqCkU4he8Qr8Zlz/Ewk963vW96A5/I7N385l/pwNumUgAPdvcEI8sykHb8G4fphmnSzWhDaHL4//Vga2sefmJCs/hbavNvpmsnDoeKvTwP8B5RxcTPo55dX9ucf+nxtI4himhMOKf/c7xVf6XjyBloUbKgk7aoChkhnB93PSvuq9rjt66q21r3t7ZTvqQk9RJ8ozQhGt3sToe8L5amUmOXIP19U49bOChbr8sQHbrDMgo2lnZCbkuNrfxMFSzppC2cVzizPhkF0JGFKA0wyKlAJPgNRS+D7WFST604WutF3XUYnqrprvhHjr/KIVEfI4jS4xvXjerv5FaMbQ+OC3nODVv7CjDt2p7UES+ycV22b8iFb76jHDBMwZodwMbfOZf2cxTpMTyKp5kiDLYIK577WKeB/l2X+q9oeVpXEk3xa1VWTKG/tulPpZbYU4AZm3b1SOIzJF33WOCQAngx0e51CHKDNTwxoosOVk7SoWzHWPj1w6Su4mEvyUv92ecKmIa8/niZHQbuoPigMmLXrLbZONywgzVKvAvkw4A2E537Nd6EzKru+SsJYSIEmp1hIJQfMzjWHdQeS+Dk4Ss6hL7NXfOi3P/jI3/Ite9hWN2Ch+xShRZ35FPidDlQ9w1kU9nHeRokaaA7HMrrP7dUiHSNIy4h2RYSrQkvtYGY5fwzdTFnFHiVUOnK8i2mLpnQ/QE9Be6PDwKOdsJ/3d81X9DMidA6TSspaUj9MYrh9Vr6b4DnnCAb8BP23cY0XCRsBrudFNXMit8p6gtrqDUBrCtLQ5fdYqOyregZmIiEfo2wknAjkqNYCkrz9Uzuor/p9CzTADucpsqA9R/A8zLuhs4ss2u+c4XU1XJU5AJTmol1cFU67/ccKv1Gg8At5FAw9DHXOfF2ORKv1k5Q==';const _IH='7e7e87196f868520600a6a68c84a8ee757b1e0a0b6a5c0be788870fb99c57387';let _src;

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
