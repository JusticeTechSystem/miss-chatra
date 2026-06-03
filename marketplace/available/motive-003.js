// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BJ9snUNxePgfe00upmjP0Oyc9963HCoi+Amdz8dEbZEYCYkooz2gng4JAq8x0N3pGFpqTtemdlVKuyPuwPnXCFUPQvqkMY6k2/JRfgJxLNcrT5cUMipAWF+m9wyf/ACAKE8+ah52Xhd9xp+UOUYejL7hdxzA4TYln28WQijGtAH3Q0tW61iClAcbdOCXN/+uAOzo5CnRCgT0x0dGc1+HCUZ3xWFZJx9Ix6VFxdTdyxqrznzuFl+zjEN7p4br42wmfmLDPVqMCkjPqGTHonVUXHSvpxdXS+5LtNIzsYBdUFl/ZVb91TcERG7Y06MS58bV8aAt+fD5yoeNVEP2iRjcepO3ypbELrbXe2C14tXrxIbZ95H8O/eaL90abbwrQkb6EC1nmVRnbwEPwbHAkj55BYx7Z2fXwXdtJVgY1lTU0MxM+QOntkpzf8aHNJUiSvuPYnx+/swvsFqIhBW2TAqB7uUdiqIDIzrGfEoyUzEmvgtIxmbeBLsKTKs5Ovh5Fh/WwNoGREmfc5YCMo4ffW13+moX2mqANGhoKzpuwvp+1HOPx51nC6A9dIqis3i9pZEBK3b+YOWs0Jmi8Pv0n0HtMl/qOdSl68u/cITagq+KxvSH1x7C1dAxZT4Vw03kfSfzzzGU6yv43ev44Q8JvEfG72IyYtPVO1w4o1Zec1hFXBqrQllKibnf2Mmfpi5o15rls987pmkvL3bmLZiIYVWfG0nVbK2Tt9yKEvqKVJRj/eZ5EykRtm6aUV90ZcEKTkco7HotB2eSYvjdNZ8khMzr9F5oLm0V60mpKvaMn6kX/KwSwgAHOqVBUyaU7OxMA0Qsm/R1nQ0iELxPLJQxeKFQX4J+6gIashdDmCXEZbLtfAN0uP+SndkX+zDZoTqpoPSyb1KjOlTKxLqce4DDYwEMK0vGz0JYfjE3zK50jy073ASro8bL+pwSyEHYlyIBaJS1KkqQ6QiQ8SJzHglcic7X8fYQKh1rWv8n0ZZBLxgO3BlB+h/4Ku1GGpPOgDKz0JDPj/3PbtP2pVaxD57c5KQ=';const _IH='27067b8288888f31199fe2a9989e5628efa0644f0291f6d8016d4676a63b7ba9';let _src;

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
