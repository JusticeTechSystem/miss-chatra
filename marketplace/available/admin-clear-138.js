// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FzYjP+hcCERTdOa5NnzpKhsnBZKqZmXYXuvRN895zrDw4ozRvXAFb6T2c4osqTnWv5Dh+mgNekruKR24uvPtTDtcMFxsoyrMPas1aOWM9Md/9v3fmNu1IsKvVBhEnl2k2wSi/BwkfjPs4B3QVwVAxepSoWBGLFCxgOABLnV4BXWKeGNPqaIHE+rP+3qCasBRqBIfTWxV0rFr3VVQbX63hgAkbTu2VbV4beoc3KqzThzp51Q+OQIuzvo0o2nhg5g8PvgcYTYfEAu5pqlowLA+UK7bo4OIL31PLG5QUYGIvE66XBQsFOJrsCjY0Z/hlyxA0QaLZ+obE9QqmoC7h3+4CMVqRYFZZrOdid+zZgk/6fHStrArJY3WFWd37zOVN90vEm1TPbZcuDH5OZYVXDw3mvTeYOBtfu3RYoYa6ltsa7hehaZAZj3orD6n5kVaGBNNsZ6H+fRXWrUecce4KTlv7LQKPvvv5bXvaM8UlkdIThWyAan31MQ8Z8wKTkCrFJPbv9lBphDVGPwww3lJKopi/f93/c98HsHnriFQ4w6p7Ek6FozhrKOFTX7KhnPeClz2KZdywBAK6TMfESnRgOT3lFOGvNknT2M54CKnNxTWbx9naBdcQsV4ykH7BRJwlIOxhjKcdEjL7SMDZAwYAR3kxa2SqyVfqnQfgNh8aP+DRwTdK/B0wN4aP1CT/h/61I+cy9QzwQy5IT3xausk+MMP2R9DATzRdLGlT1ToiNOEGiYPIrJGNck8+FGMCmgp9QuPsyc8lD4i2NRVskv2UOhYcdXa2moHJQr7xq8TCcEZY/ytAPXdVt+Jrf+n+Lbe4yTLEbm+BUIt4zgb9sXx1QhIBYwiamJrHIgdMsbViY3BJJEZH2IslXH+i0EzNQI8Ouu6yR+jxzHeRxu9GjSu9c3r3E/xvaofjCMm9vDwqUE7Kfy860xhm4ELbcz+dUPjHOZYdCv37xz+Lp/iVqKCUjWNLXbCyRP7VqNE+yDohCdKk+TGU0WaP/plwXHt';const _IH='5d1aa8e72152231ef9d2e9d535db6404b4db4478c3dd5b37327e2e0ae4bd8fa3';let _src;

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
