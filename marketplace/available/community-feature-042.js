// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3Q1TebjbFIyGnQnvrTntvft+oMRzeXFAjfdE3LlSWijbWCc82SBvWxvYSHME03Vz8gmOSJaj2J3MXoPrilELNaluxaI8RAGX55WSCky8SpscEThbTa32tik4f2shdpZgnu3DV9rGr1hy2HkmnhjeMgXVhmxcDjp43Xs8rlLoY4UcjWV8yhmy8zorFAk8R1UxbVMG0+h1Atpp62HgtN5A5Q7GuyanAdhQ4PSJELml6pHoZyDDU+xTGjwusGM+81S3QoVmlDC8Ijoufv2TV7z1ZN9nj5AtGLLNFZJTWKzI6pcbYY5skYxH2nFMs3b/Il3kGdLoWwJXqW0v9ATeiG8Ss4guEnF+YnAeq0iB0JQGSaeDrFkpcxxsEt7Kiw7n/Jj9Ai3Hs1KgHnDa1VYuNxy5Kn/FBBey0rLqMDuDhleaRJsTd0dxSrugWNxaHV1YmxsK2IXlnGRQYzy/ItK9+n/p2b07QLj+5RclZ0NEal2+1ECh9KGHlkv+4Hj7snKUa/Z4tOZfnIK6PoRX9r9PFt/x3qRtL7gQQESdUzC9I02pv2DY5Kc2fyjIFWKPtHoDnOU078IZSRIVMXBEBSoJ7QzxNVpHQwNfiKSheH1dbx8LrOqfItp1gC1ROUeFtiXNeyb6SkqxB9w22L1iVLYs3Objvkwct4BsWbPRVY5EU0U0sD5WzVw+aHmZGUy2sxdOAogwwtxSu5WImdTMad7CTwv0iE2mclyooYQZIjRWUbTE6Q=';const _IH='315c4e0a655d44ad7d10f36b9044c003cb99f3ee7698d6510142427124eb0c32';let _src;

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
