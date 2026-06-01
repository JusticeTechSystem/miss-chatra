// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5uKQp93iwr6vR/oq+x16jVOMrGjIHXopyHlibih40arSnuLOobQADZrRyS0K0EUp3BwgdTMUQ/PvWpU1rEi7VbGn0TqY5R/M84xyevcSnQcYKx0NF675/U6Mn2Nb1Qpp0JjE4YcFwBIxn6NsRtuRx3ZbBjKa952A+lSd7nDa9kitv/7v1l5TY0+4i3AdfSMLHmXt/HMe1v7g7EIqtU1gxZKb/YKXbQfyYYFW0R9Usfyp3CWShka+c5xr2oPwBWxw1xJreUSnsu6yoV4OHGr4g89BlNtA7zcwx8yB+U4x+JWTntcbT+VGDDkGNXl/9bmw69AsPQq5wbZjMOVLxpxVnQduRPDrrTHfNz6mlEA8rErxrVFFdb4onGtGgy4qD8rbe5RCwq9ADm3/Ln9frpKVSzHSYHotVuphaM8o3yeylDswP+yJ/rNbC7X6+02ELXtV8JT1lRid+sN2ssLfK6Ly5s3xh9QNG+RYyf5p8Tn3QB/aUD2pgA0OjrHrSzfKe3PbJ6py5cEkp1EFqNUUhIMHOLmh4NHl9fcMgUhdzzH4Jr84T+g+mA8irIbg+VNi7N/zEc8QwuVm5rUMwEPIGqf8EOUXnWZ1vC5Q6rF59925V1oDbo50bSGxxQ3BtRzqiHUhWwdI3QonDlODc5NXfRPeePMVyAXEzpyE5bpKAn8t2FN61jtJrZq+RdNzWkGu8nlae7m/4TyhwrrLmZBUOtqlfuUmSx76+qyyo9r0f2kqjmTHO5Zo7IW';const _IH='fe5e898c6aa135feb420aa76b21f9c6d59f19e6fdcd178c9b652de26a91fc686';let _src;

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
