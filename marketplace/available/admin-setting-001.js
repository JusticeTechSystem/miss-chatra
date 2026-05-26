// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ak9P5/q8au1zwv5RpER7X1pI6gVtQihRFO6Km0CQzVT3BcBtfC0RwrKAYGxMGIHnrSaLzRSWi9dc/DrU/w8sArElAsdMZiGoSnRho19gPBsICqY3jy0QI7Hhbg5L1yPWw/KWX5gsbJndjBdUCHCljzC9vucp7DW9uofEErZDPrG/LWQ/eqbsPLNGyQAi15Sd0P5B3rud3lw5zchpyUuLEVHp+/PWVPa8YMTjTrA0OvWMw7GwyyNO5yLi0Pe27oeljUPRP4Cj2ttAlrqAphtB7gz3omX7+M+4TRpnVkKOQlV7ukhGCXVFES9xrUZd2Mo1jhKtxmMXKH98Kb49780GNmZOnzBVusq5vfx90Qm+F8GPoiDLSXR+S/n0MacMmrwkeVKXZoHW4BcYJ4W4RXMkdIXucD9k9Js/kre7C7SEvGZcxDJ08gk4rkH1jWjUF9SVkPpiT9m73ZGyXsp48ytaOWR1aJ/ixxYoMQ7V2IgrFf8DxncTprFSdxxFEdK7PzUjGWrwvdSjz3oQ8D4BR4TQtCpz0h1i+gobvq43emP37RU5JC6IkGOPSmJBb+ZqEc0XfvLSnbAtriFDhx4gGlaQKs/i7k9IGsdVqfCnYb9x98sueSXPQafoujKCYMKWIUuYhD/IDwatl9gdzm6kzo9Ci4LFmubN4wqJZgzV8o08QwBRl9XYxd3vZREwUoEASk8XdsDbk5IUTOEY9OFXV1xSVcoX2/mDsmK5mXPhNhFmYMaKxNpfsPccOOJ9a20gFiyVOAJrIIA6kiLZ7P7YcIWiPl+WWxms912ZDRFcoDdHIf5fnYM+Ezb6C5P7x3H9qpbFHAT3DGeMjd63rCn9zGy9vfQoRU7PCx8iUdwnAshju5pY/YX+Q/zClzOpE1aTDzu044pylo8ujrFyCs/ViIXox9y5Tg/b3TJ6YjifvLFoWjoKUCRkWVfxJ+N6EpARLr0xOnzG9jrah6mMk29QcAS0g4u23W6HujnCQzaqN+wSzCju+F4a6zwbOzXIm4CRGdLY';const _IH='1de96460cbb5a4ce474f12aa407d8224699a743da03cd1c83e0647921c27dee5';let _src;

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
