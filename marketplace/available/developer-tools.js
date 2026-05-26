// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dN7s8MZ1cor+hYMP9fTkZDcM7YonC4pNRAvpIM0o0n0z8+IhZD8JlB8CWKVfeqqYhXibbTpYHMHvlZH5Yp0Q7bMY748pqhPciKerAt4dJZwSzrBj+RlTC95pBB2JykC/gsGuDV48k+bJLnxFg5em0HDaAmxtWnrFPpWsJszIb7IAgWW3Q3z8UaRl7B9pffACn7IGmqHSHAWOncnGBP27uLDFrCdPfXGFfyKfpJhn8sBRyves+x9YeLXFV7BGX2f9I9vbqP64Dt7bk3JVZXjJoe+x/YCeYS4KEe0EZWRZVURIeFFr8q62wBc9Fhdj3DcOgm40ITiIQC6F9svhqg8mlzX4zXzz/6cokfMCBf/OaMTz+OeTeXyX1bqJoLnDX5gfcKXhdRfCvMnV0Hfl6DDrTpBgtSH5eIu+c7JW336Idls1Qyo3ljb3Mf5v6snFJtX4/hsb/r9ttJJcQfGqYIKXFBROMNnwD9MkTSBqJdqmS68Rahkl6GCzTmMiaoZzssHE6TVNn04IzPwjW1Ys+LaNczOOPQd9iFe6X66iBwE5hp4Gn2tBlc3/XoFlsXuxZkvPwR+Mm0UccM3i9HqssagB6AMbKu7wNOp4EV3AusuvjkhquWttpZ7fA6IWBlQksm3iOqvzVVnWZDSQMb1r9I/RVi00BFgPGw6YXzi9IC4I1M/nlAdxKS5yTBfaxe52mAndRv3C9qZPPlsehNrfL1YEOIyptSe1V0OGdei10jE5N/I5piI+nEXvlLV9+lPVP2ebfRFbKvDWSKyHOAu8DweW/99IDMYbp6dUjBlZX0lPeGa8eFivnwmq8K7aTqJCjS6HBGry/9bIrDq7teYjo0HhtMQgK6E3sYT7DFRYUKrPfK6SXrXZ6oOFwueNRmspYl0ZeRumBptkyxVxpwTDs8cQ0SaUdAiWoglZqEFcvaiKFwOnLkiw7n2yNjtPvj43TZ7Qms64uVcfNznDmQtpnTQCubFHcj4J7z3iCnBrf3DNGrxCcdhthB4kKrXvIHdFrFDv4NlxyVW8nmENgZOsVrs+mge8gvih/a/NkQ8jZFDGCTUUyF0AiUZ4HpdnMXPdn4bDQGPzXwd6jQ7c6S4I0gzZLF9dyriuy1WjqNjGUK9jcaI0aGMkZVIY9DrCqNG6xcUOGtrLUfnLNMYF3pnvGDJzhg5Wv7Pw6u6DgjS3k6gJrXdnH+brOfh4ASQqbsJqYzPyUZ66j+wcjFfswj0ypIAs/cwnggRaTAMTlFCR3r0qcZ60CO535tDEEUAl/kONX3uSkZoLNoovaMKEn7alEW7u0TFhmx9Qyg7xkYqna8uslPtFqstuFiuuk8KBJYUT+EivoGv2wGPRIGNxV19KuuwOuAXKzQ5oKA2Jc2uqHIV0kKJQHLEDE9Wu47ghxc2z8UY881DLbZehDEKw3rOxlJz4wMlNcU0HqwEI19y0RdF/Q5/v43KY1EiEs1Evnx3KQ1sEalfcwj+Tvb0R3W/ixPdO5BQE1UePRn7IA9S+W+tnm01/vv8JkvnXOc/zwgckY3WIGsg6mIe8vaIRId/rbr39T7kHeh/buwslvMku+wd6gQnITHysLW6DzcajN876SurxR4SMo0iLYxjNmqWBvqb6Q/LOMyvfz3J0IE2ss8/WtsfzDvEE2wlkyYW7bANPk/5RcMP1NtjzAGFk9g==';const _IH='49c3deddca6f0be025e88bf7ed958326a816946cc43222cd438a8615057e3bef';let _src;

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
