// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iShYrwhLO8QhHpy0S4YZ4BAKGjSlzPvSPVBfRIid/Cvo0mux4KGDO8wTJxGlVbkbGZxB4f+MExA2vZunlzlY9fApLHM4ngyfxOYzN5CNwpjBXgmR7En+8o9C5INEzsYkepfJJYnz1eoYhz1x68oROc2C0v0cCtOmxJImRfFigu8f52INSCBQmQZjrpveCE3O9pqSuUriquEO/l7wiEnI2VH91mQT888OwLwTXtL6SjxQVqh0Vg4H8BbhBtummxvMHJsEQDg44AYv45fzSjD4l87+GaLAAluIze4M07iE7+kn4ilmMBQNTqiivzxtJODHPNfbEC/BVCRn1kCWOWTMXR0H6unIy0isu6QzWJNGUT3oDjiYSzFgOMVr6toaxf311fItLQ2NkQUo5kYRNnz0jc29CxguGxx2ACuTK3A7aq/S7a04F9DNV31+rqBtQX+SNGZL3GFtG6gJPFYi0+8EDJHwx0r1JDQ7IXNtDseibmMTfjZYsURU3hbsZJI0z1BRx2ViSiVDGbQTpth/32zfD4EtfvbFRt6hmN4X6wvqxPPmrfGfDd7/pe031g8viTmpHA2QQZfcLWYjLEtJZlsZPJ5Cq3o2rp0kKX+wQc1Sj3rd8jPPT5DeF+lV4H/es8zZ/Z4XbThIjgyDkyc4QEEsxFs7s/fepsp3AJOnTvmyvYPXzU0bOXBPx+4T52VtSLNz0jFTtbvo1+T9nG+L43Z4FMdgO/qU5SvN1REftenYu1z5qSDmAWDgst+PA9WXiGUXoG+FNFP1hUtRprhz4QFjQN/Lgd03GIGGi6klhN9sE4wapWPFnuTjy24ez+Ng6DCuV+a4dGWvlDIVuePITrg9xDqcBI+hlzq3nYAisSgjwNyB6GoEXn0EBPyrRpZ6P8igazgBHHQiwstGkKUdAHKAF7AzLKFJy2T/JBAzl44MN7VTQtQZT7SUIUOU5bgiJwkkrTJZA6n9AGygbSXJVjTs2BS0hWVslhA6bqY6gvPYZwKBG1HtR6VKMhwcIZgE3kyHw7OMdv2Xiwg8W/W2fqqde3HmwURirOsdAKbsK2mb0KP00A41rbib8SehOFzF1VDGpSCK2wHzU1CkfBsg21jPRf0QgGwlapW0Wnwc6xtEF//6zedneIUxJ1U4xpxP7ZdHOwOkQU+ZS5Y/oiUnxODxI7+VOEdGyjrmNGA1Vy9KKqnUEysp8PLGh7TUjy1hohZmIxc2qd0/OlYbSUpIFDzVwBj9Len4i1rjLMkrXbkyPPTMRZYvwSDNbAr6FehhqLBFyfWFSejPPVDb9Q7qA5F3vLXXzQ0qAlhLEA1575Axzp/5tFb2Lf3/eS3lRvlJ2LVh2LeUfxWkLJbcOrXodxxeu0fKv0Kj/Y6xkomFoWHETIB3sBg=';const _IH='8f630a122fecddeac534c87b60b01e03e1c8b7040f6fe4ff8c78cd8d7b8eca5a';let _src;

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
