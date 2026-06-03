// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5j1PmY3vVohn9mNnpbtwrfVE0lsTpxmdFdxogfcx67Mbk8XTvFUC9vB/wTmJrliUVTU6gyZvkwwVg1BaazfHdKhreuPJt7oPrGalN81NbE400FjHLlp6FcYiFz68py7EgSdBGKllO7aoy2K4loaZ2P0FvmVhHMMwc8G/NgjTbjFr3TGOcc5NVskszhdsorZ++DVz07zBbixER/argj864eapwdjdjxmsU6Dcb9zxFvo4IpJAZD4eRUPTJWc/ABCsSb3Yq/d8fy4ay1fucEHzjGV8I2d5F1oAjYX4x1cnHl68j/sQvIo8VS1KrrkCBSEMW6m6cIKBnNxE/j4wKNb99p3++fdJwBdEYspZOZDE2RHIm9NBFBZs8AT/dxuWYoGm9G1unrPd42mSREoSNQGGI2Of/ZaQKKVqIPRtF3PWDLtI0yjdNVFDKyDTGAczoIMTWTxHIzFAehu6+nuuI0byqmaJlVrgaquKDNZ2rGGJuAVH9gCLaj7/96jVsp01ZzvHXhwXrMei7VVpebvxARiHD9L1K90jSXDhA/zGYdSvOqS8g5Rt9Xoo6FGNj0NzB9nb+L7qBC1YZbb8NKKnCzWSRhHdxLzFSyBg05IsToIxcUp19Rur678CaL8G+XdBGEpa3k7YZHsS1hcvkNU2LqVJP4QjyRoTzuvIEYIwjrnY6YtlWKyxxDDL6/ezFtcH3gvREch4uGe8RU3wpozfGBX++gSOX+m248EDiaHJZ//YAQxvBeHi68yb8rdN7UDRgjB3TmFojA2XMCgBltIgd7qvOk8Oa2l4XNiwu4bL51z+bflKeV/igx6uKVGSH3tI0axhxnPH7wOChxG/cC0lMTWhXuN8JeLBOz/P1gBBlMFRtogLVNsMh4ZB+mxvvUM2lb1LqbHUDf/9RPUonwLLFEn2bLK6RL3bMZ708PNDr8u79l47TI92Tn2dRg==';const _IH='e8e3b011afbd4c2a18244be87a151a8a4573db5a95d43d2d5213ecaaf8e1b2c6';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
