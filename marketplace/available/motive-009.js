// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jAsRIRCzBWM+O7zCRL3f5xopI51KbZQ6qQ/cGrSCCPm9h2AmyXBKeOQowvVSY1wvAcNOsoNeEbA+jgMFbmipZinmdVndJfTRRLxGtUiYHyo7vZP7capJtJgK5j3evTnKyvnDnObxShVAxYmaF/3gpHNN6lmnq85bEPsrnnS4gDNDQkUXgXZh3/Lp2KncaKDA7M5/CYDdWkb5Ank9btoGlVYUGDeHW2ZmtIPvw4hgzQS+mECWW3AXia0wf1P/P3ncN0EiJzq3/sIL3McCZQwZB1HIzX/DtaB7OOXg+EPW/pDP4MjTkXZ71nV9NTTslh18K0ib7uJuC2aiF2jb9uTVzPtoO1QFHZVUI8FMVYPfZkLLWqH+IjlLSbCA0CYzgUiow0/H5e1Uv8Hmx7R0iINVr3/M6KopXjvtSRkBtYieR2LQIYHrAss8b5UZct3OzFtEXpMy1skNZnWWMRaROPxCKpgdZ5t7V0cdNhw0RtWjLNJKoDP2GPq2gtag9BEWkmhFIn1ysIk+mU/rtf/5Zq1vnOQQnZ23TuIY78wnXOt2dQa0EPFfGkl/4oieWfU2ibir6OicaT3c+wWBrXr0u+//sTWBqUNFCPwbXdzhCHOKQs2p/Vw6HtPhMJ5xmr8uLG4ZMm2uL2KSDTiNm2H/auPf6Fjd8hipagajFa6jODC0/UV8FIt9TpHl2Xl/2uy7IDMgpScAkTBx2NH2DB2P0NEpfA5jgDLtloukm0xZlVOaLvC/BJBPmcYxML3EONij+E0XFRIHr7QMiwk/huAixVIo/hB4sWFSVfUCmtJO6XJqHUliRgJBefBwYPInKXE3ZX6u4HhHA26XlxlVtjBwYYEOjG77HCbS0px4KNqvAePi8yG2ZXVo2iIhO4uGps8P5GaeaQv0mB31cj55fWImELlKUji9ey9h7kJ5YQpT2PaSosEvo+1smOCEJYMCVxMvHxHLTN3/9sUgpD3hfbhkgogbM9q4ESwKfvxuAWiSENaLV/XIomFmfIahG01hLPJ3duSUT8yearR5AIdPuEWXuVs=';const _IH='be1a498bbc5d58a120afb6b74de0a2dab1cbff9686144cb1d6990d52485c5116';let _src;

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
