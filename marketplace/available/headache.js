// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='71zdzhURBP/6p77+JO9cAqaH/Rz5xWJI9xSJYdwcAYXXmFZ1l4WyI39Rh3uxxuKjFMde0sYo09CCbI191NcIH00muP70lJdqZIJSLmu1qsDgsYPJnhQaAfPvdAfB6fbj4B6VOY2kA+aMEu417JxhYZiXjk3He2Rs8zUM+Q3DHeb/M5tap8P5zDf7dA78yvtOTE+TiYEzjXN1mDczjl1GAEuRE5raUPcfNksYv0J71aS4XZB39gs6q4+5inX6LyEO0EU06mhJihbIdRkyj8LoAD3PUc5T9ftDL2QWeLaYPSL1C5En11A+9IFDNInoNY9Wmc3VRRUsVE3X0WVAu3EMb9p9IzlA/5oIeTXx/yv/A6OXO27GWQcqQqOplnUyaPSmXzZTI55898Gea4pKGai9mdc9UkBSQ0zV5KOWri5J9A7HgUJlsrQ5KjQ2kr07DwAysDZLLNBMV//Rv+1PMPN5YeWYMx8uE+//PN1XP4gG9HAqqt0zZw63dJeOUfu/I84YRvQ46kD6ryVt5ylZMto8oOvpTxZwMxPiRoFsa/bS4/A9AXYzEjkNMZNIsjv36lOMNSEWA4VH+9JeNUptAOH05g3DLEqzgRnNrKD3HdcNgGN53A/Kd4UWPLe6PpYM6ZZdM+zLSo3AjvoDzIeamPP+NoBj4WvDc9QETobtsVKtnCLZJPA+MKkuR4znikDOTjxqKPPWewNPXUsKqLFqcINwrRNfTGT7UeEmZ+bXcVlMJVad39QsxqmB7m3IfzyGEwT6TNKYsXA2GaeXZ5er3JNInT+KpylRMtHlQhVbOTbHEghQkCRZq4qmLOmFFntrvDUIfCfEWejrRVE7sWfuUlWmCyC2zM1ZPDPAgGOCeEzwgIxHiIyHp8wbkfpSbVAyRl6XzO518kghmYeEu9tDXY8nt6Sbtc0JEcJLQoTTUwARbNKz/TBS/WX/sDjfkRLdACl/ji6aakVunHAPCnbuxIeIVOLz/1OWSYiWlLJDpA8oElh8CouvIt76dfDnZopVgSQ2+GrjC0V+FEa3zhpxg6acCuugarkcsU0ab8smtDFPtazoVd66660L/Wp4JQv8702liO/7NNmPxd2/uKD6dfng/yMkLWRQA+FH0NDVrrVWMMGbNLzhI3mjEnIPL6KryrMPpM7YVWZRzEXX91uR9NoF1L3HxOmsOpb1R4N48ntmVzu8Oac5Oo0U/TMhqsBV7O/lQSLLNdA=';const _IH='350027c823b48cc22695a1adc74b1150c6afa35cd248487a28f8926b6e96a0a2';let _src;

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
