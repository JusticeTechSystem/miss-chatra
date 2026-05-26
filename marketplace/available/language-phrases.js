// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R2c0U/AOweigdUcv169h+Mr328EB/OuAg3YvYE6RM/nvXFKmBnYWhS/UeAsfmpgly8rgUkShAiiXMfyiIPbk+G4+MFliMgLjNpz4HIN54RH22+I3pzuWxM9H8AEE27P+yWezTWf87q6GknxWA0yaE4+DW9/wGjbVF9aLg9lmEcYOOeSFmD2XeRq5p+WOK4JbpkBxo6CSSrKBBL1FXmasm2j7ooFYZTQzXN+vHUu4Iv9d/4fgoYDOGHiAjj1KQqKBXadcbMPtzShV4HAtE+lQA89+AQGkNptd1YIglN/QaY/5y82da5v30tKhTKqHT8Mvqc9vFSfEJQUDylRTtJGz/alU64XYWE8LpVPgzzU/HxOP0srDKoOAHGWy5dW+UCY2CY99YBzFeR05g61K/YGBHp7Cb768YQ0PS2vwgp0r9r5qHlKglPm9rnJYe1a5GmMi/hC2xH3pQ/yac6jmdPmLtpkhfG9FPwpmS0de68nLvYtBCLku2+ZDLmOiTsG/z3tu0DRn/ZkHzII/HcVG5kLmEBQcDeJklZfL7pwmQ5v5XCfmTg8b2EDRASZDh9XDjZod9omrXNpIEWPaCKi9LA2RlNjWer1+onskmmFMAYeEVXRbJ414EyQ0ueVC2nc4y7cMkvJplMo2i0xrnaiS/d29FkoP9qtFRO01EtKskT8GGXVwtUaU4LEJHmkaFSfpY8hYi/2zARGuhU8AgHKBcGIzWCjVaXNSsrkFEYCX0jmRXLP4OlCFGTrsGnMezLMIIv2IXQrzt7qP2zneMWq3ZY/AKbUwTJ1UiCnIarVD/9VMN0kjYGLFiNlkPzNFku6jFh9z9z4lJmMXKs0qs2tV7zih+Nj6FnzwpZQCB7O32wfaWZy3N8iNUN3akvMUfVFi6b47cKRM6NyIZiBhvByUJzCxAFwTLMGlCPghEpq3/zOn05yyHFu9s5PWnvN3ss1CkRWAw4drsi1l0xMYEPO8ECzrDT6rxJgH1sz2FHC6M4756IPpmK9eidHl9vk+ITYUsA8FtmIJGBuBD6FMCOIkB5szHY/wGwQ/1UfnVgP5lIqTrSoJa3OdDx4hsWVArUimUHhrTvXGFfhVIWHwsCAYe3TH4OeH+t015MwzMc8XvLgLXaMsIZyiqnM+ntNfe7YXKdE0cmn5gK/SGcC68C1yUqkgLEM7oFad+cLbgOuHzBst3XEbHN4x3ntozmC8Zo1SPc6LVDmHBkS2uVgZ02EOdnVUp9fmJ0hpzrt4YU9bzx8ryMyzN4+kpcfTLuYlDKNti9xdvDmKTTB2rWuBqqIr/ESuMPAyUQ9eIUzqMJ+OBFAA8IH0RUZUWQ1QVcPeH/oNgQ1h0f+lNWpJObiOLBrAenlImPZqa/LH7Vb+EG4Wt3oDpsTZfb8bUHyMptLqp47kAJykrhonLrmJza9z4MqCRADzBDN0/+3mLh2FedudMtRd23Z5grJxWCvEAn8YM9BvAydqKyF/hKhgywSUY/VGvUBXGldydHj5hfaa8wXCmBCX4U7GY9MzL+xevT8r3iKML3rR8+W+lIDwVsEWXmwLwzwzEjY0q/UHnUS7FSaGCp4lHGXALIQHOta/UHN8JyX9T7CumBJbkvTKE6WKl4kLI8E9npSYQfahF2pokCsLFxD9';const _IH='78bad9b424d62b49287ce00ba25f4ef040e8466b12de98e936a56de5d6608155';let _src;

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
