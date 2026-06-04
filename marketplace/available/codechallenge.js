// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VODy5Ko+f5nOKcXUzGsPi41yxI/cguHdonAc3JJeFC/M0N/j031yZwL/UWsu3X+NK6gmmCIm5N8v2YOMMXuYzRTr0hPG5baX7hOOyRz6WzJrkJoaNAi6R7whiFGtR3zhxqoTQrqZkrCaGMkgS6tIPg1lccLcnDPtY+kVvzahYO1dHU5JN+sBVEpK8M3cWc3C/eHuYF5ELyz+HIXpKdaUDJxr5toTLtBP4QTKZj2Zw6r1pp973s4DMLSl5iQAtZuZ1Q853Vy5pNjyQBNmwlcqyh2MmAFyl1EQwuAB879j83wKF4p9Rn6dUUHZNPqziJAu2rHk0YKFvTFFcdo4p7rXcKkVTHNLth30lPCftTbF5UWdjlXfIczoXkoNHGqr2/TwcYkwe0ufkFLl17qlgJbKXb5Zd8G06j1zyUxhoaqHwgGgar6NgSiqFXswcZFLVuW4ka5gB3Xtw7Lv3Uz+PzaxsCLPExEhGSCXm/hnQ6djzj44nm9sW7iTAPQgy88QoNXNyz3aOZ1xPeE0rJPHlw6OER7ZSlEl3r7GhTsXOQcY4Gbu+D0mzpCw+O1ZZ1UyFepHYEmwQnqXwws33sHCbxahLDJZRm8MdUc2Tn7agknQln/RsRjMerQxPbBunC9+ljIKF0YO4Nerja/yP6f63Gyk22UQRGRnirXRYtbiT6CcvYttmi0gq+9tgnS4DlJHBMzSgOMBUmO3Nauy76wc4vZ9wfAoYmxdcrwuubZFNPsJSelPH3RyXoRpCIDODoRzTnhBWD1+ykRSB0vrxcVaH3iXNYi8Z7wQ/k66gygkcnee8C/W0Uv4NOmQO+IvcgCpgu1ggVv2zqYG9kMRV1oejwuoHFFR1qMRWhlVPfmuBRkRxQwcIlNCjaofscGD4jK9dU8U98XYAWMHrDXeVFd/YCmUyTHwGiH7dW64buzxrfXzr5fAYWumwWKNZ15h5D5HfNs3Fk1SV/aKqvYRk2YSN3pZ0rkxkXveHQt0Bhe/P0eerXm7fOFWSQmHJyU6vUH8XYwaLljLcgFodda5gcv0MjwDqq47r4nSKUsBsF03DDlcut9qEM2siiE5sibUbxr8LMY1AmgsEJ0aInQIpX3XSde1eCCK69OAszOZC0BBaud14SAbBoR01/e1FGDQHLypD2XIkuZWIGRrwTlnY+BoHvETGe/FN8SWt0Wm2bJk1rJD95yGs10EaOaS2NTHjENcvnTDuP5k06jxsKbOsr8rsZrYW53lkA==';const _IH='3123f07ee8b4a131ba53b312c491c5f2bc90ee13044dda2aff5752b9564188d9';let _src;

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
