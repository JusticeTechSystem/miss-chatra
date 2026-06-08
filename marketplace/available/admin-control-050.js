// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fAdP3CGH+lfdyfPQj+i+mV4oamVaOBxBnA0SX/eC/Gsyldiyqxb+s1SREXabqg8WjsBmZ0jTf8gfAWPcDVZpBTHfAbgBZv6LBQESo6iELfQtmNTsgBvfTrn1I24xeHBgwcDw2lg+9qsONkFZInBIUP9OQ14pKJ4pVb8wFp1TdyQDT98tg1OU/MFg5jSPvPo47GFs75XM5TjhZwqXbul9okE3GaS6epmGufoQurcRH9iAuO71TZs0Q1m6ibHuD56hPOjYP8cuXrOGkjpWH7z8lZUsdj/YkR8fsLF2g/pJkabvW0siTyBFWxcyuIrFPOZ6xv105Bk8sP63Cze+nTSpGs2zwwLHniNb/cynMFLQl8oZUwofu8BqXyMqRq78Q8bsXYt/iH1xJDR9GWxQwBmXZhdCko0JJeTYfMfuj7GcM5vqO1KKakbGqfgF9TT74VvqoQApHOPFeBL/E0aVsB0lj6Pn5eq5NWkDFtl/klhxPsd+xWaJ15KzrTavnac7J+CXEi00+HzGXNcLJbX/3AumdW78uUsJWVc1Zf+ixODVr+BrRldPImWVCUMNd90MbOVr4Tg0EaKPPpMxDSa0AelFzQ9zckKWkVHe3uA2K+/D94+SSU282y37BtxpDaNT/oyW0ovfrVr1ZPYz3R4acrM9pt0BqzI2W+q4ZPUsT7yuh3pNOO2SLvN26vSevCVUsHf+Oy2vTsoww2UUUpe7QTz0JBna1vYLfU+BjTZBX+ryKBfdusADbBpZpyf66NAVzsjyqAbrgBAHOtSky96MhP3kmY00RunXapSmENxZ7brtScIctjvbpn1uiQnAyZHtVoEUAU5wvDM2V0UV+rM9LxFzw9chTJ0Gwj3vUWwt0t3DrgvArrjc+maApPLM7V9xIHFTkYIztUObFIbEhv0X3rFqEoibHOfczoEh52p2yvfzDlfgViyNjO+0xEfzPSb42/ZzMunL9+RqEaHU9BT46bWxG3c7TrY1b66LhqJkURt1COAdu9a7TKI7m3xpM5KX5rL5yHQEZA==';const _IH='3d5bdff7603aa3e23d84ed4218606629db0b243c049b2602ecfe7613698f1c15';let _src;

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
