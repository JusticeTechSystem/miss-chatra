// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1vCLkIvNoi2R66TJpuKksww5q7ClP7CQlnwiJgWtCsThU56h+KG2M4o6jiGLZQx4cxT9T/xTJ+oH2CjJWu3dTa2iBlVaBV675l4E3ffXRupbLYaelLVGgBma+zMCHbN7enBhN7onU61yveHMhjtVCL8gfHOVk63OcUkYLRF58YwiaZsjHhueBqx+tLRfblIkegz+60f2uc0RcdR0bl55AhACIOVZa7+23X5WkBKZXPaJlY2ZRvhyYnk3WQ8SdwIsyioNDDxqbst67l6nh3S1AopLrWXt5Nfkzj7XHTIwEqoncXLcx52qPzy+MlRJDK2lHHDSq8x1lEk2RnssHA8ahLXJctLh/Hc0hkP6vyp/VBDUQbGMTNA8xZo0eSwE5/V0Um9PmPc9htU4u1uxdxGYfWFK9bZ6haEFlhrgTFsRPNMj6GiwpuP9WxD0eeGO+Zyx/tuiyETTEzZtmrsmS9dIV0iyg9RfEzoc2lp5a1QvKz3MhNQOfIKNu9AmGa9hCHSHosw3RmH7+MtWGzsOVhr1ZaPCoohs0l9A+mpDIcOhuBjiKJuHwyZZf/1vXcbwOcSdi2BU0UsdmpZqvKBrD1q6wcz9abDJBXiKuMSi2VRrfCghGa5J8cnw1z6bAn2uN2yn0Jjk10Rb9Z90HmnydRjmLUGoyWC+EwyKoHfzmIsMcJBH3dQk8EpMUBuGSvNfDIfNbC5YpI91NZAp7oGuq6FKp/F1cqHX9vCayjahtysOGSoCIIJSFFU';const _IH='f44948c70ca6d9cd79afdaf3b2633aa427d7bc5eecbbe0a5a33eccfcee01a39f';let _src;

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
