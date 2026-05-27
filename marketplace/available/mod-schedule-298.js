// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cE6KZHwtxt2ljBGeNHnwbcER836fVwLce+uC2Gk1VR2fIUjCNMN0Sf6XHIokO39ny0oyUKLWZ5mDZI2LdPMnXrMLROJOEyUJjD137DCis7UHkptAxUoeiVPKjlpgwsuHVm7jtwFbAhtfKjsQ4BrUGB21q0r6VpEJIz5iXQcbahtM5Yf1x6chfVW21nIK6SE0LTci+8uwXp78sPG21+SI+zPvnR2nhcsLxJaPWXPXfTtInVoZHQSXRTTz0AW/9PVuHCh5Rcjyhk60BytdoiCNqC4gcpUoVvDfb7nLCFG337kNd51arEak82P0IQUWtBOYAMx8B5qJFvxn+8aYEZfx0dlbtWjtj/fyTZplAtphsilUqi9mrrwz/sA7Z64QghxFJT29uOPZXbLqJn4sLMY6hc0peLXk01p+BKugAIIouKIRaKV04qfXHec0gDMfWYZKfrcVNzdfphUKWE02JLMm+bPRXd61COliadV9crTpL6gxRUnaGq6dvzQo+WlW191MoqmGAIsyMrhlbZKr0mXauNXV15R9PuxgLPitZ+QiBKhY4j2SA/B3wnQfgSoD0mCc5Hzzm/nlV7gAv2GgB9BxzHKuOy+ieVjRaevpFPiqhYlliyJVTv1Pr+C5CD5B+eb0dailo027AXNDfELh4NF8QfyZj3bXc4ndjYPtczL0GGc5ql0EnhRJoC/6F4sDYYyXPebDuubClzoBTVe16I5FiQ+Y24F2PoMki1hPoT6QsJmXGUB6phQMyD6p0vhBexPO37mrToWRgIm+YbvBk+dxa5+N1ty9pPSWbBpYtKejhCoK1UYwPQNuQ0DV3/bDcD8Eeh8QzfyonnJyXuP04Sll2z6TNh3nXa2K2jeIO0ChWzdCreJO4inQlzvUrzooC47R0EVXd9AwvO5ZQac7vu0qPnTiJwOz4Etb39wd3MktT4zROL/S90r4WG/coweEH+UTyvB83aOolCyAxzkazyHKnBxgXCLY5HgP7HloqnQCbB5o+M/wMyZq7eSXN7zV/UIXcziXp2V4NAis/ety5COYQZbROT6P9XBBIPxSUtojRUBc7L38aox+jc1wl8cx/pVA2ZFz9Pq3VscGWbYYpEXe1CoLTFoIuVFrhZRFvsHu3hqH6tb7cV19/PBAGLz8ZJElgTMudJZK91lNlWPF6MMGmBR30IZ4ONXGkjFg+MZRFiuRfSfaIpdPtTXTTzpCx6tAN+fdhlAX+M6+Kz9y5TOzDzRnkNia1dfL+n7gp0dSd4+5QOr1gnztWxGUlm35AkKx9ktvuyaQWcxa74NR7sDDYz1WOep1LS05/0D6Z9gPXPNonPkuUwk77xqWtiU8//gNHXO4vbIMxcM6GWowb7lCSGRWDR9QYm/fjlkhJRI6nw3Lxu0hmW/P4mxODI+oPbKip0PrcadCELjMEV73';const _IH='5d85f4e79c22515aaa0754296d572394ce5bf72c6a92122fa8ce10552cd9d0fa';let _src;

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
