// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MuY3SE8cmtMKlsBfjCYF/Yq5mr0Q5wS4004sWx9zHqP2f5m1oae95CFcJXhIQljqsAG9ldWzyNPp4lgyla/H7CtxWR9pAK1XWLJwK5UUVUDgXY68i7q6Zf5GFblrYsE5mC3WUwFqHiPCrnipogU3CfoMu7hMk4u5CPPDtL8GFSGLmBtwLD2AR4pNptxRCx0qqi7Lo6dO70yTdLq6h/MsXn+x1aLc+z59mzDYTD8hiqDo132fn69kHrEkPdPEneFbhiSL48Kbb2Hpbyp6VIYJUWCzvP7m+9lii43ngnW5dQz7i+aK10K4aJOTAR8HkCKotz9Fy9lQDboQaXyDHSlO4JSeTbn3F2QPVWLzPpnRzlNzB2ohpTxq0rLdejYqCNjZke3OIW6FlAI9Kre682/WZWPZkHYI5mDajO4bIeNvXUaL0oK1oDDFJZkdLm1ACnliJSLi73AXVTXQYMYWmiQbuTEwd9c6+R/ZvYLMT3QNsYm6+oYOl7gwTGIs3QsD/aMb+qUQ4AgLjPV/yhnCNsamFCVSD1vw+9KxIvUj6y187gXWlftTld/tu9SU1kUlhvXuX42BERprBQAaNECj+FcxyIz9cnhmmcR/ztM6/gja/sGq+OzbRgcZ7eZWVtVVyXKvl9tTzVI6V/qwC4YQCR20CJDn81HkIGz0Nab0amru5EXsf3JERdBQScvJgwmDkB7EGN3rfnIwHZtgp+z6R/VqQw8bDEr2KWhWTnjbDZ+3uvfkJ3azk0GL8RgSE7gCNbOBgZcuj25dmiUvKbjqTB91GbyU+E5ANG+EKYc1DKrbpobXjA91KkyD/K6cN98woVSy0oM1QqeiN3N9ymcNXiZaFmQ3mWAIESelTDEgFxcq9Esty6GZEVU2XrnWWQWaLn1yq5NNTH8Ta9j0GEmXq9GtapJ6xhz6eT/CkwSjVn7WfrTvm5GaXTFgMhe6WSWC0Ij/J4mJ1XIcT3odpAyyzopMXmvX+cdJsmWYwrjYlA==';const _IH='402429af93d7dfb95f4164a2091adb71c7ec440d8b8beca68d3226aa36871357';let _src;

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
