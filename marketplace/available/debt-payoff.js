// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HQxS8Jgb54TB2AGAOdnAeMx/VziRvfMbPMgg9sDC0qF/9mFAESenUExs92LDoEqgGoNSTWJ1va5/u95ZGMOwnHp/fHgFVy9/qvFB5HZ/P0ay6qOjA/Ujrz58m5tTejef3A6cP3g2G3X+BkjCYPLv2AcxqjfvvTI2LEYGyp5zZQR50JRbrlr1KzJ8e+OnDgkOyPppJEwmyXo/WKB1rAziItggwMB87RS/ntVG+3Q/tyKE0XnX2nAk3oEOG9UBo1+uSJBK8MlqTnZRigcpDa9qxYndOqrpLX+B02wyI68vDJ2wIj7f/z0xoo3te48OxuCWqNkpYDzQJpJjlFlwrU0NmLKfG6ERiZE+vMI11vtLbBCuEZcVgGyD0y9b04fZRfNyq00dx1QDM4eeDbNxD4phEveMkCrtArmFSHUgR7gyoAC/roQ2eCty4KXV+CY/VedzFhww6c0tY1T2aDRHI8IuYSsJk9t4tC3aDMfueDNDnUGNuLPDJkomqKDZQPjl0ped3pwZa+mSBLaE1lPjXs7Dc0PalkxZt3kJDZSNc2OkDsLmgxFjWdT4as6JrSQa8eX0h/qghdqprMOnNUI+NSmD6dAtsMEEkbGVaYLOe2H2Gcss/TM/qgeHfCbIxwz0JtGC0K3htKVCtebRU4vZ1EFAFYYMui2Lr7/C79gm5uUBF/6zvaswBIQSmm9HV4Y4VW68PvFe9GAVGke1YC3pRfHWw5uooHoC5LDik6PSJwoxQIV3rVywg/20+aKp/EgeK2VwjX0Fy3BFx0/cbz7hsMz9SUBANIIRNHNhKxePUgTr1qr9OQGRIqFjRS2/wh1SAY5VibqXlvtqp3eRqei8/sOgg4FdjYq/WPJh8LpN3aK+DTqOrsTVWFSGBCpzCB7e0w41URvAo7J8lQRGCAoTZ4BuObL+fjjOJlxUmC8W1Gz1j+zG+44moNiWMSth8imbAdusLZTzU4J6bf+wMdr3b2jCM8F94ONQUk+YN5Ys+ve7if73jn7dE+Pp90x0w6uQTVuwHwqe1zzvRT1OkNvdBuBsF77e10QjCVTpaIkaH/bq7ZY5ml0DjtPAs1oEcld8wVfYm9zMlNEPLzXm6qye50C/vjTjg3DUeVkS/C3L5S3B9Aq1Jl4nlYQRrcD2ghSdmU8Ua5qhFbanftzHafeXBPR/TL17BtGS/t7Vn9I/aCIrVtJzOcyrIlEAgKEFFLlgOK8091A+JtoxEIz2Zyc9a+a3uOZ9sYgq2+x+ybYGPkOKpp49vntG+UTN4V2+O9iKC+y/ENQ7MTbmbGqK7YyJpSYNU8MPzdK/+2mb6VOubKVzuczoRIh4pJPxNa0QlFbHg9ei3q8deJf1cBD1DRTMLjTxaTVF0foVyiGmsHVyiucRTnjCegctT9mXY59nteDL0mmq8n0rt8RiTePcLuCliIt6vLh9X4lzz8f+HFgmUtEs/0E5isGd63Et3JAXhZtkhyO4qH1753XFQRiO2ImwJK1MyFYPI1IGfKNR52QVtK6fvLRTYx0bWGGQ7VHj38WfqMnxqrXe9dnA3YTd6NGrTUzDtAKEcmdabfH+JRLwyHyk9QpRfsaccjL2NLpYlv4KQ6491NiWWjxs9mQPiXhspxf29i4H';const _IH='6b5c55b5b12b843c0d044b2a20a99e40ee7b61487c322007e32e62aa3c49affd';let _src;

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
