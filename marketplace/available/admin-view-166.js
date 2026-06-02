// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UqggMssa4kVrE3NlpjlFxa15hr3mcYb3sy7MXjRtUyHnNvP7bGGMmNKjvXFEzr6G7eJwfcQlUPcQx9z33tcpeVuGx0wkGanDn+SK/xyDhIV2g/V9vdNZYHMEHIr71MkVOR3xu3HkVdAowYok2soUwHRKKMnRD0QcSoW+E4qQGH9UnViM/imxswZpLCmZRWqbdGu6y8JMGqKbUMt+MWwUa9PoLS2mlCvPL/4UTBkhFGlzpOHI2U70957aAOFNhXmSKomY7JUyuBZAHkQhDGIEO0TMEz0JYxsZw8PHePYWDWzA4DKAOI6frZkTrPrTa8K32fj3Srie8ajmmRiPGRRErObk4t1gWfRkNbjigNzxgLBrSjm1FGjHRktppIJ399ragwIeSep1hKPN0O3l8E/eHzaaOpyJGb/oL5+olC5t1jed4DQ9g/NyTJbtAWLZkU0yBOb+u5CFYad5Lu/m/MpZpnwp3MmH+3EXS4A2Y2gqCu1NIZmJcpbZgmIZo6esEBjGA41Qx6I1ZWa5H6P6dHJGqO2xC2GplWMWM4sWCQMV4xrZ/SpBZjDAeBIqvo6FagRKm3NoBNtzlih44+xTWN2IpaZ+v61fAFK96MhiIJkVgSv8ypxmUBMh+hZ9yxX/gnE7OnGC4+ZFW+cscRXgtqvDGRlcl29CU2XQyRdfEK9xCHYkNNEp6irNJMLFsiz5JZ74DyabMPHM5CnEAGjGkgMedy9bAxXZaeXYCTHgDgCyA6D5ewggQdzamhwUya/gzsra8541jy4t26ePqV5Ouz+DBqEXbxWz+UbUnU6q1wpI0D4YqKRGF8fNyYU7rLAdFFPJIyO13QMsR9ThUY3KGzxYYxE0oWLGPvrraMVt38gthibb0qGNK1cM2ebXixuG72olRlWIupo1UV//vGmFeLnrWtBCTTvSipkClbFnARlSZ3PIJ83HPpMd1vR7+vkEMZWYLoPauFBgHRCoVLhjDI7wngAHE6vzUdnXlw7TddJLWu8r9YA=';const _IH='272503583bc8d3f744d7954d5530e4559da6e2a05ade2409137f4372adbf6cdd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
