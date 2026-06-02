// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='goZuYVniF1vR2HVEkCSl8TZNNoNVnt+O8+5MukP2Yi63+FpSSGsdq81xOkxcdD4LM6OeGuA5/FGM09T/5R4lKCtf3bYP+o6s0YVU9xS126Vfco1J+f1y8Mj5sSoLdW+S6MWqtj0jxlIi5ouOBgwNz1fwcDh4CEb7VwTkbo6ZL2c0yjGCm/ruBw/D04/jJY+8qZ529CQRQ/yUt4ej7Dr0AQPgxBwbh0WADTzrOHg4vkV3hTvlAR0gN3J++0B0KGbt80kCPxiAwUoVvcOu3mOfUdpRBVrMHFEU6l1bMRn6L0gGB6U4wb5xK2PjWpu/UbJ7zukX8QIZJgaIqkZjpxTZIznEUI9BWmphlVi33DrKCA21YPQw4pbMnu3SBSEFTcZjKKK3+r6R6yowDZAKH8MTFyStI2AIZfCFnb1gPTVZhpzbnlPvQsbOisQm6/QfCUfr/0oVyjQlSOaevrzwJfP9gzBvxmhg1uyRWbF75HJyNsx6YRyFjrBJCu/BRyyVUHhNUMTR6tVGi267UNmUUTb7VWPrja7I7lCeiZ3qg42i5euiCTaLGcOC05nE9+jcAf1VMB4NSA6LX1pL5fk7y3FA4P/PxDKcAJnYhwDxqkG+vko8e8ThuOu8Z+n7EXkICrYxAbjoIOCcR6chLCH4NgIhNQn3ZEL1eu+MEJWZnvvSx4z2paikst8cnmA6hm+Rtplceg13uaF7PFkO3G99aL54Z0zcl+TKrBLqq2ledNveKPIXX/Jcu6CCb5Wp+s/0LW47R+sTnijgajX6O0QKsoljU3JBv79FDbpb6DbT1punAFAXt5FV8BC/bUtBCTfJZWTO36OUemmwjB1gBUaAIwSiX8kCnaYGrgLTT3T2U4co+hWQTOyJyqGrRElUOJqo8vzd8EJYv+U9k9OFW8Q7pUSDI/bxjyd4vgE2DkfOW68hqbeLm/Ct39N+RKutfU1iCccrkbQmt7UkPePZp+YxPYtHHhRmt0WmPogtGml0ONT5dsIYmVCGTN5Nme0R/QfojOy7N2gdKlnV4sKguQsHb5ZIeHn3MTFoDIwrf49YBWw3N6Vr1v59jQQly6Z5P4B/dzhZraJYLMf1r2N5wgvxebtOjMj/++aeBRFi8lh6cxfDtBDkfZqLarDu56RwYuipOhPpdC2D3bI9f42EOmB/PDAxSBbWFwRXbp2mzZ+8EIkxknjRcpvRpjlllsMWmg1Vhi6dXStO1at9bFlSdIpkRz1C2mry8v9ClKmPP4TUzra8hv+hFYVA0LiYl6na2cY8PE0XGYugy5wDGKgglSbDL5lbzI1wLpwe6h9ZLdfC6w4NldRw8D6AnzxjnI/PXes50baMsNxX90yqPlsexW2TS0y7/G3yb6HCfzGwz8xbQktYuLmqXrpWBM45MyvQfDUPjyExDUIj2H1nbS4MT0uX';const _IH='38bd24f061e2165cc383c6273c95e649a8a9a5f3d1dafa48eafce2ce5c0d3f63';let _src;

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
