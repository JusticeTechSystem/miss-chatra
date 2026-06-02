// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/QxZG2g0e8IFq/vw8RtaIZlOtk986fxP9yQd07xAvTg26XbwRY+/+/VrgoYFjzCI5hTR9j4xyZPuhQObo5fRpKtw+TNZqrl2maO5LQHArInCXSf7NbDsfFS6X2xNEbv9w33+VJP3Ydsiye+rpMPGHoPk5ipoCu9qvacGW1W+aISXmGku/EuHiaT6l8miK5iztUoHy3llSiZltntfujwad5Iay+MBEwQ5972abxgXkZpyiWA3icWfEpplwEdLTvEr5fQyWyk919M6EZp/Pp/kNaiCGwfrRWChNq1iVhtCOq9IjF3ooXJPaxmTErHm0RlkLH2ToCAbd8deOx3GldKr2XTrUc4AI2wxFhWV0WN0UifLkOFRfWv60QcrAKrSZ67VC6aTF2kguDyIDLTwbDb4Cg0KJEHcOYjIQh1ii9TFkG++eeYrQb/fz6lgTGCwNeEKYv26wF0TIIOR9+yC2IXcj+DRDzcXUxLxN5O/Da/J914F4reTyEKhyd3rEqfCIvq+YJSp1Uo80w7sUFiRoW4hZfUTvMsad+BT6dzC2fQmHtCKiUJnJGmoc41YKI3dFyf13VoDqUFaE1MRyii2OQjQl5aQJO5zNfcZxxvmbTaOGCbU6NZ6IsBHboXf/BpMJVeX0qhsMDN72I7NC5WeI+jOgstIdr6AVesJnfqgyy1piHB6oRGXJ5qnOp2Y7wUmw2BIcGDAGqSi4rJhZopsebR08PeP2wiAfTpAyVxGLks9F/ftpWP3RsbtZVfrwyptZuCcs2Gp7Vajfa8JE5sfOm2SIWl0GYJ56NQKGPeYdS7l7oOrb3U5YJPh+mEzeuzfebOa1i4UnXTe1meLbRzSq1jqYYP/iAroSv9q559uv7mnzFUY8ukiTp4XOZS+z/193FnKXrLYDIJTWx7yOlFQ2rbrIWY4VYWD5/GWv2s0gZqA2/yYYXkNagJ8sDI16B8Y+WxquyVXYDC4FGVo1D8ZScfAO783OTaGNq0A2BVvvwYyq39RUzYYg+IZaWcBaLeAMQ2QB9yX76rJK1a7uy/jXNlVqFEIu4nmapmY/tsONTeLHfq3UBRsPxN9F8mDdEkVSEd7XziJyReQTuS/FvGVcSFSd2GrPRoIMl1SiikV2RPbmtf7ZojxxBYZnKJ5y16LviWMBGpQaOkrLdENrarbiXrfTMoaNy8IIkGH/g+ZoUmJko82XmrXa0erZbchwn2CJsf/ggKZRsLIk6Ag0oBUfZijKdv8HLAmzapcN2wLSIi3lWNLvkt5O6xnp4pGDk335nM3/kO1gfVEkqUYwmFSUQwXnbkquw1ZYBef9WwEs3hC6JaiJ0sRO2N6JJbGIvH2hJIqlLp0wut3JgNxgw==';const _IH='18c671e4864d070a1d1e7f3f6a8de7e6957093144267819c718d085409a01083';let _src;

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
