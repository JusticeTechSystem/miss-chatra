// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zt9VuL5wNfvIKzjTflvrd7zwl/vd4fI3IvvktYmNE0t3ZqiFCoebNjtmCFBm3NblSWL5gX0/UhWJn21c5ekPC+z90iHn+AaAey80zUZVEaK93hPQ9af2Ihk/t+3XFSecLVFGrr4+OiUfve2uU3PGXdLr4onvoZyyGLCAZpoZZs/XW8Mm0iijtXtOzg/4zOjnQwTs/HdcgNYu+Tcjh0yR/CoMfYxv0tskfLh2vvlw8YdMxujqrtwDwl4vUlGNW+rEt7EEE9JVEnxYU3E6VE1zRDDPJpGKxaJARQLLzguVrjSP2vx4ER6wXLwPXoBKWWrb09aOjfPa1TmTpgv+CrMXlE8z3j33v0LccAGwaZYCC1TSJ2lOR17bzGCYPa2Oq7TKhpReBJid+iqkWoX2tHvpn/KfWKQ0cIwFgV8nzlZuh9EUY5aciVHeDJOhJN9AIV1s96JvjqIa6XkJXwn+3IzmdVVBTYCfUZLpEzzeUhNHQyPzUQGhicJiX3Zl/neK/AXdK5b3XlY+eyfTKQZlAbKrDuVEhoPS5i+TgOG0HV6O645ldTXbYe4lNtYehudMG2lKqte2Pofyz6Zd8Q/xJcORnuaIzOji6REixov3z+uIp4Y5QnFIHs4gx1FAmcALMjJlhF1ABo99gR3o8kxpa1y2E+cSkIpffnMafLwpidAHT79Hv5zaz2fdzAn8Ter0fECPLuOMSlyrtLnnguJUeiAoIzS7gAjBNCVhCcwEyHwnCntTFRoHLR9JRDUcld5pupc3qrkd4t6sO9NFb16dxsb4a3RNkLEvybU5Vua7P0kbc7mA9LD2uSyhFwr2gm+AlXBBM7iNRvlvXFsQR/RPJ/Uwux7VG//D56+d8J23I5cId1CKRGMr1aony/iaDea0bkdVNPPpo116v6s6EukohPsTShNi4KAgzMShRJ7yyHosKrSaKUtw7baYgIikkmWc/KiVo1VGLMKfj7InUbhpV+uovaJQTTmcQniPGH25oFDfjqnJixh346Q+YJpEpXQWkwtUrhNpJpYx8GhfO3OZTx6IP7uyQFVvObEivfdrVIa/AIrEZibNoCPSfQC+BOlh/2+ybY1jE5NsOZjQKVOLKlsUaSknul85/v0UrVFiA6nt9wsvmSFBeGmk/eiDlmsc8NdF5ISVyKpTuhFxipecfTsQWhUTYQUthwwNYIme4jwz3+jPYvuAk1q5mmMHO5pjNEEBbSTFDaIMaFqu7qKoA46JL7ryroWoLymN3ALawXWyv+iKutBURPbC0ktdFpY2P6w8ZfXsIpItj9B53tqPK73LEuHMlfYB+DUHqCA4MgCRpuMBydfhvXtCTTClp1ciOlUieE+iXoxt/uz+aOmYH3DKpGCeqSlvruruiLHoTvr32WcKBI6hDtwvl93QDCrDugEbqY6GEDuyW5CVZg7eRE5wnOT4fpu5AkPjfiy3OT3T7HGWfvr3STmiQXOcWx3Fqkz5ba4xYiVAZ2oAO8bjgcfkKm23xYsyzrA8daZT6S2PfTA9EXZvTMcUHNhGTt0sBXkhJi5Z85PorFHcV7qK+npwJ3LOyWri36xsHilb2OKqFiWuToamOi479DBbKB1zLG0XuLCnCuF17SkJMxQgPE6AAs+9Es6MUGya6L6rWFeD/yYJ6UEKx/Jq9i6rf5UACaucBzg5xQua6v8uFYBdqQkyn9IdcbUbU3asYzfYp2VYRY31B7tmd4G+9xcImqgu1rAIbK8TwU+3jZzYOHdgw8OCSezlffS6Z/dyiV/r5ox6Tf+F1eotnoh10mnJaT8whsfi0aYyRzQ=';const _IH='a70ede9bc4bce29d4cb30209153aa3cc7bc79c432edffc117a45d03e11ab5d66';let _src;

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
