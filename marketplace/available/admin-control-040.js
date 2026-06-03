// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='16xeSMqll/n8CIjdmJALzH7EwJ4P4843Zle56wscoWEAsadZ9iMpAOKpa63UVD/I27F8FslaVLqBeWqdhJykZl7Sy8ZrI129yOYPfPgXcK3FyJhfrsopN6Nq/7IsBBRiKJAN7GVrq/pSwFf7uBJ7vKX9WA+99Z9lzHO/BRcRHT3hyApwAmBJoInSiBXE/PtOiYA3AWlsFpJa45zvi6mVJ1+svLwyd976YVxKou2+Jh2fCw4VIi6g6VqjugqAFwW4N+mHEl9Fp+ZK0M5eTATSbR+9LTca+AABadxDpYF8GHDjMGM4OXBS576VVFEtwmgsFpKmnbqfYb8pg5HI93Vnao4xMdSVy+9vsFHWOdRSA65bV9erWnSXOTAoqMsPVZsIsEM71KJpX1+8nm3PndM1MKqzv/tBFLLPoTo2FfQoY3hSG5sebr1l59D2k1fLBgIB1bV9shbO8vDNWX0GElmwDCivyziagmGhbDf768fywLdZm0r503yOfq73txxoUUVJ0zO0YiDNSY3zyQ0mm1AlbsClaHoqMo+EC1i0UY/sT1cg5vKY/qiSz71npepktFr7rKjACZ/eZU+RBbzB9lmPW9yI0+kfinSSRczjc+5lz39Q8TxB6oSiGFIYJ/Wvgdw6j9e1Rr6uP1wz3lyC0Rzw2reBQhOQiG3+upU9NvpGM/CsCFgraVoq4DwarWqItu2s/ga1MFQRBFjx8WVaBfIBfEabOLcUmRXPYGpnHdkV0qTnGYfNGeDzJTpbQxycEGmiyVFv1C9Y6zAWuuR6ALToxGJfbmtF7H0CzjKp+kEOqT9ImKzvq4AnyGLs45g7dRFXI7bHWEQpW1KMYGnu9NKTTrXiy0HvMhfWaR0XyfGD9zNVEh4krscUsXTfYOTR6Nf3aYTRiqDIME1w8rjLtICZgBY7h8J4tKSyAf3+fGeN8Axab5pB1NPW0qpkdEsLDaARxHrEhU1k35kLSuwK7gP5eub1dmg/iLwAfyqBQ/8QOK+5inoHHmQqp0t7ycvuVEMml6GrgA==';const _IH='ec1b52231e951335a7f993d7499a7190eb881a2f0c2757c4f3f28ed3bd63851c';let _src;

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
