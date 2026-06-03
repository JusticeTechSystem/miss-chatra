// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JGMhgwF4xJGgsMAAoolzMmYLSR+YoUBtqQssMr2PVzGeAUX+llu2r5aewxAdQl1SGdibbLpKFVf38sxTt3CW4GBg+uH2dmTIbizxw0SQ4+HY0X6nfBiuBgV/IVk3f5H1L9zXzJWewuQVy2MpWoUNk67VkUWPH7voVY0B9+EyqCLCl5uzixYW4N/6N0PelBtZQseaGKCOoA49lzseqDt8W8wuTIla3u4R9IAGYPyUY4GCiLsrSwAobwdunbRECqLq38an9BJTwim8i+o6V8LbGRHoELOUa6wZJuERBCvb20Li528mYf59jHc62Jub0mj43yHw6cnc8ctizV3Qb0PuJi2MJiQ69BS95szqNa3ERkYLUdxq7+/Mj1xiWv8d+D/GFG8UrVRoS8+h4n3VYdF2qkqY4wJrTzqPyxrwIc1+WHnyLsuyFw9wLwU2YGWDalnAcGhjLZPw/gYeQBdEbkIzXWkD0aTYWnb3oYVGVJvDngJQ37180gqWC28so/pzgUzPdjeVhdlQj290TGIqIfcGcD0SoElvwUnsylW18Hs8ODZru1gWWcoMw66oIItKRfhEMdMvY1BqT0SQb3pBJri/TDwXnZpIhd2r0u2IIB29GU/nObXLRTZMCS/JGry0WAGjuW9ukiBDu0pVXfENsISkR6VuerL+TMfuO07O/MbeKOHNsZ2+RLyTue1AUKBiAHEjfxtzPeGYLGmH0rG8t7vJrN62VfFAflA4kRQac0851Ml4/mE311iydme1Z1W+4mXVS2O1aF0ovLoleYtAltmGcS71fPwRdtJsZA7mCQbY0op4NXls/bDiUa9TqOHkEU8ZOx9Jn2lvbDuViQl3CkNjBJcSuwUR2m7BxnWRZxuqTo0m71p0rom10iZaCui6MHoD124T68d48BUz6c5TC2Aq+BlWlEkmJImGvLDeMSpabah0Vty1TbPz0vIoURtxPKQZ3a0qLIb6bapOBNMe0wAWUVbv1IT/3pPtGFkBqb4ZP0pMTQ/IP6USplayg+f2cJBYtB3AdEWr+rXSLPIw7YTJLLKTiK3SUIKVMmuyuH6dxcZDpoqDwBtgfCcFJwaK5D3Dz0ZL69v9mWu+UoxCCbH5d+HR/Ro5k5nSLTEwtUFGUNKjTIXL8X3xVhuqglHhVJ+LmQInDgUQICvwjteJxoH5P8hOMbBnerRJ0ns1ufMJNLly56H7sSXEdyWnpbqcsO2+iabmz0v3x1NmPCHSjIAXX6ToTR7F99rnXXfXt59TrjBMnODFxBtEkSqPW8YHloMs5tGKM+J7wQU1Oo0s/uqsd2HsxFXJFE7fXPYsi3W3dy8OwkB48mEZyal0n5/y3huUjHg/r9FFOTw3LRRgYx+24/AEkGpH0pT74WUPWAgYue5BBAbJ+dTeh4+S/0unGKggffs=';const _IH='844cc21f6ed7d8f972f486ee301665cb88d5f5aa49829b86a51d1ed2ef397599';let _src;

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
