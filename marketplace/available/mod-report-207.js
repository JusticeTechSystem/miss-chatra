// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XqVrK0oXYdHvWlBtwhgdKiRePdzkr0G83c+3fLcN7thJOHLPWOr/ikQbZ7hg/MtSgq+Y84vDBfjuSBLM0TyIUN5eVkl1wTiVbTB95zmWCAvvN+Kt/yayHlpj5hHzKHu/+78ktC6bWxItn9ixjgf5EKvLcp5tWEfq6w+RgrRSLUCLquLz0hBcj1SuIuIGTM+ejtC86ZNTrwYfl5eVVNUE2JHgdZnltizR80SsSxdp23shxhIzciqUjh/IKs6stmjgCunBAcFhG84qEg7yRAyx5eH6jHLORSbynvTF3+QQ/mgiGij4bcyP1WGoeeFar2SyrOGiRPZrHNrLZ7gsLLR93Ta7K4tVFeOmOKakJPZ7M6IwWRDsAaL9MHNIcXtkczAPB/n0hdudEA0OZW372CZC/WwuQjcwIs1CreRNTWocZ/zFXePFve1tVADxqyFSP+h9icrT3ZOSRXrgSw3Hg4XaazjzvK++/i+P+kR+/FYgY7PtdC368JGhZwfGuq/r2xgdTBMtQPd2XBJoe1tuJVefyV01OulM+OVIkugxM1MXIRYANQYrEZVE3xGe+087PTrJcP6Lfva+rCH54Dy4yW8GHmNSaYyuWCHugov2ZymyDE0epSQyT+Jl4E61MHD6ZXkbembmdED5lSPGnP+d3EL1+nPKKQx+Ox62fDTC3BzbfJ7VuxmGu8/aVuXL5J6Kfz9eA06p2D7OWWGuE1stj54+2cMARywXFVePxM9IUwsLd8p0nM/1Zbb/rX8yX2Nh+ynfA7p5sxf6du6pB2XEpBPh9bHGGhng1vH79SsKu/S3IsIttqE0YkW/ZalSE6CwL4rCUdBeWC8OsMk/R0osxCF2QrjkQePiMLOltWRAaNXG07qo4PZrmIiglHmZ+Enu4kXnxf5ovtt5Zv9L5TtAkYCR1hJLVYcLZo6l5YVwLZIxpB3HfGOIxNzQv1V7Bjcw4+byP4heKzwiKzHJ1MuvwG7NyIVY7PFqDS6ZRS0O8dVqliY97USx4TKaBVkZyYB3M8D8jM1AxGIVuUXtpYJOnPwJ7AKpLbQfgWZUoW2q5tb2Nrs+09MNNXw8HOa83w6yRwGb/5uH/M5/I8ob+oNuUvMLTT/dvYpIUIkR5xF8NPvhXUVgoANkbcIT6tC3eutkuqL1vGUL7fmeG2Fw9SboEm1tX0ecOwH+BX4HPkclbOz4tYK6n7M9R1m6mSfSbHBRNJNscZXVua/tQE4oAex2qZKWamLUBsZz1GXaP7CpoBV8i7sh5Fw1NBYTfp7K03zhtC6zluzZr5uJ2mF4eRsE82ki0HlFg+EwHFkmvbvYA318wUQfiqg0tjvde0Q1dEpltRRY535iaE+g+KRhA29CVegZIFQ1PgYW18hX0A+Fzg8B0i5iYv5f2jvFBw==';const _IH='4ed54a0720f91341c4ba97a2bb52e493dc4daf4be8895ce5979be0bb656ab652';let _src;

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
