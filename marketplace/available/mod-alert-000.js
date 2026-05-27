// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N0N9WfITSWasLWaRd5sXYLMUFli9n3OgpWTRcpvtYZUdV0OgDJ6iY/0KWan6/rUazm1tRDvj77hvtLjajcDS4ao8aOkFI2qtZxuyI/x/UeyIRAUyBL8jl/aM89DmpYNqfltiIDQsk/dT1mCakW/LJNnwHEsHpHTg9r++rpqM38ldoCRVrZ+09HwC/Nhowr/4G9rNZbeyVpGp3vkPk8Wt/epG6YtsB1Bj1+3FxV4+hxoOZoDtLIKSFQSaueZ0ME3YbzfcRmn0x2eY66y5eAn4MSRWTMrJaRU0Kxv/JPrrZZjHAhAddTmHyP4KmaLzsErxMMAgbJRxoWHOsZlyCiSxSl2+hR3LpPUTumO5qBMMwSdG70RX0ZG8ZvpfNxfSiQSwbBCoOqQ6f0FHPBttCiH3YnMPqKbfWPkvMsLBcMdhhjVRC90Zd88FXxJ2PwMhtsoHfA0aYwCHDtlR/qQSsjLvOufuSV1sk6vZHlJkdFQr/CUZMcTTmacfGaFHeQTinVUk8a1sbekNv9tWIaczpacZ5Ns4hxBioQztEiYwPcQ3hLSUvhZt3q8k966dBwXQ8htda+ol4+88S/khh4NYnX6uVtjoviN15fjnT268fWbw6c5zd8++bFMPagbuF1uFbHRgJ4YzU5GDdcaWfNYRRDdR6CNX8pKjB1dMR7C56s5+AdA2J0RGpB2o8EBTBc8b9YZj1QGMN4wMLVAwgY52K0yoSPfqmdObk/Aihfn/joo8HpOcQTynClDOh58vu/ZvmoL51jJ8P7T7O1q+mWEJbVnR5/VXid6L5mfL0cVX6q33qVBwC86hRsl5N8YnBbiV5iItDakYKughBdo5zRoD6mX5xoUqmjmw/2KgXa633vl5fUihTZQgeixSuGOa9qoXdGt7DtGIa/ZdemombizygbF/Q9FfYtyzWZwGXMhKdWVOQgwmurGXUTepWJFjvrWSBrJdR6QsOQlIfiQka9+3LvuOnXg1s2aah/4+craKuwA/72cm25NHizg5x3u05/5RCV1hUmapMDDSXQ/h1N8PYMNh3t/udOV7+YjXx1WJfe8lOnXDO3rdWj/h1mUYgdP4WuWXUCl7HTNE370b9BRolt5PrJxaLvC5yQkPNZLL5iRgA21wPFOW8EwO3/j68DZXgcRJ/zgotqfBr/xnhZQ2AGnamG9T8qQVhZC8XRnaF40YUbIe4ACUt+R2swGhYWjzYlWFdjwF7AApvi0KEcTr02tARBQcJP4sVP48fE0jgdXyCUnV2tPCFmKJK6c76K+Tw+nQ28nrbfkHK3BV14Vyneec5ymXDTCB/skR6s9fQ7rVHPxqCO+DuHp66x39vXaL8W6hp8r+Wf8ZWn6QudZxcMrB6L/2NkE=';const _IH='433df6d9ad8aa8b4ed26776243273a4f5c35aa6773f8ec91a80ef39b8b32b805';let _src;

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
