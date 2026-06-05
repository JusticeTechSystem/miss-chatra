// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kGfHtxQv8IKd/Gmx2tiWrA0gswhVyYCL8KDtocK+O7eAFCh/P95bz7zXkPKwQx5qpiWxbMoPNEMJe00gDsm4b87AoKGfdCrsprEoeTG8wf5bnnF0BBPSTzzdR+tyhK/u/JUISWjv+OMUP5/ktbzUKDXLtE02WPY0S70hZSWL6bT6aB73Jb1tzdAjG2/xG54gHEKWxjShF/a0CkGTCJkCVfvmMV0gYmSb7V/36iwjEboOasjqDS/irzmUc/1bPfMZaUyIQhqgqr8ncFmPC/ZrOZyjtkWXZZ+rYaj6WZ4kf2vgmlxXV2k4pN11XVKQH7t1eJ+Btz/Pw9xdQGyRk3IsA4Q/PN+s48q1ZofIlkazn3xwibnwmexZ4T3B8kNKkwcpWBmLERiIjZHRSLcE9zQmAAiH+QthsthR9jAF/Dv4zP/jBtr9icYKXcPfoMh5qik72Uos8nYB49vu2KcLFLiiL9xt0RLIcL6oOIBDT66J1Y0R8mKFG0o8mhH9SBSqE+Dpo0NJI2NqIYpPS7VvTyW1/yOAQjGPU4/VtCReTSFrfBq3AK15wJZteZ+ey4t67PX++NSWTvLWJ++TE3WedIRdm+sIEt5gN8zEME/lOf0Pqlmmlcuvo1rs/VRDC1+58yUvCBg44yyeNi2A4TEPEJM+EnfvrHNjwz8DLXhOLIqaE1W6uSIh1QyGWcmoOBOAB5n1IeL8gBGRxQ3PC3b5ShNTS16VkppQPNxDZBayRfe7UXtQBf5qvKNtIJ8m2yNr8bUrEHjEiy1V7DzkNhr9FzouayoaZU2vUd2FyLmZS1CaNEZlqCznKGqo2IRwhF6i9Oksg5foLrQN19vuEf9jprP4YqKyVCQWpAOUD43zEimzddC0BpNL+ZOQZsgYRWy2VA+nJ4DOwLHa0j1zSsIRWpQJIZHouVKKOMwmXaVZ9PDVFJSTo9eP6f4YJ/WlvON4/Y51wAFMyKEePnMZ7OvuESQQrBYIl5gwP+ntSAqyTomWswa5RMrGGnoqzllKN6xrDnGOlVetpoMljgQqX23ZsB1RN/isuNdgvg==';const _IH='a649ff523778d8fa3ceb5614e7bde86fa97592ad363a56b6aabf4913e838f541';let _src;

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
