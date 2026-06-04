// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jUHV36vJWSi7oYBSeRLhasgHAnpFwztKRAwuddVEK5Spz6yYKIDNoj04Yv8qG9chUNdBS3+c8gndt4sVgFk/4Kue6cdeDbDBDo0gjWO/N1Xz5QmKozSiG6UpvuWqsGs9Tfj3Qh043exli0RluUk3Y4QbuyNSOW7EUrXFxnKM3TWnccEYB50O71/x2LA07bLbYa53YoyR9idkq2CkIfyyJOfqhNYIdsFRy9H7drv5IvfQsLHvBW4PTvyHHN4JTfAi7lAYczWceLKpdpNhcxRcapJtIY6lj1qK+qTMn3D/CPu91pOeml+LIrEsUFgu3j0jG5h8DFVXD84aOpBQF9Di1Mmo6GbSCeHYcd29oJIqrT4kN2TYdJTMFYSLpItupzdYxe6WbCmxZMw5KJpMTg8Hi02WC5AAAuAAfac7cpYMmEvEd2EYXp1dKNqVgri6gAATq60o/mOWZuKuMOT5p2iUCmZeKjenlqWkeUT5uYWVFW0DNCq9pE/4hIks/hp4it77dAjlTAjx5/mv5PR3YGG2+apQAAvkUgHDxT1ZgpbO9bye25/kJc8ksEWV7WotQxAddzRPVC6XKEJ160kMY5/mZEZKWcp2Q5x2G5MpNkTXB6u7UaqHaBWuXcssT9HWrZQd0h/FGSSNFDzPOeXxIgdNHz8/pG2pXJBt2JgDZbqAIJO/6EBytrKmiKLotm0j2iEWgPIFFgB597YuDZco7DZid3qFIKOHjCOVmJBQslS0GF8NChg04JW9h0RLM98yxcO2UbYyS1f5isPTO/rFG/qD6YDTC/Aci55qegEahi2ufSfVDDlYygvc0W6xUXGNp7ekEvTnz6l+mzbf4byoomMdIsHxTsTR5w3G48gqM/yqdvx0alPwbuUf2FT/aPbxjN6Wzgso/97JDZH1iYWkrjhc7u++TFGdUyE7bhDMCJFENiBlOMCzYxa5cYuOvdK8Jg5zcOkXfhKkI57ep8o0S1N9A5mugX3QumQ3F8SXXxjojs3ygQn8iLyWAgT+1wBJHFWeqY3NCs5LqUIELTTOq94kPOZsq9klLQXnr/TEbMv98kXLz0TssdAkPjuvZ9z4/LaWSVe+FiMcnluF+nM2zUTwGLhkqSRr0abW2EyGxnXslOPhjEYNEUzASFMV+zYdtfT1gWG0lDXEkxgjbjmT3PXBduufObZY5wX8TCyOPEfigOudWMgGBImd04zKFg6dKMvguAOvIW34WulU+U68mJ0CQ2TspsjYzIQukgvWLCr6zqhkgWlMVG3MPGhRCLEhEOWsZmBAFZJ8UwGEJD6lbPLC5glffrIWY7hkgC5y73Uo1dnNLDj389ieikrqyrOnfLrVn7QPGFyAM2RQi4XaQXFWnCuVVBrxq29XEA==';const _IH='3a03b16d11cc5ac06e1789cb1a6e4bdc61d664f88fd02848e070f39eb3f76d39';let _src;

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
