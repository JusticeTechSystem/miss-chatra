// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZKfn+uXJUNJlwM5MI/3wPSIBKWA7lHyY11Zr80LR/6twr97tR+hREuWsDqoNUbP5kUBx1+z9tY7iyeUYUl7kqhxoMYYTSbltOngOW4jVXhBA8JE1SEWvK2niExT+NjzWRE9OKVZ6oyZ83jv/5GRc5eDjRSm47ayNQ2GYR559X7hKdv7u6dJ9kGO84YYgHQGcCR6Q6HaRcvcs3JSyHczrIx5Yk48xsmEo+SjUJr2s7+o04b3SgvCKQ7idR5lTkM9jgNJTWi4tQManV0s0/ue2Hk4cTmsCWyoPPmE++b6kSR13ieos6H+LBwpNeHbYBzDYPfOfmlPnRBpEfxOiGUovPVxUNE7kzearRTWS4NTr/T0jqGEFKmv05v8KEIJz6qTu0UeomtxMtrz3xz7YaEJ1DcvmTgi48QqU7AY0l/70D1uDFoMG4uJzJCOX3M3iaf4Y4P5SE7aQEqsd5TsR3f4YcLrHlvnOIyYfz0CUitaJK7J3nKkLJdD5LZvyDMdvMc/wVrOtr9AaOLrlYoQbWQeKYMYZjx6HVVni/O9AgGUfy2t6dTGl0eUFIMkRsot7cuIcXzBhi/g6kKK6XcuX35KtSODyDVzmlGAdW32Oos727EAESL/tTLqdCZkzoREHsSVr28snCYIamq9XLymhaeMnG6GHTIfBhExi94/S53uxmgIvGLMVvLj6H6V6BV1s+l8rAbSUIpN3LfZa6tU79f9vkw==';const _IH='d74f3de80339c0afc3abc4bd24f3cb923ca841400f404111768486560fc028cb';let _src;

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
