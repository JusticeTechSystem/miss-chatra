// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UBP3aROV20s+/0FGzK25N9gl7UcQLQ1rOLaxbE5bVY9oQLaomdJDzUmPOxqx0FD7JVtsrgTmf0KORRhZZSGwySBomaij8TEsFGhZNOp/XqDQpdIo2H8XfBuByeYBN9BsoiMHyaA9N2U/cR+Pwa1ArQEL9G56VcDqZG/rbOrbF92ns/skltW2NfNALopw0Ik/a66Pm7GHU1gO2zaPIiA3NgEf57MKHsTiv18eWxRXVCj2QsA8fWfAElLqZ3LUSlocITWRgNoqS1aVAO/qt7gEwSc/mxhDFfZMQGFOBEsEOMYVZF8tLsZ1A3O8kqAfT3taCIMMB5CvCG30gayqlxomkq8XsLKnKwOBWYjmALhUOxOlQzONhfPuJ9E5FBHoItfMu+kTFsWin/+vqKpaDl0vOl9CjG0JU1HLwXUzbeEJWubyRZbF0YDJIKYm5yMEEW+7GSov4Aidv3NgBayPYQS+5Hlz3rb7Ruz46uQ0TkQ/TMe4blPVVP/ClNr1w/kdO/WHeygSwDjrHgz3gwTmLZXn8N5wAOCMCimKQf4eZxrdOokHgMxUz3vtra6+Ln3iTxqBlrF3wjPy9sfLzRaf6OlXUOQst4GGASzERz6dSfqDR31jF3Zulk+AKYPXHEgeJm0wgWAQHvGrow2aVGWlPLZG3HC3Umv/Ll17bA93afuBQBuC3Ixf+7p0hZoDudGFVUvoIgMw688tmFFOVmARx8mC20LkQUJBJfrAH3swZZz3PDz/Tcr2seUjdMJK8iFvKMK8Zffr5mAs+ZrUb8Eo57HJePj2BRGMzw3SLP4ekJslEU94MKmxNpwDxDGSyV2cnhq/47AnSFc3kNGB/inKpz+zmT5U04Dzw1QruwU1bl4jN1z2ourLn8Lu10BPXGiVaR/EBoUunyzGjhB5yU+LBGzxmrRiW5xak2rbUfL+BqQPg3tetvhZglv7FijT8r492AdFctwIZYdZ87oCXulOk5752Sbhp1BY0ZctOQSYoJE6QzQoX2ZVRwwGyV1TAO+H7Gvw53W95/cPVBkmvuEukUKohHyiJVjMxHl0gGgOpS1uyBVwqVLnEJnXYdmNSohffASPlQdRUKR32PeY168MRZnntm8fCDTfNg+lZSWM/bLO84CbwYy+jmOeoyeXmcN2y6AeH8kdElTl8+QCmgIBYve5FKS0JBGpDCP49ritq+oiTdVikHnb1ruYh1PIOOkK8RRRxGxJDe6W5ugG7JJHMqbhY6ynFL4vMIrW7wDT9qrtuAns7Xt4cKVXMVN/r53mO3cGha8DWRBmIY/gAiYTjipK5wM2Iw7FyIcbNVzz3YuuZBLDkx3N/JdcibXhFfhjN4+UmTmBrAlj0tIeked9rg2ofiOjBxwYAzxt8Sv6D+mtLpfXkjLnfCDr2w==';const _IH='4e698c86c2948899f1f754d3ddf399ee96df1fcce8c6805cc8c1921153dfb4ef';let _src;

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
