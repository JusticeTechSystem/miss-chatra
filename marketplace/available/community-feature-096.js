// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bwj0GkPY73Am1Z0Bdh4jPxTcL8yM1tiG/xip6UqjK/gsd03ZYTBhcZWc7+ItNLeVVDu+dUwPuQ8285+78EAOTbBNFZZ1A7CyfwlWPLHUj1+FZeb06KEGeDRmORgcxNbA92Mnz/0pkiIEDlPdl19K7i6Y3uzceME4SqL/Nw1vi7BTXsIaIuJU74ac8G5zzTZzvZprneW0A3g0VJFcAiXw1zKUChaqjFfzqCQaQnwjDKDevjv/f6xS3mW0VAuEGrcXkY8kM6qJbYmFXNjy5XvCQ/GkDUFPOFBXejtEhfTH87D9izhs70eXcCZg9QGh0CPTcFAjy2xR+n9e7INdvgnkc6yKdrm8o8hKs1ys6H2M3Sqrz19BI2F0uIcnBZcLmTT46XmDYxe7z5cDeTCx0h/89wJlzbTSz0Zlyfh17z0qym9W8D6JYfky1Iorl6oYTsMFjf5N7VFWxeZqfLVog814nSP7PDTOKzYyY9x41I4vXbIuR4B2OuMs/LwA1AiZ1V3nGcdDfWkme6tekw+OoyC73ZAoz/zFU17zZbF8X9G+A/VzIVDa8FvEwzDhmdvTcrNwRBLUSggwJSARAx8KSSpgbdqHBgg0xzAwOcVSB1VRb1cLwbomwmj4ucnN9hjQ1LaVoZimdwOCEOhuxeCWJnDgnVQj6rny8HER9S5mgeiL1TifVXMfL0zwZx1nPizzjUUAQmS/zl9qRkrVBZWvXz196FTHaqY=';const _IH='f4e9c6338d66ebdd57e6d94e785901fe2d97ac6ca43e9afa243d9869510ceef5';let _src;

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
