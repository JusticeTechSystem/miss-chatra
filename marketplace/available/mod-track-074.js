// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyiYLpFKanM8DznMTdT6slNH2NCHDCH8qh83vzrd2UVRraGx3i8+FLKoVMGQM5WEbFnhltVQGeXXjNaWxgHcs14LbrK/Ysqv/vPp7t6hwtuMEL2YclT8z3Uvj9ZEAJ6oHzlUrcK9SrVpR+2U57MjwDhD2iOURLtBk2eHV7s0cwMEkTsrR6t3PWJm+BwffFCpHeqGkI6WaviAUB20NggOyWhq+GY9PELtu3eyyETV6YxuFOTFJMLPdvquInmNavq3Gmv8m3ZP+QQpC9wWpvQlH7LtUkdLnVGrZU0JOdCMMCNTOYiTOY/9gsKlcP8ijOxt1esp/3fQTbOqe5dmn7/5eTIJOJztOx2rcMuXUkbploG+Rn1mA0vj8M6tnqK1AG7Jw3o6wT+2unwkmikFeOTITRE+R7/9e49KRgtujzz1ewut9T1rebmJU5w60ZHqI+azcYdG++Fza7wnIIahE6gaRN0hldo7LBXWQHb1C+Ygp1UWADaZxD1iBRqoWqsN5XoB7cTzGqnsHDW9XjlXX0Lk3/AvMO0F68DG64utOWSYjIMZVB70t+hD33mzfrO4v0jl+10qWczu3yVDIyOBgpb/vXfv5VIC2g/al8GODi76/2HIbk260GPYs0m5zP0OvtvfWJFxjhyii+jHkOEaJJjQO/TFnQVTT46bMPVsIVt9aFGHjbnnW9NlkDC7w9U0HKG5klbgwXyU5M2L+pvdvnA8Wz0z6yKA6u0/aTxLyk1Mqs3eTgH1UjusTPPaj9MFuvyWH7lPy13oOvudfPBSbOnh/sYh5f4WtA37XBkT5skzu0bcU1occPpJzcA2KUNXVIuz1f3W08IKIFw0YXeT1xeMs9wS6lvHkDiINVpAzYjnTsDA10xOZ0Eij0wajZCzB6d6/b5BzkTD2pwVIPSUefsYTz2by6GnD6Inrm0eLu/ZeS9PvajA+RnMqTYZYBVzA3oKfzgrmwO7zydnIzwUY6GE0YaY4F5iHf909czk+HhZWo9fbMCOPXe4gsds3/AbkIssoYDMUjRTuPQ876rjwivli+hV4hT4Q6ZdET5vMUkFzSGHzDvrgb22tgqlLcVAMIG79vIfI1TdlappaFHosBUzsh4Ld7XaeYPnDEsEq+28owglaYXQEo/UUZjk2iod2thLux6Vftcd2ilCZwNtg+Xx82UqPUrIyz4TAOLOkDp6EEC9mf3sOKCtxitx8vb6pf33p5mdzV+ZxX1atSZ74JwM9zMb7MJyMGjuA8X9oLPNRKXh3VlVLTVfTcUw0wfvBO54YasiTDDL+1KjXjCYH5xKTN6vYIxvaGRRImj/l6TAlIMEBeo5o3d9w//H3+MgBCdoGLOoMSk/3bRzN3z9LFOiAq5Rh26J3inJsB0=';const _IH='09f8c97605f38bfacd4af0b3ba2820b708626aeed18d0c3d33b99de5fc5088d3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
