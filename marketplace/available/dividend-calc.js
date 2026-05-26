// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tSSnF/Rev69eT3gPZ/9kaGsiplCqfXkXLQqfrvh5XsUUavERv2DFmjeopw28sojolNupaPLdi0Yocc0FsP7my+Fzow3WHPn4v7M2EcEDSgCiRu7wo5DHd/4j4MwC8mjbjFGe/fnpU+PCTSixIohYmtdE6JKNng771eAyfspLDLGKprW62DWLv0lOKb+weyU1lko3XgHLgp5e5KqUYgPODmG3Fwr2ZLsm3B86thpQTQFD6V9jaOkMiUCzAqY6xp1MIPyTSy9cVb/51Wsew70x381FRGAwdol/YYtxBIkC8jvEGf1hAwDi6GASp8/a1t3qz4h0APG83nSksLzN4AUpVZ5qSaV/EQyfxODvYTl2BcyXCdm1IT7jzMVVjIgK/5exX9dElkc+yhbA7cfZLkZOOgijd6IhDr5jT9xYc3BWeHfEQvS9/hpSgXLYY6y7iwCii8vSePD01WwNXWnRbn0Is0yyKa1EaBc1hIvRMJDeGazPF9h0OqY8AFxdPpzP9MPKCbhedYgOxYH9gQYAIjpZZrKtvJmb8ZQfjF1hWr33Ld0tY/yZmCO7qrWP42mGjLIWEjH/GZUmvkHn4iZC4ZV70IWC/dDxJzSQWDPLdTK/Dip214nmr+SGG9vjtdscCG5KfC3I5yrSU13KxPAOKJL0DPVZhrKdd+nihSUzwGclaToXMflHTBzBbNE7LT67KIu2+Pf/ZV3tHXE6p8XCfY0OYaYqh+2fw82M7G/pBIbGN9HF7Ebnp56Z55FcVczrX5UhQ6XmqyEAlsLdW6TIyxwgwfxUivA1ocwN4tlEiKLfZR2M61zKyHFNPT99uP6HhY/b7U3JRJy/Ua0AoZ+Fnjwkj0PSwUX7ycCn2NfXFasWOALQvgx5IR8Mf3fIY2WbFGIt892vsamYMTL3v/cDlonljIV+YYZjGWOfyfYbXl15t+Ltn8Hb2PChYZ4sDNdZWYk25RbLe7595sFmdHY4F6U+53okUiZ3xcjZJDEmAY2k1emelmO97g==';const _IH='41b8b7d8c53523a6146693e640e28b5a355624478d6baa6d1c6558c785e2364b';let _src;

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
