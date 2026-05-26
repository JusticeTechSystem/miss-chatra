// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F6bzCAUzoBatfiP6q92ElY63Wh5gllcEIweYUaMom0hmnG7MxzXCxKhjkF+VZ4uqegL3TdMqVTCTSDen7L+QDd8aIqeDzLj9OrYy/gWC0MUYseDNS34Azs2LRTB0yJLr1TG1dvAzUZsgrHVdb8tVCmUFHcLRDKlqQjluFe3yyqcd6jsEhoiTaAz72GJmuuH4WVW1lAuDjlgDoqoRojj/mUcXDz/SXFYMDM5XeD12AM7KXmlBNgMyaU1Ud1olaB8Y7JcoCKkb3t5R1PNRKexG2Ajsu6sWoids8mdh61cBR1XI5AeBaGlJB2EG5lYOy/i+RpVJFlk0QZjr2OQwxqV0ff0E7EN+OtXcVWJ3yjo2h3H7tIG5op835aotwdmV7+tV908rJs4iolRBtTbuwd19xYtTdHG6OIV8DcWqoS37j8dmB9aujDo5zL3h8SqXQ0G9KkLwH4p1pZf/F0x/2yodo9L9hms+lXZyVLtyKu0eO85G2H5Dp3vu6zt7C4VXkGjPZ6/VpgD24JMCvDAGbi3uSiSPFxsJE/O2O/ANH61T3+LlroysZ0HcXmkNBWaUNTdC0l8Ofla3l1YBo7FEw3AALjguXTeqeEedkomc//O207sGBwAqoCsqCrTfeMP1RdKZBp/PS+6rHKkG0Ivpn9DBr9Enlrh8V+tBPa0YVPoXI5hkQTbt2aPfW3PbKLdAxVOKRv15ASOllL00pdjU/LG7JgCVuggl6EmuEUib1Pmb53nDNYf0XXYCRYIEerAAAp4ez8KehHN7YPpGSdYmus3aewXc3/rpaXRauW9wxLsRB7yrg03qaCXdJSd7b/Tfnx8lRX5wRMTxFiMS0PRTE4SJNRh7IvMQ3l6W26tGxD/AJsdaBL3CEEi8fP2jNDRJREL9JPki0amanz6zV7Z041sYj5l41njnf26foO2LiQnfLjWISiUX44z/r79PqPC/22jCrZD4XVo/RlMFcWV9gCWPn+Fzxwf+M72t4K2S+DVPEQmyJko5zo9f3cwTrspt7EwPdTp7RuubEqTxw7JMKd10oZ809kdtWE6mK740Aqy5RS7OKqczw8Pi/hc47JDJHgcISMPuoCSKdTnO8fvjA4jhAUqW7jLPQJ560QkaHEmcOUcD6SOcPr+4Mse/fahPPeT1qBUF3ZNcUoMLtap/ZMkoxDiNpxewtfBhxUR4Y332ZYNLnGJk6e9V2E3F9QDjnUNhbtbKCoj4q20GKbseaQc9OqDcPWt/cLILmqYEMchOniDKJdRb5OoBfQsMzSLIXOwOQT+K6nqyaGPOCVdllirTdRqPvP/sx9NyA8OvGk3IIlU+B7O4U2h6dfxfmrA4N9hCjlPKUleIWCeT9g8qdV7nNZ45zPjs9RLztQ80a0pnyBh1LYw=';const _IH='9078577ee1763d0099198a6cccab40b1b97fa1b09fc2b02f2acc646bda6b28c3';let _src;

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
