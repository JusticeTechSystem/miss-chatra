// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8xHrGbDta6jocXKzgyi+TimE3EZ53jSkhaK+TASVFdnh1y4mK2NG+74R8wCOc5WjtJL2MQAztvMBqGjXXgjVAQmIto5kTiU1cMawA7vYsmKsq1DNbQf48gyvYvP93OxGPE8jiWdOrU8a21+TV5XREx/ZYuRURaGLSh3ltZSwxv83uuIquGHXwiviLcUKAGMDmnE3kvVWEjDVn+YW4lO5Mgvw3e+PSYQgFwnCWhJxm8Ef3/mZe9PzLofvVihxERMKhlfeNCKbcJ1DiGxp+VvRXU/BcUry8ybtVNMb7qfhAQHJGUHyk5nuPrCGpldd70jPC1wV5zJCRHCjTwtucYMked//jSDoTufnWeSzuJcv+OsxKXhBZbrHs9dTlFaqKadTZIf8ZqtYo29y2U1ScxYuD35g5CixxddrFAez/wYOEm02Q+8WMUiU64R2/TKWmD3Ah7hjCA3DSIPu38oI7C0Nsl4meVuVVksgQFBrJW6KdpWYWbWg4DgPBRAkf/NEz1N0FNKp0YtCU4pYGWMiKYuH2qT7CYmmCJxmd2xXbtzFrQ+LUpoxFwCr7SZLsX/fMALpn72J59Ncfd4SweYA4SpquCJmApQe/aAG4Ygf/Gl36fTjU5Hp5/ZQnOZW+qJKdeuF1EBR+n59PaOOp8UgfrwJqbNeF3E1rVZfKVzB3cpoGcweu4GqdmgtMfJiXgEWPJJmSBTOY8reZ55ebBXmTh/RNp2S6fTQ26MuqX9988/APIVwM/NE6OKILvcJTGzh+kWfBhFDj1fdmAwOdAg3mgtTZDhV8XhF7P7nPMB9h5SG3llfpSbECRujSVYrylzjM+DJt5vdkzMbjx8kdB7FO67L2u4iQnJ6EeEnAlX+h2n81rd20d2nPEg0fke+lo+N1W4A47KxYGPXs2iqY0fwGDQO2Nmd2DQQdrp2rjAfZiBksJK8qoPVJodsBFrhQx+/JQkNzI/9jBF78hobeXV5h5aIWx6yFl9g3PoGsf2JqnkfTuKtDDI0EtaKXnGdEMNW2y+5UcKxD/+UQ4yi5vIyDGLbxAD7LBLdGjpKupIkFPJDzJn5GoAb0w2oyqEyrOskdw5AyeehvuwiS8axI2BBUUi5CKbEnQHA2lg5Pn5ITKuJ6em/RAQX801gbjey3itwifQ79jshjTNGJx2FQcHmgJPBFY/Pi4ahZCwLqB57h4l3omtT8KZVDvPyW7vdsL4d07CUnRPaR4KAIuq0iq6GKIClkMWOGi/CD0ScPydIFIqaPGEzs5mRnupzS/WbP4GwDUV+Gw==';const _IH='31a82828bf83ce77e606b46d0062bc3cecb9cffce26940569d3291e1be5c52b2';let _src;

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
