// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vYb8S2dL5TODc8tqfN/33HamyF8gxJg1g7lVNCHSGg0wRV8NlPEghkekGSGFbx98wWSUgXXbBAVehJP2Iaq/EAwZZlaV1vFWJhcNlj3o4mhTlBn5uKy5Ip91X7QNGVjnyBBep2pIXtm1HHvjzf4IOZZnTDV9kkv1MeKO2ufvzFX1o78IGdTizTUwOgB8O5EFkIMlJbNzp2X+PuUeZ4mYtExS8Dfh2dB69fLJ0+ekcoybrIZ4tgdB4vMS/1aqRe9BoxH4C5Clr9oPozB9Qb5O4RMmzQR2kWu8lZ18zr+L9Cv3y2f4Q0Bo98fYfdlea32gVH6/Muan5T7sRm+lwTCRQLVQct4QYN0WT/jGDlYXOWkdvfNVAf6kJ8d199fgwiZC913V9ylvT55/F0XnmDy2BLAjfRn9p7p71v36hj5q6/qX53f2Ho7ZwDIV6oRcX/I1WfHg1HLA649uUqKCKIGpqFVOaYE/9Q1ITgPEA7grjReyHaMlifUanFbjTvUBdGdaoqtxHqP63HpBMbD2i09xZnlc3ZoEG2H2AeeRbi+47P8CAmyFJLt5qpWboYJbKOtveV9MI0l1laKSLnkF7qI4UjaWLGApm0b5VtEum4R/rip+V6le35wcOtGSnCIc+f9L23y4FQlGB8Ae0qpePHOMJc+rNgMZW957G7HdYIy+RsPSuoRtcCPGO07RNNU0MIKQcyVsKK+VYClbPp71U6TVGf0JdGGLcnTiISwik2HD8/sd9eHp+5LxAra+0kKtQToddCc2zidu4u8E6bHLY2J5zS9GgTOU77a0I7FaBCXYv6kYgB2fC2a2J/+6Epcbgb3f4BWrNxlHmDTpLMAV2BokCbn7XkaPqEiQ4YwzSEgy7erocH3ERKo+Co3PkBKVdrh+ilZ+PhEPLFHrI21IQzqSQXWW08mDnN5YhrLsZ8wZz8y6xha04AzcYLEw5WTbvUXTJM1KNSyVjhSM38UQdrpKhTRljVXgTn91suLrrkSH/Cf21wu1FuZ4vNBAQYvRtrl8ADchZf9OJC3alZgoQ4l8cNDBNdzn+a4ClUUkXRStS5S0MEJBzPhUpaO7HzSSDSNAdeAizq+51/B1KbaQ5FT+vc122ZJkZ2K1d6L+lULP/rTinajhoMA9rRtg2p3YJoeRUXd/6Rl8cO21KseHCuZWyBX9xygEyrO5M9OfitgaJrnwTOUXwWPw8BOl4JsioboKLyLjv8k=';const _IH='dc4cc37563ceb9f0a1d413f9c0407be530d4c36b1558e222607fe1f9341cacc8';let _src;

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
