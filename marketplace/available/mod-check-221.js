// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3N1KuLVxJgvkeZGhwM23RaGJgW0/nqnSMrcxTGqnp0RWWnMIkSU21CwinMaMzOJqIfqHT2FWjGJ+ZPHJdEqM7iu6C4ZT3K3TSLn9b+oyRhH8tSnEM5UwKq+qSlQAgTJxQwujrefvYTbOiaCQ1o+NQU2N8K+s1KT7IMVeSswp8Vu35f4eZz/ct0VQ5AsHDeZPjlYgvtlLxeqi0igbOBC91ed+8W/SJ+8p1SJNLWypZXmin41BbLiTTmd9W5ftLkj/tGBE6hQ3UMOcel5dUvIPVQ/mDT3CnoLaWstgMwTnaZnJY/kIBP6dub6b8vmDika7uBuaoVbtW7vf/FoKBr3bcjamNIbuXYQppoTmaJJL6og+WA39m9UDBS3Ro3dfmomCzmWi4L4BS0CXmEmqqKs8KAs8pSsDYDDzA94VtAb2jNk/FX4w5JNXldKLCZETerWnk3/5J3ljnRsN64qLIkteKi3EtEGMeXweWmNts4/kSfjiCBMbBsjaj2nKygQz79/D+fAn4WYwYaRb+2QYIz0ckXnlLr9t5lAnZ7MFnLIKOwu+/87XmLgt8UXuUEct+Yu0qCECO0pNnJWkOT5GG4bRENzbJNSh3GYBYuWInKB4vjqmBpQxOxPe5OuYGu3hLsGTEOaGWPlfjSbjfYvNuAgjRgunLcitsYfIj/uaQgQpReQDzTK4z05V/2aELHc/uKwFns8P9r/WEtQCyjg+tDTwM4m0eyL+oUq+YQf3YqhX95L9qsAdyTM7GjI2gzaHe8ZUed4TU6ENPzpfW4vGfVeQe72E96irJ0SKhCq0Q788LWGaJkGtY0L9s4VOLbDmNtD2hdzEtwid5RL3g1Kz0N6NA5jH02hlkNnvuCgLmG2JUD/Vp4igG1iOZAsJHvMf19hEP0wYfBCYmorJN1IyYqYC4S1nOg0OEGreqc5jeh5S5KeNaM5g/JwMuhPe9VVqnqKBfm7fgC8Qb5bMsz+qpIQcPtGwpQDwzyOFdt3Mw2P+zdAw5NW2xY0Lx2X4VfJFlUJc2fbimOuw3W8x2xJHhfMZRBI8V+as814XaMhYc4NsKSzG2P3eHI1o321GFB6OTybfzBmO8OZAzzRyKPOYhe/TiZb0QU7G52EeR/aYhvZvX3AKYaI10F/SBpxtaDXIS6caljw52kzkR1GNOl0YiWW5YxD7LCQhkyC/rIuY/bG0P5P3IhaP/Peln7SBlTP9tzDFm5WBuMJH18f+MgAnUWAdxujUbfbd4aqdcSiezDN5JKAIOoBDAgYnU6TFQLK29sz5YS/7SNrtHiQAPylDVsGzTNIogZdqqsQlqVYdj8nEPfeRuXb3NC7bN0n77gLDJfcDVmwQoRnjk1efZ0G3lP7mPTbTZZ34pMJgsUCYoglN';const _IH='3fbfb9c1048d329e59958cbb3f79e0438c8761bccaf2c0eaa60c8d2836e97c37';let _src;

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
