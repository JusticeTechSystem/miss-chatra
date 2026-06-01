// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9EiB7dSGB7AZLmXXKQCt6dOSMMkZ3zSrItIHbHGyh/zij4Uf0jcEU1fE/s4BF5Fj9+P4iEOxLNz69gxPgMyVLcYkZxUoieSCa/SpGDCr3+RBHZADFXgV2FVkcmyNI4qUAqcjGW6OHrLuQQv86Q8cMkMilT16K2PbQmFsdf3yxV2IolhOGyOZx6O8YaKzHCxiTmEOxSuWLSgeCvcXVU5InMP0JlTPzjZZ/wxRBnsfl0n/iuBH97XpVD0lzZFFFBJxU0Zrsx2XZ6vl3YcjsfiWFa0m8SE35acJFGJeYSuf2pOew09h+XXXfLZ9dOynSFBTGDRpcHd0Q41V2vQAArXlhrd2GtOoGFcrmSdK1EHehNdBOIztfYCshYT/FUt9uHFmG5/6fJZBXr5IcrrcoJIJ9XT/h6CdeOy2nEZ3h7xtCuwU+5xxBO0GZ578C9qoOPUwepWiVTwFmGCLy+pcZ1s9WHxk/4Tly8Ew1avNJz2acRnazCFkzNLDwlONVveBuF5u1hVH3wnxmexF/bIRQVZ0cEPaqHVArzkLFfG344hLLZi/EYUtTSKqITSV7Q0490FL4+A21ajTNQF9HDAc5r6rIlVKCduzg8TjWUG+LdmvW3qIs3sejsnbLF/A+eqP1DIAlscWTMcHCRE6ibaMCPa538iRaRmiJPxPP8wge9T1YUOZrGLGYwIqYJR6cBNXUJRz+vEhDUWiW/KIWZjm7NJm9lGx8EEHNYFj7GWkJkJu1gpIHnYJhWkpa/pWQquiKvugzFm8HcxXa/hAaBDP2idM3kMsHD8Tnsnp0eMLGyg6LL8XSzk3z2ieclsl1+7Lr9slE3irSHp3zr2ksJEjwOKryT+N0mOakZVgvTAr8h+uyJsAC2rVXIIWnpRUisQjsXuOI5uMk8vQnkqI4NH5Lp4mmQTlxe+dJLW3y0SHHjEAWHfh1RmVQvPrAIKgbnOch9KUgJonMP3qg1mZpEkezsANl+nN6F0dTUd7TOEhwaujBos5J1fprAfq6M8VPT94QJZUqef11CB29nvp+QwMsdfcnGgZUf7BroblkYImVGlT38hIrs=';const _IH='a8e2e6a2a96aebfc6fe7db08683a911472c2b5c85afc8781b941bdf5ce424b23';let _src;

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
