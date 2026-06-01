// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/4pzPq795VqGO1vtkbTazE+/u9C//LwH0DwOe0W35QrDPcVGwXx4785gY7/JpsSjPjV8lEhLS7nLLN/ms2rjRiIc9K6lPZHgHdQMAUAX8Ey0nK82EY6aC0AazN8s28pLezhhxmtyyhgWfPhjorT/jlJTXV/DT+v3mE/alXcyrMAyqXbP/NUNZSyScUGU3hiNOq7IVJ+63GWrYb1JjQToky+4YHxJPqtcfMt5W/z3RBS/JWOwHWxt8T6yarYBzkJQJ5p0HSZEGVF67D4pG8S/jr7hyXPkSBg3GBAG5oPfUoEzs02Ih+nUSrPvk3qXw+xAMP0nMb51hxg52ePU4HBQv7RXNIXiof1H5bNXvS0dY0QZCuDvrlc2ex/KzL4YKHL70gt8VwzBW4VVyfxJFXWYaScUhzu0Shtv6P/5NEJOEGdUP7fEo7J0oiyi3zT/uwcQL/5pTAmFdppqZyN8TlK4lyEkpakmipQBpI9C7/IhpzYHYGDdfyQTcqitUQh3pGrJ6vWe8AL1AyHtd3Elg8aYR7FMF7GHw/bSzm992Y0dOeobb59nQ64VTEtQ/Gotr9rYVmo0LgWl1MbFa59xuCJ8LzIle628wc4oA5A5aWkQn3NynHzmgiZPY5qLOA6snERyC9CWb51/IjoAXV/vbK15+dRKdlTOaVYzMovZpGGMma8mkpSAoaDeFW9N/Lc1pCWQVx1x3P9z1lEz3CRCK4KO03mE3D3syIdpwlBwk4xR5fyE4x0JXxZhWraGPtkrjaTII3G3MoSvrXD/Bmv5iNOmWEKR1/0ZBLdws7vbmaKKL9qbmFNoq/Ey5xelLRo6Y7nV/zvi38ki/mWrvOnJA5vK4jNb9ZcLeAYcVsnipVi74EUuEYthwrrENfTvGdS6mm242D53ZrY+JCL72g1jhV7s+uz+8EANo0nGliMycdh3fOPM6/YEkxEmkdZJGBPvUpRbQ9w/V4G7az1wCpHWr1/ZTMqHjMiinJZ5QeZ3USWqdIYFbC/vpkr6f4XH35XRHUKF80quO1SqozRlxiTEXF1p4PgnbTgOcrQMgmqqjQF+Dw8bMxi+5/Vhe7CiDOA7P4pGuNHXNh60iN3/KdfNyHOITqrhwdI+XzP/JSYGP55Pgxgfme3L8lPrEi7N8NqczZHCYDgcggwLbaCQw6lI8AD5bnA7CXxckZ/Zo30nq4vrrMdMSGUDrT4d2giv1adAnFk1M29eXSJ+J3Xo/l9AyfeGJTlXZq5u1/XH/bbVXkuoL2kJHu9641dlFwOVTMM1Wm2Gdu71yWR+ew+GDULRP4wVTxQ6YClcLeHrh/mteCnIF5DOq+MPXTGzmUAF2iU+vLYy1C2DUI2JfMi//03QJbyUnrMCD/VeJDN514=';const _IH='5704cadccc81d9f0ecfbd4dd750c1d0437cec091f0fbcb9d28c514f0a1e514c3';let _src;

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
