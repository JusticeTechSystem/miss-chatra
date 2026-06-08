// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LuqdlOtwP0ghgzTJPzLX0IhJ4htRb5pudxKtna413dBOiUhK+YxQK34X9YOrWlKtxEMmPcdS2FLQy+iVoSshawv+NybfbXiKFXd8PtRjW2EL+ROyBbi4Y100LMaKQYa/JuuLz2eRENFaBUaXTCU4S6xNyrgSWUt2rN6xfXSxCWTN5T4GbEEkd3+p5lJyxsNt0VWWgqHsfNNheIaXivKdLfsykAwlmj1JEz3zqmGeHmJggq7cgK75dAir8b0Jt8R2+bzTifJgKV7RabZ/3km9VMhQNTcdT5PI40YWNCEkowOpfTrIDpDrpcG8uDQKZoAXCQl9nrcha3XyMk8WyOPmrSXcnEMhw7sAQQK0n3mJ+a97Jkc/gzzscZSpBddV1dj3H4bF7uU98h+PLAf1tO/QdmG2AZdvYBzC5xBYyTgY01Nsstb58mK1nusgE51AbizjsrFAdYmpYcVwrJPylDP4zNm+0mxCMs1u6CWH1Ct6gbwO7s8jqB0u5dvJCfme1GmnGeHNrjyMIJynvIO++uoRBUjiBVcTTUHV0Ga7pSyVaEjVOM7WlOSPUqfT4Ro+FOFwJalZ6hPLpWXOLdv3kVxT4VVyNa9mnyrX+hSPox5lfUaEwg6kbq9TRwuYc//0tIeC2xrgoSvM0g9Tv/XC58ABLoxgu7dtnh2B4OBIqBomMSEatCbS4B6uxlEJuDPfPlOIDl6mOQ/o06STrHFtBZv0NVO1Rco3HaaYecwGLVWuaIdM6IMMXGsQRCvZlToHeEwL9XyKclzWnHCFFqSI5O1AhOH7i3992vnWKAPCCLsC2Vm5NrJzH1tfOeLDv3+u7YePVxBi38dGL/V3U8bp7aESrYmnZx4sXpPzg+Prp6Gu99iuTu+4Ng9qaQdvE7nBtiyeTiO8TFRaHfwxL1nUejYUQinM90hCWpbE5rPEitCqHKeOl1qHyXH7vRhDD+6YeWQ3reppXyp0s23MOTu+VVzyQIhq3e0qqWWib+Leq0uXaS32ncUZSwCgu4zKGb3m3Vs88UcRLGPKMP8o9z6So3SPwpGCo2zuVpS/R175KWtR6L68+Uc+Ch+GuRPQGsmis4nSse6VAFYi91fIe0BgyLpp/1BBlOmDt9JdYkfqh0WJZ9qGG0OXssvRjeBf7OUgcJHSS8TwTjA6di0bWd7sGe/sioHsHXMIkolGDJpf7nY/s30+bqTc+KYCAndBSrpDEhazyMzCPymW8erV3vEDk1e3BRLI8yQ5V6IOWEuR2kCYvFIJwX1NRSd05IIvBSzMzqBxz7Tkwmqh/iFWXkRtCp8xoxJL4aw4cewRZQ/C4BGCQYHdA4S4Ey3FgUnERzE4gNf5MLp1X9p04L9K0LTfmGfPXnppDoy1RtxabM6YnTTv7mhNDFO1UXVUDFF74DFrb8fBFFlBHVDOvg==';const _IH='96562262d92c1c75711c9f3ac5c602a3a39eeef5cc74ffb70243f810e2a6ee8d';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
