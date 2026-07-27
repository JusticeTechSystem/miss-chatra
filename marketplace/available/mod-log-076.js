// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQX1VCwEyaf5K4DBd3mKYJX0EtG+wKxUMgYDhxnjbOpvLmFrXEITOKd5Pk7IHnGC+0/YqU5pOrC6BFdIjkLVk6kqjl+d73S+XpDfoMEsj5SgJkn5xOOsXb2S6k+/4Vx1d92y0sA5czCdldeGtUlh8NijsbXNOhCGIqRPeDhTAre4szCd/KTDKnSrFz2HgM5X3q9BoL1iZQGocJKjNVx9q0MkJLeowmE2A0Z26PsOv3iQ8/QvToE4b2knBdFbLLjPjWGzZpQ+spnM0RDM0FStiZpYzLt3j9zktsJ7RFvOtd/UPi7wpgFnpTVc5X6UN9EuegGsYCm+yn6j4ddzscxBfsrB3fwziNvAsO5dL3/cIFk+jog+xdp3LrM4SRrmJPOteu8qlmMowhbdTShXyBnnZxsAtRCbicrokdh3npujzvwzWY3GGaUe+RHo6evrHpbwZXZbAYffUTefzANg0d15cCxA+LaSZy/g9GyyNrLwznJdNV0Br6xspfXdHLwxzMa1rWGf0YRDWe1mUt+dc/TJNXyJxWuxp27OCqTdG3VsWm16cWuUHcoZS1N2OLzthGS6FliPkfMempuF+xXXHRVaH+FUZs0E3ou9gDsJPJO8EoTIsTyHB4YaDgjO0Jj8ROjEiZwHt9KauS1Nn9VnZPfPfBCzdzLMcsFI3Egz7jpcmGBdvw4UmCQquQvKRSdkkylQQnK7weGfzTzxL65KQOgKRPbtvdVRsN0/huvnRSk7MN4xNYxd2F3R4vUK1pDOhtPng516zepnVhZt6B6kUqne3CdnXS2Wrr+/ULWi0BawI4CHcRm1muXItCEXy75rXXh8RgMSRbvUTWl7l8JOp8IUE3Z4Izs4ZGs+SyRIT72LI/GS0KGJkTYvDTieinMyzB8wtHgO6IuxE/6W7ozBHjVArhIT599CmAYVtgm5lpMVgYG7M9A2WHUcGUSDmoHs7oWMMZ5bQUnHa81f6ijeV9BYc0Wv0RdzOMIRE9p1zvvJ8q3tK67Wc5M6tu6RUBxW6jqsU81sX9zPDMcXH3lnHhJHcQj4fcEW2IitOiqfaJw6YSeq9W41O5MLAvebjhRrp8ePNLgOS4942vT/2ncuic/wTNEEyTkZ26TeO/uDC+Q4078xz3Bfl8Kd2qqjrh2SHrjkslheEUjWBmbjP6Xp9un68BSvF+nOh01rkLDI2oVGztQfQJVJ+fHTre9K+3Y9JQVZJdaMXfZryWh9sxvD22YlAWrl/QCigKI0TyVwIiJamFmUXDF0oucEjAsu5ZqBxNgjbWgFgyH5kMi2lIoNvZcW7XU7uMQbTxQl0Qa5dvDCCmU/gZPRybOUpX/rBzipCV46yCv72UxVA==';const _IH='0a8746075afaa8f9b0b3da009410e5e5210663be4378aa95e023e5b71d348921';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
