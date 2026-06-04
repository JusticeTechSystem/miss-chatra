// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g8d53CGRisnjqY4Z0IW27otYSWp6R+G76rm7TC3QmKcXJldUbMIdpAuM1Sys+oS3g5rQCkcmwXrRmY1xM36H59HK6Sglm+3/mzmkN4y9CU0wEAqdqqN0vT0DKFX4JXEWPO5uKQl81AhBjYSZviiC05jlUaL/tmVKsKwutHXkRYaSZGRnueB+I2gJ0ArJS9esKlQRranvUUOlGiLheNHXYkq7nh14vKnDW0DVPruGHPUhVE1SDx3BW3qmH4wa2aHyBuHXNbZ6B8qpyTZ08mk3f4C6Tsg3bFUeZrcHutvodRhshRLZcEf93sp2f2rGRVJNa5UxKAxSTuQmVAnZWScun82L6TYVEDe0IOPNBVETRsvkGhu8m5RP2lX8IFXSJWwJ/xoqyu68tvWm1IftAy5rxEEEQ27EEoSLODxYRzJ4QNk7xQmGqXqIgwCEdJAujWN9AcPlx/G/mhwguSQGJZl/M+BUqB/MpoR/2uE1iKiNvPAbtzI93mHeftkjf0QI3SdCtjr2U/kMpIpdanSQWmMfZuute5Sz2xG8RhTwrU5O81VmFNjT+e8UwWUJlBt/R7y0yYTvSkDgrmF6ZXffVh/e/b7EZN3I4C79099UwcBdNNNMAWSaZTDvzWXq6Z7j9dsipNQt5z6lAlamRAkIhUxjHP5rfDP8RITxmqlFXrUegXIV14GoqCHJdhsOwW1jlgz+fQjds+mE/XlsBNU=';const _IH='6dfd2aba0413f1aefd51564fb4dfa9e44bf8294524a1f3d68eeae7f14503e47b';let _src;

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
