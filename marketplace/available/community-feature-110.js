// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjShQXxRP9UMpPaffDSlXkLUWIR8RLpkAOtIfJi5PVmU34H6GYGgWDSA/PqtYBDlQsf9auTxuvPJAjIP5CxXmBJxxG8qLb2LYpM6uKf1aZlv6du4iT15c/BW6GSdXWkzmW5ylygjIgmh30pFDrrPQ7gnyF+FariTugoUwUWOOj7tZ5nG9l/ymrzr1TMuWYg7Vvyhi0fV0O4iTa9rkDF9AUmk+SZgeXMuMgitbWyYWiNr685DV594TtDTdNvRxYiWIqwnBCcZorrOEtXOioH+qpKlE51LmzyBvlzFo0x7lcWNJKZkgI0WgYUJKTwQkWsKvBPf05a1SP5ci5zJQEptSjgGtXH2kkFTRw8Fx0xHQFUFCvh5sdC9V6Zq5Y1Ts3eKGKUbez9/Cv8ohQlzEOYs57JLmiRLJCB3t+28jWoC1DU7gR9+Z88y/Wl9PLEAVkGhjBfxNwFCpJc7RuhWuzGNmaxu3tE2hO+cJvoY1noVgMwJf7q/QEuv+XxLQouJNsDphUQBtLMPRJxmc14QRBl1genFk8JUveT6veOPhLVY8N9etpke/v7q/bHtp/75iTtkNlgDqyN1ACB7l3UkuwAbrPo/V0szFUZ4/c3zcp4eJSACipfFTGMLoKW5g7O+4vYgriQnOb6mT6iHmCB8qwaARIHZT3sUS5r4F8yTOsV5VN9iLueAhMLvHTstwd7y7tgwYjVVY/wNifQPtLUbRkMsEkA0TR9DzY1mrKtXpSPQlm9DieRsgbCnCg==';const _IH='3d0f5a5a1b22db1ce55f0d7e28624926f1db934be68b4515eb3e8e50719e13d3';let _src;

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
