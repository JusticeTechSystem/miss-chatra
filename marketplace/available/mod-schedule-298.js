// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5PAWkr+0ia3SLBJ7xP59KeEKUv0hC+9eDNyoN/nxfj2Xz7qOp51IrZlfXtCtuNA+NJB0T5j0bghPGw7f98iCno6rKyv1HJSszzhBnYiG6lbOELx8gQAU30NtSCjuZk044UIKamUyEoXzk82big15rRKUVAKgFWBsIoz4o8W/BiL8kBfw3YZ8aFkSOwGQgvXi61qu8yr9VBBRJLJnX1eUo29ExOg9rTuO3ducj32R51x5CK68mn8rw0MHhM4+XI19PP+0Qtift24lifniKAYQwGkQ5ehccFjjOlpQCMsNx4Mjtdv9QKACU3j86PYcUzT+gGiz9SaX0batXDpfavJuZnVyHOXb1RgXmTnYzm14pEP210icQh5Q6hru8ZEyvjUSYDTCXIbOqkSZjypAenGg+Ry8fY88xBtEIUH/gcC49BPdtVl9lZ+v8ptODpUC/pYhImhijshHuEjOwYgxAkelI7idEEyXpyHk2MbDWXGs2z7evTG08zkg4SDVaz807DiPPvZ5YD3hP20yOU/oymFJJdToqSDUUsR40UqicMXK2wSFPMztL0TtS9R7J+FcmzZdQVUNT0xtLuaMABg20Gmi9QYXr7eDL0YzUZXwksFZrHeLH1wQO15uhGL4t4ruSkrB536Pqs8woICUn0cmgQ79QAAiy9mg7yjvVSteBVnvJCbwpkOCy0AFmLHnpsIjYDmZZA2m+ypblNv0MpcYnPqSefxvIg6L6j4UUkmcZQIKs42bYodUTJ9J149HfjlLq7g0HjKpjj5pPr+5Ia9V0B5i+uPnSq1tW9SRPLsx+kbcpxoUZuvSWHhKMFg0WRlmCoDGv+VeDuYEYPKOL+2QTIU3x5cO+tGS3bVUeQhPIAjphXgTKxhRNL+q7yfVDWkTHBywXlvmQFk3xNrTIzYDsDD5XyT/pzxgRW/F18hqoQcwzvJsFqyJYwRt/f0n0eCpMBmGOYq4jn9iHUa0qhwVDotF8mA6zJjScxFD1/1AMxFizsoXEkv0chukNbzCkr+xP05WZ38YXYiFh774zyUHuI13gPZsY2ayrXxlGcI2zd8uaUEv43iIyt8/Qn7yuaFyJA8oY7+2vXGKN9+rMa4h0ToVspuwh/ToCidHlXnCkzD07RyJJE5RL+O0zgDeIKYMvpm4m+UwzK19RUVy5yq5PzgG77Qa7f64uf+ZW/aS258EM7K0ZhdpP/bRhb8Tp1qbEkR9h8tTA8MzF03UcJsda1GuWWdsjDRq8Dqy8TifhebDX03Rep1mqRaE6qzc/gtQ5+XS6NHb5I4H8cfjaT2T82OYJXRpmzg9uru2DxEj8o6MgpYpMM8mID/ntfoCaY56wLVLwAV+Ny6Pg4hbQQmafjo0JQgHMfUzX3MwbjdLiDHS/Bvqvaqn+D/OQsgrG5BS/5/4ZeWdr/2/w4nB++rN';const _IH='40813abddef67cd1e57caf21101aa42181c3e583062688e54cbe429e309d8aaf';let _src;

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
