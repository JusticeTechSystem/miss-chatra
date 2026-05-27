// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XfV8Prc4mwog+jHMh8uWj2xWWg8FPCZaJH3AdvDcmJwElbTMZU1A21mg2N+6ad9UlnCx0SDkbg2aGVfMQR3s17m7upL/jjr6SZJ5IP/AsRYn3kEQZo0FFQbLtzPsFkAhiWIBF1O8RB8lp0rnsCAVCUhYpY/ExqG76aKyparGjvSojRSlY/A7nq4do65zbeZ/u5sKnuISKmdBfwcsoHKMeU/CyWSNqz6Dj77WH0pteAOmu2kMjcRNec9tR/MlYjj4VaHKnVL5awlg3QTCU2crMmDo7IpThgG/A30dJNplc2JE1kxQIbmn5aqFnPvegNu8uxmVBUH6NsdQ9j6Dkowm71rOhyq6amGtSdDIn+B1+o9xvWUG7xQavskxDduznkOMlCuoBe8PHWNg/bd0gBUYE+GowWakddLaUa052RN2gpCH4o0iQxcCfvQAT0/ly3bNgJLxPjaiE8CNlbH+A9bC8wybwf9iHojcroohk0ej8E3X/TrI7kpm597DQFAziwBocfGtQOBVJjM/cuqye9jCXkCad5F9UQLSnwZVC7+R5YUHSy/JPbbVllDutHBmI0/gE3l+HBICIpizK+8+RiLWLVi+II4Gj4tOK9ry9hPM0NGddsgjeYcXethAuxITIFRSdwZh0zLsCzoA47RTiWCFTb5KViOWvWp8N0Kr2n7lR8gJeYqB5SiBDv4uzdofmPhpBjXunwWQszFQCGlhtlHQMdASgkiL92ggzrwgCgq4sG3di9VFS/6iewuKd795139ceH6JiXKyzaYgcibgZrgIWLwbjLjsQdKRNzWoWMbZF36jYPOc0lPrKj9yRfdeO3pygmxJIOH/Gz237CptPMn9S6WwGzifHL64E+XJK/KWfVrmAdUvXvT4ojjU0RozT+bQjlLO3DN1B6wUf18GerY/I1g18ij0lGpoEYcrAqhqhIUD2KLK2oNzF72wRohJpVmsMaFHHVC+ieA+jRBEY59kdkn72/Vbahzi4tBOdAre08MNKihUp36hKWPh8v7Y0LQQBSU0+HGw/L4oAPuoWY3X6sFL+O8D8oMajQc4YpXZDUm854yeKfaYGgr8+FUmiiXA0e/c0e0Pscb4fMByFtgD5HT7ahPawKor7ZQw1OIwfNTzESfF+Cpsv655HKxXfWNy7DADycqyv86V5tEQA69Q2Xd93K7DsWt5OkY6fP9mcOeeVAtsIyJPiBYLFyjzxZFs+YuFlakVWfvM2I0IgaoLOT4JQKtpmFfuiDjlfWVG/rmD3rq/WeyeXHoKJlprXNRltrrJ4IFWMmzIUoAs9Dkn4Y1RvLpy43uXxnTqcZySV4hqMOTMuBVuLDCnG+3OAJR45ALBXWiNehp0jrfNPrC7ib38LD3taLOWQhZJki/e';const _IH='a87c5d062e16534002585c82c643dc88cb721605f14e9cc0be03e88f0e9990a1';let _src;

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
