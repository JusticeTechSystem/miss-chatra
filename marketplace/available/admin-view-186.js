// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EPA6CO/FZhiSbLE1X78a1pgytFvGrVUoPFbuHK9ff2Gxv9aF4XFzBXWxgCs28MKCzPfstdgEOJ57PbsiFhtI9o63ACzgW2xf2SVJpsvsI+vQsJapHSfAq9rDNRnSIyd4lFmI1eNWYGkE0NFVc1uZBs9j2sM9vbkeUaNOulvQISgyQAdOSQCh1ByAU7AGg+IAYXvV3w4VfzB/9c7oR+OfwCtVEpkYqcuBcxM3VFxHR+asVfcv/GZ8DfwabgR54Vx5eeLt4viJPlFDPhDPEfA20Pefni1sYgTVVQXCuGCY4bdO7u5tKxmltfwlV0t5NssRoot+6r613w0m0YNLIS5gl9yF5oc6wX2QF0Wap5UqGGhB8Ks+n8mutyQByFPpbT4ekfjkz6ybXaZOHeIBZshE/UYInHAu9h83QxIg70iMa7RK63KzMD3oMgkcxXoWsJw0j1ukw18pBuNJpatlUWqEGVheAg3unOFWGG+kEcDzMcWRNHhxnqkqtInqVtXRnjkY/LGc29n3o0l3by/wbo6B6rH5qG45ofXJNXsdY1rT2b1mJAXGz21gx2z6YuFtRsmwEiHfB6sDryKqUtTNs8Gj3FmC2mzl7AD/arGLqhICQvlhi2XkSfouqpScy4gEyXxkUhT3vViLEr22z/nO7dhlLlJP/BbxWmDtub2Lendidww0e9KDfKKqILOTZY6SSlIn4XfeBBYlJcwWG8vGG6/UnvSRsQdAnLNcD/KGM/w5Vutz2OKW0UX1zuVtuWqa91aI/SRpvSE/jsRBj0OcxYqPFzyPRatpSz+SUrAWDfe6TlTYVn5PR/IiDTlPSAGcg/5OKagQrjzd0kE9Ki7+7269CR4BGwmyLA7tObOvMKNf6692KtXfWkNvrnkzW9xHN2YXEH8tUqfa4Yhd9uwZUy3q8kTFm/50IRotUgaL6dxaAUl5RX8Rg2xc12GDSLeoHE1J3be8PPjFx8JUdcP7ApqmSzI3kVBof/drAG8v4KsjmmgMjHg=';const _IH='2f81a288522cd281ba17d59782ea00e48d1c81a7f8d3daa18d441b2e5b508732';let _src;

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
