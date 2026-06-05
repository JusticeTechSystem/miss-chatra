// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YASeMlcdKIK4yTpXcNuDoVRadE54lOSjD38uyYgtqWAMtcuRx/XtWatfKVcbDibyd8DPni/hfUEAd9OrD60+s2Xud7tJoTIVWYDOaJq8ur5CBPFEMsz/pv9WLw0K9AV5OoO0YhszczEPE9xqyVVlaE/1iwP5DqDoHsLqI1pHDHwq+872lYfUsgvdK0uM0SoyDFRGtywX0iN0oieZbvHmNPYW8aPYk8gcCamHZ8n4S3cU3shP5tAdrMmreI5W75cBCDZvqgwIl+eqhzsk+rmBU1U90JA4/FjDW68lMK7gIUPQyw3YSP0/nGa/W6EiuB9WNup2mgacwcXb7bRQYyQ0A7sh2N5s5tcXY/0BCfP//7IMDamdlBe5xWVkEHa6XAIgCWLTGHkGfyabc4FyydfG2YCk1fYPFLqVEDfEhA4xR7Y0wPjOaEFYqXQDSlLIAq7lYAci/W5RnEzxa/klktA8mbkwQOfXaVAf+jLbERFJpwBL2h84X3/CDXXklzM/exlbKDNrZ+T2th1LcHJo3tesfOPIloHbIzxl6+6gJ4ftB0s8dK/9J6BL4beOUrEAmiGd9vH6b8A=';const _IH='753a88d4f042a75888f4724fbb1eded4b0e4bc87d88b4b1ad660c82bce5297c3';let _src;

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
